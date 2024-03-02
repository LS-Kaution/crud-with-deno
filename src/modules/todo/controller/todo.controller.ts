import todoService from "../service/todo.service.ts";

async function create(context: any) {
    await todoService.create(context);

    context.response.status = 201;
    context.response.body = {
        meta: {
            code: 201,
            status: "Created",
        }
    };
}

async function findAll(context: any) {
    context.response.status = 200;
    context.response.body = {
        meta: {
            code: 200,
            status: "Ok",
        },
        data: await todoService.findAll()
    };
}

async function findById(context: any) {
    context.response.status = 200;
    context.response.body = {
        meta: {
            code: 200,
            status: "Ok",
        },
        data: await todoService.findById(context.params.id)
    };
}

async function update(context: any) {
    await todoService.update(context);

    context.response.status = 200;
    context.response.body = {
        meta: {
            code: 200,
            status: "Ok",
        }
    };
}

async function eliminate(context: any) {
    await todoService.eliminate(context.params.id);

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