import { Router } from "https://deno.land/x/oak/mod.ts";
import todoController from '../modules/todo/controller/todo.controller.ts'

export const api = (router: Router) => {
    router.post("/api/v1/todos", todoController.create)
    router.get("/api/v1/todos", todoController.findAll)
    router.get("/api/v1/todos/:id", todoController.findById)
    router.put("/api/v1/todos/", todoController.update)
    router.delete("/api/v1/todos/:id", todoController.eliminate)
}