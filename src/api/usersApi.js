import { users } from '../data/users';

export const getUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users.map(({ password, ...rest }) => rest));
    }, 800);
  });
};
