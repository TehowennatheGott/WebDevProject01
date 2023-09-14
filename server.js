const express = require('express');
const http

// Start the server


io.on('connection', (socket) => {
    console.log('socket: ', socket.id);

    socket.on('reach10', data => {
        console.log('data: ', data);
    });
});