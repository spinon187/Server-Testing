const express = require('express');
const server = express();
const db = require('./dbConfig.js');

server.use(express.json())


server.post('/create', (req, res) => {
    db.create(req.body)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

server.delete('/remove/:id', (req, res) => {
    db.remove(req.params.id)
        .then(deleted => {
            res.status(200).json(deleted)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = server;