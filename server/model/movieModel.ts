import { Schema, model } from "mongoose";
import { Movie as IMovie } from "../@types/SchemaTypes";

const movieSchema = new Schema<IMovie>({
    user_id: { type: String, required: true },
    movie_list: [
        {
            movie_id: { type: String, required: true },
            title: { type: String, required: true },
            date_created: { type: Date, default: Date.now },
        }
    ]
})

const Movie = model<IMovie>('Liked_Movie', movieSchema);

export { Movie };