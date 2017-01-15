var requireDir=require('require-dir')
var express=require('express')
var route=require('./route')
console.log(route)
var controllerMap=requireDir('./controller',{recurse:true})
var router=express.Router()

console.log("controllerMap",controllerMap)
route.install(router,controllerMap)

module.exports=router