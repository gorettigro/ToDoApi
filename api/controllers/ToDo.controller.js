//Model
const {todo} = require('../models/Todo.model');
const {user} = require('../models/Todo.model');

//Get fetch all ToDos
exports.getAllTodo = catchAsync(async (req, res, next) => {
	const todos = await todo.findAll({
		where: { status: 'pending' },
		include: [
			{
				model: user,
				attributes: { exclude: ['password'] },
			},
		],
	});

	res.status(200).json({
		status: 'success',
		data: { todos },
	});
});

//Create new ToDo
exports.createTodo = catchAsync(async (req, res, next) => {
	const { content, userId } = req.body;

	const newTodo = await todo.create({ content, userId });

	res.status(201).json({
		status: 'success',
		data: { newTodo },
	});
});

//Update ToDo given an ID
exports.updateTodo = catchAsync(async (req, res, next) => {
	const { id } = req.params;
	const { content } = req.body;

	const todoExist = await todo.findOne({ where: { id } });

	await todoExists.update({ content });

	res.status(204).json({
		status: 'success',
	});
});

//Delete ToDo given an ID
exports.deleteTodo = catchAsync(async (req, res) => {
	const { id } = req.params;
    const { content } = req.body;

	const todoExist = await todo.findOne({ where: { id } });

	if (!todoExist) {
		res.status(404).json({
            status: 'error',
            message: 'Cant delete ToDo, invalid ID'
        });
        return;
	}

	await todoExist.destroy();
	
	res.status(204).json({
		status: 'success',
	});
});