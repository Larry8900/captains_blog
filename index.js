import express from 'express'
import ejs from 'ejs'

const port = 4000

const app = express()

app.get('/', (req,res)=>{
    res.render("index.ejs")
})




app.listen(port, (req,res)=>{
    console.log(`server is running on port ${port}`)
})