const express = require('express')
const path = require('path')
const createError = require('http-errors')
const app = express()
require('dotenv').config()
const morgan = require('morgan')

app.set('view engine','ejs')
app.use(express.static('public'))


app.get('/',async(req,res,next)=>{
    res.render('index')
    // next(createError.Notfound())
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server's running on port ${PORT}`)
})