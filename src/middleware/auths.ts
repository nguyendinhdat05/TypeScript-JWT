import jwt from 'jsonwebtoken';
export const SECRET = "chuoi bi mat";
export const auths = (req, res, next) => {
    let authorization = req.headers.authorization;
    if (!authorization) {
            res.status(401).json({
                message: "you are anonymyos"
            })
    } else {
        let accessToken = authorization.split(' ')[1];
        if(!accessToken){
            res.status(401).json({
                message: "you are anonymyos"
            })
        } else {
            jwt.verify(accessToken, SECRET ,  (err , data)=>{
                if (err) {
                    res.status(401).json({
                        message: "you are anonymyos"
                    })
                } else {
                    req.decode = data;
                    next()
                }
            })
        }
    }
}