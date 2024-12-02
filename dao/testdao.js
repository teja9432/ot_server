const {getDbconn} = require('../common/getConnection.js');

const getQueDao = async () => {
  var db = await getDbconn();
  var collection = db.collection("questions");
  var result = await collection.aggregate([{ $sample: { size: 5 } }]).toArray();
  return result;
};

module.exports = {
  getQueDao,
};
