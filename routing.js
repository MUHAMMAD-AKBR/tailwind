const app = require('express')();
const PORT = 3000;

app.get('/', (req, res) => {
    res.header(200)
    res.sendFile("index.html", {root: "./src/"})
})

app.listen(PORT,() => console.log(`listening on http://localhost:${PORT}`))
