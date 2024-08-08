import express from 'express';
import { createUser, deleteUser, getUserDetail, login, updateUser } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/login', login);

router.get('/', getUserDetail);

router.post('/', createUser);

router.put('/:userId', updateUser);

router.delete('/:userId', deleteUser);

export default router;