const express = require('express')
const router = express.Router()
const { registerUser, getMyUser, loginUser } = require('../controllers/userController.js')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMyUser)

module.exports = router