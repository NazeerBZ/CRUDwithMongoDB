
function studentMiddleware(err, req, res, next){
    res.send({error: err._message});
} 

module.exports = studentMiddleware;