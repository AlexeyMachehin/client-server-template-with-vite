import forumController from '../controllers/ForumController';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Router = require('express').Router;

export const router = new Router();

router.get('/sections', forumController.getSections);
router.get('/allstate', forumController.getAllState);
