const express = require('express')
const taskroute = require('./route/taskroute')

const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.status(200).json({
        message: "Welcome..."
    })
})

app.use('/tasks', taskroute)

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
