const express = require('express')
const app = express()
const parser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 8080

const router = express.Router()
const snacks = require('./snacks_routes')
const reviews = require('./reviews_routes')
const users = require('./users_routes')

app.use(parser.json())
app.use(cors())

app.use('/snacks', snacks)

app.use('/reviews', reviews)

app.use('/users', users)

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err })
})

app.listen(port, () => {
    console.log(`Mmmmmmm, I'm hungry. Let's see what's for snacktime over on port:${port}!!!!!!`)
})