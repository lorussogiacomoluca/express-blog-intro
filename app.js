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

//Listening message
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})