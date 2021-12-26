'use strict'
const express = require('express')
const router = express.Router()
const {sendMail} = require('../nodemiler')

router.get('/', (req, res)=>{
    res.render('contact')
})

router.post('/send', (req, res)=>{
  const user ={
      name: req.body.name,
      company:req.body.company,
      email:req.body.email,
      phone:req.body.phone,
      message:req.body.message
  }
 sendMail(user)
})

module.exports= router