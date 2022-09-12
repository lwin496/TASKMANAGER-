const express = require('expresss'); 
const router = express.router(); 

const {myData} = require('../myData')

const {readTask, createTask, deleteTask, updateTask} = require('../controllers/task-control');

router.route('/').get(readTask).post(createTask); 

