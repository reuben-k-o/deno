// const text = "This is a test and it should be stored in a file!"

// const encoder = new TextEncoder()
// const data = encoder.encode(text)

// Deno.writeFile('message.txt', data).then(()=>{
//     console.log('Wrote to a file')
// })


import { serve } from "https://deno.land/std@0.134.0/http/server.ts";

serve(() => new Response("Hello World\n"));

console.log("http://localhost:8000/");