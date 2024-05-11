export interface User {
    _id?: string;
    nickname: string;
    id: string;
    password?: string;
}

export interface Movie {
    _id?: string;
    user_id: string;
    movie_list: {
        movie_id: string;
        title: string;
        date_created?: Date;
    }[]
}