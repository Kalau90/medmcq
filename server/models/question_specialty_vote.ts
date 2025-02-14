import { Model } from 'objection';

interface QuestionSpecialtyVote {
  id: number;
  userId: number;
  questionId: number;
  specialtyId: number;
  specialtyName: string;
  value: number;
}

class QuestionSpecialtyVote extends Model {
  static get tableName() {
    return 'questionSpecialtyVote';
  }
}

export default QuestionSpecialtyVote;
