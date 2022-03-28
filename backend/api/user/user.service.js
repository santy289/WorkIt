const UserModel = require('./user.model');

const getAllUsers = async () => {
    return await UserModel.find();
}
const getUserById = async (id) => {
    const user = await UserModel.findById(id);
    if (!user) {
        throw new Error(`User with id ${id} not found`);
    }
    return user;
}
const createUser = async (user) => {
    return await UserModel.create(user);
}
const deleteUser = async (id) => {
    const user = await UserModel.findById(id);
    if (!user) {
        return (404).json({
            message: `User with id ${id} not found`})
        }
    await UserModel.findByIdAndDelete(id);
}
const patchUser = async (id, user) => {
    const userToUpdate = await UserModel.findById(id);
    if (!userToUpdate) {
        throw new Error(`User with id ${id} not found`);
    }
    await UserModel.findByIdAndUpdate(id, user);
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    patchUser
}
