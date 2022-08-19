const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World! CI/CD deployed, run but cancel previous build')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}. now github runner work`)
})