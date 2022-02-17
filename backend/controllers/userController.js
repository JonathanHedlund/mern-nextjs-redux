const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add fields')
    }

    // Check if user exists
    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    // Check for users email
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// @desc Get my user data
// @route GET /api/users/me
// @access Private
const getMyUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})

// @desc Change user password
// @route PUT /api/users/change-password
// @access Private
const changePassword = asyncHandler(async (req, res) => {
    const { password } = req.body

    if (!password) {
        res.status(400)
        throw new Error('No password')
    }

    // Check if user exists
    const userExists = await User.findOne(req.user.email)

    if (!userExists) {
        res.status(400)
        throw new Error('User does not exist')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create password
    const passwordUpdated = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true,})


    res.status(200).json(passwordUpdated)
})


// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    } )
}

module.exports = {
    registerUser,
    loginUser,
    getMyUser,
    changePassword,
}