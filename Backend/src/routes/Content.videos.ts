// routes/videos.ts
import { Request, Response, Router } from "express";
import { videoService } from "../services/Content.videos";
import { MulterRequest, upload } from "../utils/config/multer";
import { authMiddleware } from "../middleware/authMiddleware";

export const VideoRoute = Router();

// Get all videos
VideoRoute.get('/all', (req: Request, res: Response) => {
  return videoService.getAllVideos(req, res);
});

// Get video by id
VideoRoute.get('/:videoId', (req: Request, res: Response) => {
  return videoService.getVideo(req, res);
});

/*
// Get videos by category
VideoRoute.get('/category/:category', (req: Request, res: Response) => {
  return videoService.getVideosByCategory(req, res);
});

*/
// Upload new video
VideoRoute.post('/upload/:hotelId',
  upload.fields([
    { name: 'video', maxCount: 1 },
    { name: 'thumbnail', maxCount: 1 }
  ]),
  authMiddleware,
  (req: Request, res: Response) => {
    return videoService.uploadVideo(req as MulterRequest, res);
  }
);

// Update video details
VideoRoute.patch('/update/:videoId', authMiddleware, (req: Request, res: Response) => {
  return videoService.updateVideo(req, res);
});

// Delete video
VideoRoute.delete('/delete/:videoId', authMiddleware, (req: Request, res: Response) => {
  return videoService.deleteVideo(req, res);
});

// Increment view count
VideoRoute.patch('/:videoId/views', authMiddleware, (req: Request, res: Response) => {
  return videoService.incrementViewCount(req, res);
});
