import database from "../../../helpers/database.ts";
import { Todo } from "../todo.type.ts";

async function create(todo: Omit<Todo, "id" | "date">) {
    return await database.queryObject({
        text: "INSERT INTO todos(title, description, status) values($1, $2, $3)",
        args: [todo.title, todo.description, todo.status]
    })
}

async function findAll() {
    return await database.queryObject({
        text: "SELECT * FROM todos"
    })
}

async function findById(id: Todo["id"]) {
    return await database.queryObject({
        text: "SELECT * FROM todos WHERE id = $1",
        args: [id] 
    })
}

async function update(todo: Omit<Todo, "date">) {
    return await database.queryObject({
        text: "UPDATE todos set title = $1, description = $2, status = $3 where id = $4",
        args: [todo.title, todo.description, todo.status, todo.id]
    })
}

async function eliminate(id: Todo["id"]) {
    return await database.queryObject({
        text: "DELETE FROM todos where id = $1",
        args: [id]
    })
}

export default {
    create,
    findAll,
    findById,
    update,
    eliminate
}