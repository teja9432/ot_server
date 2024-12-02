var express=require('express');
var router=express.Router();
const {getQueService}=require('../services/testService.js');
router.get('/get-que',async(req,res)=>{
    const result=await getQueService();
    res.send(result);
})
module.exports=router;