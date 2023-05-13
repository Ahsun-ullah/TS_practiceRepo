import { IUser } from "./user.interface";
import User from "./user.model";

// database query functions

// get api data
export const getUsersToDB = async (): Promise<IUser[]> => {
  const users = await User.find({});
  return users;
};

// post api data --> create user data
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  // export normal bcz may have so many query example: get, delete, update
  // user instance
  const user = await new User(payload); // User = class --> User always in the model
  await user.save(); // save is the built in class instance method

  /* custom instance method:
   * it is only work in the create or post api
   */
  user.fullName();
  return user;
};

// get one user from get api data
export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne(
    //User is the class and user is the instance of the class
    { id: payload },
    { name: { firstName: 1 }, email: 1 }
  );
  return user;
};

//get admin user from get api data
export const getAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};
