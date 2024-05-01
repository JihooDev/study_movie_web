import { MovieTypes } from "./movie";

export interface TrendingMovieResponse {
    page: number,
    results: MovieTypes[],
    total_pages: number,
    total_results: number
}