const UserModel = require('./user.model');

const getAllUsers = async () => {
  return await UserModel.find();
}

const getUserById = async (id) => {
  const user = await UserModel.findById(id);
  if (!user) {
    return null;
  }
  return user;
}

const createUser = async (user) => {
  return await UserModel.create(user);
}

const deleteUser = async (id) => {
  const user = await UserModel.findById(id);
  if (!user) {
    return null
  }
  return await UserModel.findByIdAndDelete(id);
}

const patchUser = async (id, user) => {
  const userToUpdate = await UserModel.findById(id);
  if (!userToUpdate) {
    return null
  }
  return await UserModel.findByIdAndUpdate(id, user);
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  patchUser
}
