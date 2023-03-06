import forumController from '../controllers/ForumController';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Router = require('express').Router;

export const router = new Router();

router.get('/sections', forumController.getSections);
router.get('/allstate', forumController.getAllState);
router.post('/findquestions', forumController.findQuestionsByTitle);
router.post('/questions', forumController.addQuestion);
router.post('/messages', forumController.addMessage);
