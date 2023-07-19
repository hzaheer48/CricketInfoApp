import express from 'express'
import request from 'request'
import fs from 'fs'
import fetch from 'node-fetch'


const app = express()


app.set("views", "./views");
app.set("view engine", "pug");
app.use("/static", express.static('./static/'));

const API_KEY = 'bfc9ca34-bbb4-44db-a5a3-1d73883e4325'



app.get('/index', (req, res)=>{
    let url = "https://api.cricapi.com/v1/currentMatches?apikey="+API_KEY;
    request(url, { json: true }, (err, response, data) => {
        if (err) { return console.log(err); }
        const abstracts = data.data.map(obj => ({...obj}));
        res.render("home",{abstracts});
    });
})

app.get('/scoreboard', (req, res)=>{
    let url = "https://api.cricapi.com/v1/currentMatches?apikey="+API_KEY;
    request(url, { json: true }, (err, response, data) => {
        if (err) { return console.log(err); }
        const details = data.data.map(obj => ({...obj}));
        res.render("scoreboard",{details});
    });
})

app.get('/series', (req, res)=>{
    let url = "https://api.cricapi.com/v1/series?apikey="+API_KEY;
    request(url, { json: true }, (err, response, data) => {
        if (err) { return console.log(err); }
        const series = data.data.map(obj => ({...obj}));
        res.render("series",{series});

    });
})

app.get('/teams', (req, res)=>{
    const jsonString = fs.readFileSync("./t20final.json", "utf8")
    const jsonObject = JSON.parse(jsonString)
    res.render("teams",{jsonObject})
})

app.get('/search', (req, res)=>{
    res.render("search")
})


app.get('/search_player_by_name',(req,res)=>{
    let name = req.query.name
    getPlayerId(name).then(result=>{
        res.redirect('/search_player/'+result)
    }).catch(err=>{
        console.log(err)
    })
})

app.get('/search_player_by_click/:name',(req,res)=>{
    let name = req.params.name
    getPlayerId(name).then(result=>{
        res.redirect('/search_player/'+result)
    }).catch(err=>{
        console.log(err)
    })
})



app.get('/search_player/:id',(req,res)=>{
    let id = req.params.id
    if(id=='none'){
        res.redirect('/teams')
    }
    else{
        getPlayerInfo(id).then(result=>{
            res.render("display",{result})
        }).catch(err=>{
            console.log(err)
        })
    }
   
})

app.listen(8080, ()=>{
    console.log("Server Started...");
})




async function getPlayerId(name){
    let id = 0
    const response = await fetch("https://api.cricapi.com/v1/players?apikey="+API_KEY+"&search="+name);
    const json = await response.json();
    try{
        id = json.data[0].id
    }catch(e){
        id = 'none'
    }
    return id
}

async function getPlayerInfo(id){
    let details = 0
    const response = await fetch("https://api.cricapi.com/v1/players_info?apikey="+API_KEY+"&id="+id);
    const json = await response.json();
    try{
        details = json.data
    }catch(e){
        details = 'none'
    }
    return details
}

