import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import { UserCollection } from '../db/models/user.js';

export const registerUser = async (payload) => {
  const user = await UserCollection.findOne({ email: payload.email });

  if (user) throw createHttpError(409, 'Email in use');

  const encriptedPassword = await bcrypt.hash(payload.password, 9);

  return await UserCollection.create({
    ...payload,
    password: encriptedPassword,
  });
};
