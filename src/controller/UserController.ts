import UserService from "../service/UserService";
import {Request, Response} from "express";

class UserController {
    private userService;
    constructor() {
        this.userService = UserService;
    }

    register = async (req : Request , res : Response)=>{
        try {
            let user = await this.userService.add(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
    login = async (req : Request , res : Response)=>{
        try {
            let user = await this.userService.login(req.body);
            res.status(200).json(user)
        } catch (error) {
          res.status(400).json(error.message)
        }
    }

}
export default new UserController();