import { Message } from '../models/Message';
import { Question } from '../models/Question';
import { Section } from '../models/Section';

class ForumService {
  async getSections() {
    const sections = await Section.findAll();
    return sections;
  }

  async getAllState() {
    const sections = await Section.findAll({
      include: { all: true, nested: true },
    });
    return sections;
  }

  async addQuestion(props: any) {
    const newQuestion = await Question.create({
      title: props.title,
      time: props.time,
      userId: props.userId,
      content: props.content,
      sectionId: props.sectionId,
    });
    return newQuestion;
  }

  async addMessage(props: any) {
    const newMessage = await Message.create({
      userId: props.userId,
      message: props.message,
      time: props.time,
      questionId: props.questionId,
    });
    return newMessage;
  }

  async findQuestionsByTitle(text: string) {
    const result = Question.findAll({
      where: {
        title: `%${text}%`,
      },
    });
    return result;
  }
}

export default new ForumService();
