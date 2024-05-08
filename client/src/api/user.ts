import { IRegister, SignInBody } from "@/types/userTypes";
import axios from "axios";

const userInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL
})

export const postRegister = async (body: IRegister) => {
    const { data } = await userInstance.post(`/user/register`, body);

    return data;
}

export const postLogin = async (body: SignInBody) => {
    const { data } = await userInstance.post(`/user/login`, body);

    return data;
}