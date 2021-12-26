const express = require('express')
const bodyParse = require('body-parser')
const {create}  = require( 'express-handlebars')
const path = require('path')
const nodemailer = require('nodemailer')
const routes = require('./componets/network')
const {config} = require('./config')
const {sendMail} = require('./componets/nodemiler')

const app = express()
//routes(app)


//view enging setup
const hbs = create({
    layoutsDir: __dirname + '/views',
    defaultLayout: 'contact',
    extname: '.hbs'
  })
app.engine('hbs', hbs.engine)
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname,'views'))

// Public folder
app.use('/public', express.static(path.join(__dirname,'public')))

// body Parse Middleware
app.use(bodyParse.urlencoded({extended:false}))
app.use(bodyParse.json())

routes(app)

app.listen(config.port, config.host,()=>{
console.log("app is running")
})