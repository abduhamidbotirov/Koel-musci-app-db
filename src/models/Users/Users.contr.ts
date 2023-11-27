import User from "./Users.model.js";
import { Request, Response } from 'express';
import handleError from '../../utils/catchError.js';
import { CreateUserRequest, UserCreationAttributes } from './Users.interface'
class UserController {
    public static async createUser(req: Request, res: Response): Promise<void> {
        try {
            const body: CreateUserRequest = req.body;
            const createUser: UserCreationAttributes | any = body;
            const newUser = await User.create(createUser);
            res.status(201).send(newUser);
        } catch (error: any) {
            handleError(res, error);
        }
    }
    public static async getUsers(req: Request, res: Response): Promise<void> {
        try {
            const getUser = await User.findAll()
            res.status(201).send(getUser);
        } catch (error: any) {
            handleError(res, error);
        }
    }
};
export default UserController;