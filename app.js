const ws = new require('ws');

const wsServer = new ws.Server({ port: 5000 });

const users = [];

wsServer.on('connection', (newUser) => {
    users.push(newUser);
    
    newUser.on("message", (message) => {
        // console.log(message)
        // console.log(typeof (message))
        
        console.log(String(message))
    })

    newUser.on('close', () => {   
        const idx = users.findIndex(user => user === newUser);   
        users.splice(idx, 1);
    });
})




// Основы (пример)\\

// const clients = [];

// wsServer.on('connection', (newClient) => {
//     clients.push(newClient);
//     // console.log('Новое подключение с фронтеда');
//     // setTimeout(() => {
//     //     newClient.send("Добро пожаловать на наш сервер");
//     // }, 3000);

//     newClient.send("Добро пожаловать на наш сервер");

//     newClient.on("message", (message) => {
//         console.log(message.toString());
//     });

//     newClient.on('close', (code, reason) => {
//         // console.log('code', code);
//         // console.log('reason', reason);
//         const idx = clients.findIndex(client => client === newClient);
//         console.log('длина до', clients.length);
//         clients.splice(idx, 1);
//         console.log('длина после', clients.length);

//     });
// });
