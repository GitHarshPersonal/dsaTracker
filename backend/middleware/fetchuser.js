const jwt = require('jsonwebtoken');
const JWT_SECRET = "this@is@mysecret";

const fetchuser = (req,res,next)=>{
    const token = req.header('auth-token');

    if(!token)
    {
        success = false;
        res.status(401).send({success, "error": "You need a token to perform this action"});
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        success = false;
        res.status(401).send({success, "error": "Invalid Token!"});
    }
}

module.exports = fetchuser;