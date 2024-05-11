import { NextFunction, Request, Response } from "express";
import { Movie as IMovie } from "../@types/SchemaTypes";
import { Movie } from "../model/movieModel";

export const addLikeMovie = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { movie_id, title, user_id } = req.body;

        const list = await Movie.findOne({ user_id });

        list?.movie_list.push({
            movie_id,
            title
        })

        await list?.save();

        return res.status(200).json({
            message: 'Movie added successfully',
            status: 200,
        })
    } catch (error) {
        next(error);
    } finally {
        console.log('영화 좋아요 추가 완료');
    }
}

export const removeLikeMovie = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { movie_id, user_id } = req.body;

        const list = await Movie.findOne({ user_id });

        if (list) {
            list.movie_list = list?.movie_list.filter((movie: IMovie['movie_list'][0]) => movie.movie_id !== movie_id);

            await list.save();

            return res.status(200).json({
                message: 'Movie removed successfully',
                status: 200,
            })
        } else {
            return res.status(400).json({
                message: 'Movie not found',
                status: 400,
            })
        }
    } catch (error) {
        next(error);
    } finally {
        console.log('영화 좋아요 삭제 완료');
    }
}

export const getLikeMovie = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user_id } = req.body;

        const list = await Movie.findOne({ user_id });

        return res.status(200).json({
            data: list?.movie_list,
            status: 200,
        })
    } catch (error) {
        next(error);
    } finally {
        console.log('영화 좋아요 목록 조회 완료');
    }
}