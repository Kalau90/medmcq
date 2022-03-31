import { Model } from 'objection';

interface Question {
  id: number;
  oldId: string;
  text: string;
  image: string;
  examSetQno: number;
  examSetId: number;
  examSetInfo: any;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

class Question extends Model {
  static tableName = 'question';
}

export default Question;
