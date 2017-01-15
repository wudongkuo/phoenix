var requireDir=require('require-dir')
var express=require('express')
var route=require('./route')

var controllerMap=requireDir('./controller',{recurse:true})
var router=express.Router()

route.install(router,controllerMap)

module.exports=router