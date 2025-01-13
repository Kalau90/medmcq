import { Model } from 'objection';

interface Tag {
  id: number;
  name: string;
  semesterId: number;
  parentId: number;
  isRemoved: number;
}

class Tag extends Model {
  static get tableName() {
    return 'questionTag';
  }
}

export default Tag;
