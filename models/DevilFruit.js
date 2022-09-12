const mongoose = require('mongoose')

const fruitSchema = new mongoose.Schema({ 
      Type:{
            type: String, 
            require: [true,'Must Provide a Name'],
            trim: true, 
            maxLength:[20, 'Max character limit has been reached'],

      },
      Power:{ 
            type: String, 
            

      },
      Alive:{ 
            type: Boolean,
      }
})

module.exports = mongoose.model("Fruit", fruitSchema)
// Model.find({completed: true})