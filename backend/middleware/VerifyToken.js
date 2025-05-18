import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next)=>{
    const authHeader = req.headers['authorization'];
    console.log("Authorization Header:", req.headers['authorization']);
    const token = authHeader && authHeader.split(' ')[1];
    console.log("masuk verify token: ", {token});
    if(token == null) return res.sendStatus(401);
    console.log("sudah lewat 401 di verify")
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, decoded)=>{
        if(err) return res.sendStatus(403);
        console.log("sudah lewat 403 di verify")
        req.email = decoded.email;
        next();
    })
}