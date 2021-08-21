const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const pinRoute = require('./routes/pins')
const userRoute = require('./routes/users')
const foodsRoute = require('./routes/foods')
const homesRoute = require('./routes/homes')
const hospitalsRoute = require('./routes/hospitals')
const eventRoute = require('./routes/events')

const app = express()

dotenv.config()

app.use(express.json())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('db connected')
}).catch((err) => {
    console.log(err)
})

app.use('/api/pins', pinRoute)
app.use('/api/users', userRoute)
app.use('/api/events', eventRoute)
app.use('/api/foods', foodsRoute)
app.use('/api/homes', homesRoute)
app.use('/api/hospitals', hospitalsRoute)

app.listen(8888, () => {
    console.log('server running')
})