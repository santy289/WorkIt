const { 
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    patchUser
} = require("./user.service");

const handlerAllUsers = async (req, res) => {
    const users = await getAllUsers();
    res.json(users);
    if (!users) {
        res.status(404).json({
            message: "No users found"
        });
    }
}

const handlerUserById = async (req, res) => {
    const { id } = req.params;
    const user = await getUserById(id);
    if (!user) {
        res.status(404).json({message: `User not found`});
    }

    res.json(user);
}

const handlerCreateUser = async (req, res) => {
    const { body } = req;
    const user = await createUser(body);
    res.json(user);
}

const handlerDeleteUser = async (req,res) => {
    const { id } = req.params;
    const user = deleteUser(id);
    if (!user) {
        return null;
    } else {
        res.json({message: `user deleted`});
    }
}

const handlerUpdateUser = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const user = patchUser(id, body);
    if (!user) {
        return null;
    } else {
        res.json({message: `user updated`});
    }
}


module.exports = {
    handlerAllUsers,
    handlerUserById,
    handlerCreateUser,
    handlerDeleteUser,
    handlerUpdateUser
}