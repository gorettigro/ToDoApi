const express = require('express');

//Controllers
const { 
        getAllTodo,  
        updateTodo, 
        deleteTodo, 
        getTodoById,
     } = require('../controllers/Todo.controller')

const router = express.Router();

router.route('/')
    .get(getAllTodo)
    .post(createTodo)

router.route('/:id')
    .get(getTodoById)
    .patch(updateTodo)
    .delete(deleteTodo)

module.exports = {todoRouter: router}