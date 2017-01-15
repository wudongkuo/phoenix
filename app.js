
var express=require('express')
var api=require('./api')

var app=express()
app.use('/',express.static(`${__dirname}/web/build`))
app.use('/api',api)

app.listen(3000,(request,response)=>{
    console.log("server-start")
})

