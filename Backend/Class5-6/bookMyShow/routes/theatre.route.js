import express from 'express';
import { addTheatre, deleteTheatre, getAllTheatre, getTheatreById, updateTheatre } from '../controllers/theatre.controller.js';
import AuthMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

// add theatre
router.post('/', AuthMiddleware, addTheatre);

// get theatre by Id
router.get('/:theatreId', getTheatreById);


// get all theatres 
// get theatres by owners
router.get('/', getAllTheatre);


// update theatre
router.put('/:theatreId', updateTheatre);


// delete theatre

router.delete('/:theatreId', deleteTheatre);



export default router;