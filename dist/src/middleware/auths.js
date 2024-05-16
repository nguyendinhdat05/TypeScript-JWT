"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auths = exports.SECRET = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.SECRET = "chuoi bi mat";
const auths = (req, res, next) => {
    let authorization = req.headers.authorization;
    if (!authorization) {
        res.status(401).json({
            message: "you are anonymyos"
        });
    }
    else {
        let accessToken = authorization.split(' ')[1];
        if (!accessToken) {
            res.status(401).json({
                message: "you are anonymyos"
            });
        }
        else {
            jsonwebtoken_1.default.verify(accessToken, exports.SECRET, (err, data) => {
                if (err) {
                    res.status(401).json({
                        message: "you are anonymyos"
                    });
                }
                else {
                    req.decode = data;
                    next();
                }
            });
        }
    }
};
exports.auths = auths;
//# sourceMappingURL=auths.js.map