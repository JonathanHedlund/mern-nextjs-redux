const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a title to your goal']
        },
 
        amount: {
            type: Number,
            required: [true, 'Please add an amount to your goal']
        },
 
        goalType: {
            type: String,
        },

        dueDate: {
            type: Date
        },
 
        timeLimit: Number,
 
        difficulty: String,

        creator: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
  
        group: {
            groupId: mongoose.Schema.Types.ObjectId,
            status: String
        },
 
        users: [{
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            status: String,
        }],
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Goal', goalSchema)