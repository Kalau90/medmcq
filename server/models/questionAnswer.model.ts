import { Model } from 'objection';

interface QuestionAnswer {
  id: number;
  text: string;
  index: number;
  isCorrect: 1 | 0;
  questionId: number;
  explanation: string;
  percentage: number;
}

class QuestionAnswer extends Model {
  static tableName = 'questionAnswers';
}

export default QuestionAnswer;
