import todoRepository from "../repository/todo.repository.ts";
import { Todo, TodoList } from "../todo.type.ts";

async function create(context: any) {
    const body = await context.request.body({
        contentTypes: {
            text: ["application/json"],
        },
    });

    const todo = {
        title: body.value.title,
        description: body.value.description,
        status: body.value.status,
    };

    return await todoRepository.create(todo);
}

async function findAll() {
    const data = await todoRepository.findAll();
    const todos: TodoList = [];   

    data.rows.map((todo: any) => {
        todos.push(todo);
    });

    return todos;
}

async function findById(id: number) {
    const data = await todoRepository.findById(id);
    const todo: Todo = data.rows[0] as Todo;  

    return todo;
}

async function update(context: any) {
    const body = await context.request.body({
        contentTypes: {
            text: ["application/json"],
        }
    });

    return await todoRepository.update({
        id: body.value.id,
        title: body.value.title,
        description: body.value.description,
        status: body.value.status
    });
}

async function eliminate(id: number) {
    return await todoRepository.eliminate(id);
}

export default {
    create,
    findAll,
    findById,
    update,
    eliminate
};