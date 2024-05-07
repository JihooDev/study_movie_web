import { IRegister } from "@/types/userTypes";
import axios from "axios";

const userInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL
})

export const postRegister = async (body: IRegister) => {
    const { data } = await userInstance.post(`/user/register`, body);

    return data;
}