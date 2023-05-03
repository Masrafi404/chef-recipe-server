const express = require('express');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
const chefJsonData = require('./data/chef.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('coming')
})
app.get('/chef', (req, res) => {
    res.send(chefJsonData)
})

app.listen(port, () => {
    console.log(`assignment: ${port}`)
})