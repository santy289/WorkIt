const { 
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  patchUser
} = require("./user.service");

const handlerAllUsers = async (req, res) => {
  const users = await getAllUsers();
  if (!users) {
    res.status(404).json({message: "Users not found"});
  } else {
    res.json(users)
  }
}

const handlerUserById = async (req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);
  if (!user) {
    res.status(404).json({message: `User not found`});
  } else {
    res.json(user)
  }
}

const handlerCreateUser = async (req, res) => {
  const { body } = req;
  const user = await createUser(body);
  res.status(201).json(user);
}

const handlerDeleteUser = async (req,res) => {
  const { id } = req.params;
  const user = await deleteUser(id);
  if (!user) {
    res.status(404).json({message: "User not found"})
  } else {
    res.json({message: `User deleted`});
  }
}

const handlerUpdateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const user = await patchUser(id, body);
  if (!user) {
    res.status(404).json({message: "User not found" })
  } else {
    res.json({message: `User updated`});
  }
}


module.exports = {
  handlerAllUsers,
  handlerUserById,
  handlerCreateUser,
  handlerDeleteUser,
  handlerUpdateUser
}
