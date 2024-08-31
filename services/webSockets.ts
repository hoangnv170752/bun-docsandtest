import {watch} from 'fs';

export const serverSocket = Bun.serve<{ authToken: string }>({
    async fetch(req, server) {
      const success = server.upgrade(req);
      watch(import.meta.dir, (event, fileName)=>{
        console.log('Detected upgrade ' + fileName + ' from ' + event);
      })
      if (success) {
        return undefined;
      }
      const path = new URL(req.url).pathname;

      if (path === "/") {
        return new Response("Welcome to the Bun environment!");
      }

      if (req.method === "POST" && path === "/api/post") {
        const data = await req.json();
        console.log("Received JSON:", data);
        return Response.json({ success: true, data });
      }
  
      else {
        return new Response("Hello world!");
      }
    },
    websocket: {
      async message(ws, message) {
        console.log(`Received ${message}`);
        ws.send(`You said: ${message}`);
      },
    },
});
  