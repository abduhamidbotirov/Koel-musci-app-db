import express from "express";
import userRoutes from './Users/Users.routes.js';
// import postRoutes from './Posts/Posts.routes.js';
// import commentRoutes from './Comments/Comments.routes.js';
const router = express.Router();
router.use('/test', () => { });
router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);
export default router