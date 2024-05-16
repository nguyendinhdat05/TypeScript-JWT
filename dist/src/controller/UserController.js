"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../service/UserService"));
class UserController {
    constructor() {
        this.register = async (req, res) => {
            try {
                let user = await this.userService.add(req.body);
                res.status(201).json(user);
            }
            catch (error) {
                res.status(400).json(error.message);
            }
        };
        this.login = async (req, res) => {
            try {
                let user = await this.userService.login(req.body);
                res.status(200).json(user);
            }
            catch (error) {
                res.status(400).json(error.message);
            }
        };
        this.userService = UserService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map