export interface IRegister {
    id: string;
    password: string;
    nickname: string;
}

export interface SignInBody {
    id: string;
    password: string;
}