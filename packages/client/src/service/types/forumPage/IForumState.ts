import { IQuestion } from './IQuestion';
export interface IForumState {
  discussionOfGameMoments: IQuestion[] | [];
  technicalIssues: IQuestion[] | [];
  errorQuestions: IQuestion[] | [];
}
