import todoController from '../modules/todo/controller/todo.controller.ts'

export const api = (router: any) => {
    router.post("/api/v1/todos", todoController.create)
    router.get("/api/v1/todos", todoController.findAll)
    router.get("/api/v1/todos/:id", todoController.findById)
    router.put("/api/v1/todos/:id", todoController.update)
    router.delete("/api/v1/todos/:id", todoController.eliminate)
}