
var express=require('express')
var app=express()


app.use('/',express.static(`${__dirname}/web/build`))

app.listen(3000,(request,response)=>{
    console.log("server-start")
})
