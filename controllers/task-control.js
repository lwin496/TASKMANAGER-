const {data} = require('../data.json')

const readTask = (req, res) =>{ 
    
}

const createTask  = (req, res) =>{
      const {task} = req.body; 
      if(!task){ 
            return res.status(400).json({sucsess:false, msg: 'Providea valid task'})
      }
      res.status(201).send({sucsess:true, task})
}


const deleteTask = (req, res) =>{
      
}



module.exports = {readTask, createTask, deleteTask}