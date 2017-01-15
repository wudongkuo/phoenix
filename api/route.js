var RouteConfig=require('../constructor/route_config')

route=new RouteConfig()

route.get("user/","user#read")
route.get("user/name","user#name")
route.get("user/sex","user#sex")
route.get("user/age","user#age")

module.exports=route