const User = require('../models/Users');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

// Get All Users
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password').lean();
    if(!users?.length) {
        return res.status(400).json({ message: 'No users found' });
    }
    res.json(users);
});

// Get User ID By Username
const getUserId = asyncHandler(async (req, res) => {
    const { username } = req.body;
    if(!username) {
        return res.status(400).json({ message: 'Username Required' });
    }
    const user = await User.findOne({ username }).select('-password').lean();
    if(!user) {
        return res.status(400).json({ message: 'User not found' });
    }
    res.status(200).json({message: `${user.username} UserID : ${user._id}`});
});


// Create User
const createNewUser = asyncHandler(async (req, res) => {
    const { username, password, roles } = req.body;
    if(!username || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    };

    const duplicate = await User.findOne({ username }).lean().exec();
    if(duplicate) {
        return res.status(409).json({ message: 'Username already exists' });
    };

    const hashedPassword = await bcrypt.hash(password, 10);

    const userObject = { username, "password": hashedPassword, roles };

    const user = await User.create(userObject);

    if(!user) {
        return res.status(400).json({ message: 'Invalid user data received.'});
    }
    res.status(201).json({message: `New user ${username} created.`});
});

// Update User
const updateUser = asyncHandler(async (req, res) => {
    const { _id, username, roles, current_step, password } = req.body;

    const user = await User.findById(_id).exec();

    if(!user){
        return res.status(404).json({ message: 'User not found' });
    }

    if(username)
        user.username = username;
    if(roles)
        user.roles = roles;
    if(current_step)
        user.current_step = current_step;
    if(password)
        user.password = await bcrypt.hash(password, 10);
        
    const updatedUser = await user.save();
    res.json({message: `User ${updatedUser.username} updated.`});
});

// Delete User
const deleteUser = asyncHandler(async (req, res) => {
    const { _id } = req.body;
    if(!_id) {
        return res.status(400).json({ message: 'User ID Required.' });
    }

    const user = await User.findById(_id).exec();

    if(!user){
        return res.status(400).json({ message: 'User not found' });
    }

    const result = await user.deleteOne();
    const reply = `Username ${result.username} with ID ${result._id} deleted.`;
    res.json({message: reply});
});

module.exports = {
    getAllUsers,
    getUserId,
    createNewUser,
    updateUser,
    deleteUser
}