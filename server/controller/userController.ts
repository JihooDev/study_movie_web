import { User as IUser } from "../@types/SchemaTypes"
import { Request, Response } from "express";
import { User } from "../model/userModel";
import { IResponse } from "../@types/ResponseTypes";

const register = async (req: Request, res: Response) => {
    try {
        const { id, nickname, password }: IUser = req.body;

        const userCheck = await User.findOne({ $or: [{ id }, { nickname }] });

        if (userCheck) {
            return res.status(400).json({
                message: 'User already exists',
                status: 400,
            })
        }

        const user = await User.create({
            id,
            nickname,
            password,
        });

        return res.status(200).json({
            data: user,
            message: 'User created successfully',
            status: 200,
        });
    } catch (error) {
        res.status(200).json({
            message: 'User already exists',
            status: 400,
        })
    }
}

const login = async (req: Request, res: Response) => {
    try {
        const { id, password }: IUser = req.body;

        const user = await User.findOne({ id, password });

        if (!user) {
            return res.status(400).json({
                message: 'User not found',
                status: 400,
            })
        }

        return res.status(200).json({
            data: user,
            status: 200,
        });
    } catch (error) {
        res.status(400).json({
            message: 'User not found',
            status: 400,
        })
    }
}

export { register };