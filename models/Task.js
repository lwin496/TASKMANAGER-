const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({ 
      name:{
            type: 'string', 
            required: [true,'Must Provide a Name'],
            trim: true, 
            maxLength:[20, 'Max character limit has been reached'],

      },
      completed{ 
            type: Boolean,
            default: false,

      }
})

module.exports = mongoose.model("Task", TaskSchema)
Model.find({completed: true})