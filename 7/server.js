import { Server } from 'ws';

//создаём вебсокет-сервер
const wss = new Server({ port: 8080 });

//отправляем клиентам, когда функция clientValidator возвращает true
wss.broadcast = function(data, clientValidator = () => true)
{
    this.clients.array.forEach(client => {
        if (clientValidator(client)) 
        {
            client.send(data);
        }
    });
}

wss.on("connection", ws => {
    //событие будет вызвано, когда клиент отправит сообщение
    ws.on('messege', messege => {
        //отправляем сообщение всем, кроме автора
        wss.broadcast(messege, client => client !== wss);
    });
});
