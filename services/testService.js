const {getQueDao}=require("../dao/testdao.js")
const getQueService=async()=>{
const  result=await getQueDao();
return result;
}
module.exports={
    getQueService,
};