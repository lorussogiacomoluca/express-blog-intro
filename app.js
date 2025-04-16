//Import express
const express = require('express')
//define express onject
const app = express()
//set port
const port = 3000

//Public folder for static asset
app.use(express.static('public'))

//Response for / route
app.get('/', (req, res) =>{
    res.send('Server del mio blog!')
})

//Bacheca route
app.get('/bacheca', (req, res) =>{
        //ARRAY
const posts = [
    {
        id: 0,
        titolo: "Benvenuto nel mio blog",
        contenuto: "Questo è il primo post del mio blog personale, dove condividerò il mio percorso da sviluppatore.",
        immagine: "/imgs/ciambellone.jpeg",
        tags: ["introduzione", "personale", "blog"]
    },
    {
        id: 1,
        titolo: "Iniziare con Node.js",
        contenuto: "Node.js è un ambiente di runtime per JavaScript. Scopriamo insieme come iniziare.",
        immagine: "/imgs/cracker_barbabietola.jpeg",
        tags: ["nodejs", "javascript", "backend"]
    },
    {
        id: 2,
        titolo: "Cos'è Express e perché usarlo",
        contenuto: "Express è un framework minimalista per creare server in Node.js. Vediamo i vantaggi.",
        immagine: "/imgs/pane_fritto_dolce.jpeg",
        tags: ["express", "nodejs", "server"]
    },
    {
        id: 3,
        titolo: "Gestione delle rotte in Express",
        contenuto: "Approfondiamo come creare e gestire le rotte in una web app usando Express.",
        immagine: "/imgs/pasta_barbabietola.jpeg",
        tags: ["routing", "express", "web"]
    },
    {
        id: 4,
        titolo: "Serve un database?",
        contenuto: "Analizziamo quando è il momento giusto per integrare un database in un progetto Express.",
        immagine: "/imgs/torta_paesana",
        tags: ["database", "backend", "mongoDB"]
    }
];
    const tags = req.query.tags
    console.log(tags)
    let filtredPost = posts
    if(tags){
        filtredPost = posts.filter((post) => post.tags.includes(tags)
        )
    }
    res.json(filtredPost)
})


//Listening message
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})