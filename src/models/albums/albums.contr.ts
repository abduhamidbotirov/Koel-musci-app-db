import { User } from "./albums.model.js";
import { Request, Response } from 'express';
import handleError from '../../utils/catchError.js';
class UserController {
    public static async createUser(req: Request, res: Response): Promise<void> {
        try {
            const {
                username,
                password
            } = req.body;
            const createUser = await User.create({
                username,
                password
            });
            res.status(201).send(createUser);
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