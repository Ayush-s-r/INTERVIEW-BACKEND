import Interview from '../models/Interview.js';

// Upload video
exports.uploadVideo = async (req, res) => {
    try {
        const newVideo = await Interview.create({
            user_id: req.user._id,
            video_url: req.body.video_url,
            status: 'recorded'
        });
        res.status(201).json(newVideo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all videos for a user
exports.getUserVideos = async (req, res) => {
    try {
        const videos = await Interview.find({ user_id: req.user._id });
        res.status(200).json(videos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Get a single video by ID
export const getVideoById = async (req, res) => {
    try {
        const video = await Interview.findById(req.params.id);
        if (!video) return res.status(404).json({ message: 'Video not found' });
        res.status(200).json(video);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
