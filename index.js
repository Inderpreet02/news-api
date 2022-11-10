const express = require('express')
const PORT = 5000;
const app = express();
const cors = require('cors')
const NDTVRouter = require('./router/NDTV.router')
const IndiaTodayRouter = require('./router/IndiaToday.router')
require('dotenv').config()

app.use(express.json());
app.use(cors())

app.use('/api/NDTV', NDTVRouter)
app.use('/api/IndiaToday', IndiaTodayRouter)

app.get('/', (req, res) => {  
    res.sendFile('index.html', {root: __dirname })
})

app.post('/data', (req, res) => {
    res.status(200).send(req.body)
})

app.listen(PORT, () => {
    console.log(`Server is up at http://localhost:${PORT}`);
})