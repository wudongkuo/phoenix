
var _ = require('lodash')
function RouteConfig(prefix){
    this.prefix=prefix||"/"
    this.path=[]
    _.forEach(["get","post","put","delete"],(method,index)=>{
        this[method]=(_path,controller_action)=>{
            let ca=controller_action.split("#")
            this.path.push({
                _path,
                controller:ca[0],
                action:ca[1],
                method
                })
            }
    })
    this.install=(router,controllerMap)=>{
        _.forEach(this.path,(item,index)=>{
                    let {method,_path,controller,action}=item
                    controller_register=controllerMap[controller]
                    if(controller_register){
                       let  controller_action=controller_register[action]
                       if(controller_action){
                        router[method](`${this.prefix}${_path}`,controller_action)
                       }     
                    }
                })
    }
}
module.exports=RouteConfig