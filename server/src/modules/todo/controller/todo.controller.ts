import { Context } from "https://deno.land/x/oak/mod.ts";
import todoService from "../service/todo.service.ts";

type TodoContext = Context & {
    params: {
        id: string
    }
}

async function create(context: Context) {
    await todoService.create(context);

    context.response.status = 201;
    context.response.body = {
        meta: {
            code: 201,
            status: "Created",
        }
    };
}

async function findAll(context: Context) {
    context.response.status = 200;
    context.response.body = {
        meta: {
            code: 200,
            status: "Ok",
        },
        data: await todoService.findAll()
    };
}

async function findById(context: TodoContext) {
    context.response.status = 200;
    context.response.body = {
        meta: {
            code: 200,
            status: "Ok",
        },
        data: await todoService.findById(parseInt(context.params.id))
    };
}

async function update(context: Context) {
    await todoService.update(context);

    context.response.status = 200;
    context.response.body = {
        meta: {
            code: 200,
            status: "Ok",
        }
    };
}

async function eliminate(context: TodoContext) {
    await todoService.eliminate(parseInt(context.params.id));

    context.response.status = 200;
    context.response.body = {
        meta: {
            code: 200,
            status: "Ok",
        }
    };
}

export default {
    create,
    findAll,
    findById,
    update,
    eliminate
}