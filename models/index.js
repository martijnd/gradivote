// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Vote, Gradient, User } = initSchema(schema);

export {
  Vote,
  Gradient,
  User
};