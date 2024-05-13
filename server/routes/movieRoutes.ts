import express from 'express';
import { addLikeMovie, removeLikeMovie, getLikeMovie } from '../controller/movieController';

const router = express.Router();

router.post('/add_movie', addLikeMovie);
router.post('/remove_movie', removeLikeMovie);
router.post('/get_like_movie', getLikeMovie);

export { router };