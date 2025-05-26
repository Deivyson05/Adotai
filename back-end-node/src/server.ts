import express from 'express';
import cors from 'cors';
import db from './config/db.ts';
import router from './routes/routes.ts';
import http from 'http';  
import socketIo from 'socket.io';

const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use(router);

db();

server.listen(port, () => {
    console.log('Server is running in http://localhost:3000');
});

const server = http.createServer(app);  
const io = socketIo(server);  

io.on('connection', (socket) => {  
  socket.on('entrar_chat', (idChat: string) => {  
    socket.join(idChat);  
  });  

  socket.on('enviar_mensagem', (data: { idChat: string, mensagem: string, remetente: string }) => {  
    io.to(data.idChat).emit('nova_mensagem', {  
      mensagem: data.mensagem,  
      remetente: data.remetente  
    });  
  });  
});  

server.listen(3000, () => console.log('Socket rodando na porta 3000'));  

import pedidosRouter from './routes/pedidos.routes.ts';  
app.use('/pedidos', pedidosRouter);  