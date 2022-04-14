import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router()

interface Todo {
    id: string;
    text: string;
}

let todos: Todo[] = [] 

router.get('/todos',(ctx)=>{
    ctx.response.body = { todos: todos}
}  )

router.post('/todos', async (ctx) => {
    const body = ctx.request.body()
    const data = await body.value
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: data.text,
    }

    todos.push(newTodo)
    ctx.response.body = {message: 'Created todo', todos: newTodo}

}  )
router.put('/todos/:todoId', async (ctx)=>{
    const tid = ctx.params.todoId
    const body = ctx.request.body()
    const data = await body.value;
    const todoIndex = todos.findIndex(todo =>{
        return todo.id === tid
    })
    console.log(todoIndex)
    todos[todoIndex] = { id: todos[todoIndex].id, text: data.text}
    ctx.response.body = {message: "updated todo", todos: todos}

}  )
router.delete('/todos/:todoId', (ctx)=>{
    const tid = ctx.params.todoId
    const newTodos = todos.filter(todo =>{ 
        return todo.id !== tid
    })
    console.log(newTodos)
    ctx.response.body = { message: "deleted todo", todos: newTodos}
}  )

export default router