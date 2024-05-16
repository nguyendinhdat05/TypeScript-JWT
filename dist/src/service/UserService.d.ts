import { Service } from "./Service";
import { User } from "../entity/User";
declare class UserService implements Service<User> {
    private userRepository;
    constructor();
    add: (data: any) => Promise<any>;
    login: (data: any) => Promise<{
        username: any;
        token: any;
    }>;
    delete(id: any): void;
    edit(id: any, data: any): void;
    findAll(): void;
    findById(id: any): void;
}
declare const _default: UserService;
export default _default;
