var mongodb=require("mongodb")
const getDbconn=async()=>{
    try{
var mongoClient=mongodb.MongoClient;
var  server=await mongoClient.connect(process.env.DB_URL)
var db=server.db("onlinetest");
return db;
    }
    catch(e){
     console.log(e);
     return null;
    }
};
module.exports={
    getDbconn,
}