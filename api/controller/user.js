
module.exports=user={
    read:(req,res,next)=>{
        let {id}=req.get()
        res.json({user:{name:"wdk",age:"27",sex:"man",id}})
    },
    name:(req,res,next)=>{
        res.json({name:"wdk"})
    }
}