const http = require('http');
const data = require('./utils/data')
const PORT = 3001

http
.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    console.log(req.url);

    if (req.url.includes('/rickandmorty/character/')) {
        const id = req.url.split('/').at(-1)
        
        const characterFound = data.find((character) => 
          character.id === +id)

        return res
        .writeHead(200, { "Content-type": "application/json"})
        .end(JSON.stringify(characterFound))
    }

})
.listen(PORT)