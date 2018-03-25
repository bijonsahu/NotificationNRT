var index = function(req, res){
  res.send('haha finally working'+ req.requestTime);
};

module.exports = {index : index}