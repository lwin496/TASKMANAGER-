let {task} = require('../data')

const readTask = (req, res) =>{ 
      res.join({joined: true})
}

const createTask  = (req, res) =>{
      const {task} = req.body; 
      if(!task){ 
            return res.status(400).json({sucsess:false, msg: 'Providea valid task'})
      }
      res.status(201).send({sucsess:true, task})
}


const deleteTask = (req, res) =>{}


// const createTask = (req, res) =>{
      

}