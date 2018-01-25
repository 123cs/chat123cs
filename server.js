'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = 3000;

io.on('connection', function(socket) {
    socketIO.on('*', function(packet){
        // client.emit('foo', 'bar', 'baz')
        packet.data === ['foo', 'bar', 'baz']
    });

});

io.listen(PORT);