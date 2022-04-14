// const text = "This is a test and it should be stored in a file!"

// const encoder = new TextEncoder()
// const data = encoder.encode(text)

// Deno.writeFile('message.txt', data).then(()=>{
//     console.log('Wrote to a file')
// })


// import { serve } from "https://deno.land/std@0.134.0/http/server.ts";

// serve(() => new Response("Hello World\n"))

// console.log("http://localhost:8000/");

import { Application } from "https://deno.land/x/oak/mod.ts";

import todoRoutes from './routes/todos.ts'

const app = new Application();

// app.use((ctx) => {
//     ctx.response.body = "Hello World from Oak!";
// });
app.use(todoRoutes.routes())
app.use(todoRoutes.allowedMethods())

await app.listen({ port: 8000 });