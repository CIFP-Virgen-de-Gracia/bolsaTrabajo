const socketController = (socket) => {
    console.log("Cliente conectado: ", socket.id);

    socket.on('disconnect', () => {
        console.log("Cliente desconectado", socket.id);
    });

    socket.on('enviar-notificacion', (payload, callback) => {
        console.log(payload);
        callback({msg: "Notificacion enviada", fecha: new Date().getTime()});
        socket.broadcast.emit('recibir-notificacion', payload);
    });

}

module.exports = {
    socketController
}