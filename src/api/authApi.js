import { users } from '../data/users';

export const loginRequest = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (!user) {
        return reject('Invalid credentials');
      }

      const { password: _, ...safeUser } = user;
      resolve(safeUser);
    }, 800);
  });
};
