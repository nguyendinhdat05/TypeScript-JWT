"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controller/UserController"));
const userRouter = (0, express_1.Router)();
userRouter.post('/register', UserController_1.default.register);
userRouter.post('/login', UserController_1.default.login);
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map