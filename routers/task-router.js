const express = require('express'); 
const router = express.Router(); 

const {myData} = require('../data')

const {readTask, createTask, deleteTask} = require('../controllers/task-control');

router.route('/').get(readTask).post(createTask); 

