import {Service} from "./Service";
import {User} from "../entity/User";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {SECRET} from "../middleware/auths";
class UserService implements Service<User>{
    private userRepository ;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }
    add = async (data) => {
        let listUsername =  await this.userRepository.findOne({where:{ username : data.username}});
        if (listUsername){
            throw new Error("Username Existed")
        }
        let user = data;
        user.password = await bcrypt.hash(user.password , 10)
        return await this.userRepository.save(user)
    }
    login = async (data) =>{
        let user = data;
        let userFind = await this.userRepository.findOne({where:{ username : user.username}});
        if (!userFind){
            throw new Error("Username Not Exited")
         } else {
            let checkPassword = await bcrypt.compare(user.password, userFind.password);
            if (!checkPassword) {
                throw new Error("Password isn't correct")
            } else {
                let payload = {
                    idUser: userFind.id,
                    username: userFind.username
                }
                let token = await jwt.sign(payload,SECRET,{
                    expiresIn : 36000
                });
                let datas = {
                    username: userFind.username,
                    token:token
                }
                return datas
            }
        }
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
export default new UserService();