var express=require('express');
var router=express.Router();
var jwt=require('jsonwebtoken');
router.post('/login',(req,res)=>{
const {uid,pwd}=req.body;
console.log('req.body:', req.body);
console.log('req.query:', req.query);
if(uid==='nit'&& pwd==='nit'){
    var token=jwt.sign(req.body,'my-token');
    res.status(200).send({token});
}
else{
    res.status(200).send({message:"please check entered uid and password"});
}
})
module.exports=router;