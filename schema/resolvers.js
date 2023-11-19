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
    updateUser: (parent, args) => {
      const { id, name, username, age, nationality } = args.input;
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          name ? (user.name = name) : user.name;
          username ? (user.username = username) : user.username;
          age ? (user.age = age) : user.age;
          nationality ? (user.nationality = nationality) : user.nationality;
          userUpdated = user;
        }
      });
      return userUpdated;
    },
    deleteUser: (parent, args) => {
      const id = args.id;
      _.remove(UserList, (user) => user.id === Number(id));
      return null;
    },
  },
};
