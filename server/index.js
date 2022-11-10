const {graphqlHTTP} = require('express-graphql')
const express = require('express')
const schema = require('./schema')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, () => {
        console.log('Sucessfully Connected to database')
    })
app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))
app.listen(process.env.PORT, () => console.log(`API running at localhost:${process.env.PORT}`))