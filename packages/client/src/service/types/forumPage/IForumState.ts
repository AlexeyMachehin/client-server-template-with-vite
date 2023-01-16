import { IQuestion } from './IQuestion';
export interface IForumState {
  forumState: {
    discussionOfGameMoments: IQuestion[] | [];
    technicalIssues: IQuestion[] | [];
    errorQuestions: IQuestion[] | [];
  };
}
