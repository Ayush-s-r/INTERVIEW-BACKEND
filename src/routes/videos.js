import express from 'express';
import { uploadVideo, getUserVideos, getVideoById } from '../controllers/videoController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/upload', auth, uploadVideo);            
router.get('/my-videos', auth, getUserVideos);       
router.get('/:id', auth, getVideoById);             

export default router;
