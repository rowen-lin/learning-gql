import { UserList } from '../dummyData.js';

export const resolvers = {
  Query: {
    users() {
      return UserList;
    },
  },
};
