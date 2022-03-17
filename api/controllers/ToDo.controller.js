//Model
const {todo}=require('../models/Todo.model');

//Get fetch all ToDos
exports.getAllTodo = (req, res) => {

    res.status(200).json({
        status: 'succes', 
        data: {todo},
    });
};

//Create new ToDo
exports.createTodo = (req, res) => {
    
    const  {content} = req.body

    const lastestId = todo[todo.length - 1 ].id

    const newTodo = {
        id: lastestId + 1,
        content
    }

    todo.push(newTodo)

    res.status(201).json( { status: 'succes', data: {newTodo} } )     //el 201 dice: tu ruta a sido creada con exito pero se ha creado un recurso
}

//Update ToDo given an ID
exports.updateTodo = (req, res) => {
    const {id} = req.params
    const {content} = req.body

    const toDo = todo.find(todo => todo.id === +id)

    todo.content = content

    res.status(200).json({status: 'succes', data: {updatedTodo: toDo}} )
}

//Delete ToDo given an ID
exports.deleteTodo = catchAsync(async (req, res) => {
	const { id } = req.params;

	const todoExists = await todo.findOne({ where: { id } });

	if (!todoExists) {
		res.status(404).json({
            status: 'error',
            message: 'Cant delete ToDo, invalid ID'
        });
        return;
	}

	await todoExists.destroy();
	
	res.status(204).json({
		status: 'success',
	});
});
