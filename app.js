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
        titolo: "Benvenuto nel mio blog",
        contenuto: "Questo è il primo post del mio blog personale, dove condividerò il mio percorso da sviluppatore.",
        immagine: "/images/benvenuto.jpg",
        tags: ["introduzione", "personale", "blog"]
    },
    {
        titolo: "Iniziare con Node.js",
        contenuto: "Node.js è un ambiente di runtime per JavaScript. Scopriamo insieme come iniziare.",
        immagine: "/images/nodejs.jpg",
        tags: ["nodejs", "javascript", "backend"]
    },
    {
        titolo: "Cos'è Express e perché usarlo",
        contenuto: "Express è un framework minimalista per creare server in Node.js. Vediamo i vantaggi.",
        immagine: "/images/express.jpg",
        tags: ["express", "nodejs", "server"]
    },
    {
        titolo: "Gestione delle rotte in Express",
        contenuto: "Approfondiamo come creare e gestire le rotte in una web app usando Express.",
        immagine: "/images/rotte.jpg",
        tags: ["routing", "express", "web"]
    },
    {
        titolo: "Serve un database?",
        contenuto: "Analizziamo quando è il momento giusto per integrare un database in un progetto Express.",
        immagine: "/images/database.jpg",
        tags: ["database", "backend", "mongoDB"]
    }
];

    res.json(posts)
})


//Listening message
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})