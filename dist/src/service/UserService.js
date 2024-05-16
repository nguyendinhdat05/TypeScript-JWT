"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../entity/User");
const data_source_1 = require("../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auths_1 = require("../middleware/auths");
class UserService {
    constructor() {
        this.add = async (data) => {
            let listUsername = await this.userRepository.findOne({ where: { username: data.username } });
            if (listUsername) {
                throw new Error("Username Existed");
            }
            let user = data;
            user.password = await bcrypt_1.default.hash(user.password, 10);
            return await this.userRepository.save(user);
        };
        this.login = async (data) => {
            let user = data;
            let userFind = await this.userRepository.findOne({ where: { username: user.username } });
            if (!userFind) {
                throw new Error("Username Not Exited");
            }
            else {
                let checkPassword = await bcrypt_1.default.compare(user.password, userFind.password);
                if (!checkPassword) {
                    throw new Error("Password isn't correct");
                }
                else {
                    let payload = {
                        idUser: userFind.id,
                        username: userFind.username
                    };
                    let token = await jsonwebtoken_1.default.sign(payload, auths_1.SECRET, {
                        expiresIn: 36000
                    });
                    let datas = {
                        username: userFind.username,
                        token: token
                    };
                    return datas;
                }
            }
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    }
    delete(id) {
    }
    edit(id, data) {
    }
    findAll() {
    }
    findById(id) {
    }
}
exports.default = new UserService();
//# sourceMappingURL=UserService.js.map