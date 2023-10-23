import { UserList } from '../dummyData.js';
import _ from 'lodash';

export const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      user.id = UserList[UserList.length - 1].id + 1;
      UserList.push(user);
      return user;
    },
  },
};
