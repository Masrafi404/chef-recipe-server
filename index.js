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
app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id)
    const chefId = chefJsonData.find(n => parseInt(n.id) === id)
    console.log(chefId)
    res.send(chefId)
})

app.listen(port, () => {
    console.log(`assignment: ${port}`)
})