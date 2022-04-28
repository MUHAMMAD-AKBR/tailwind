const app = require('express')();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(PORT,() => console.log(`listening on http://localhost:${PORT}`))
