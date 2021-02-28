port = 3003

const express = require('express')
const bd = require('./bancoDeDados')
const app = express()

app.use(express.json())

app.listen(port, () => {
    console.log(`Servidor iniciado! Porta: ${port}`)
})

app.get('/users', (req, res, next) => {
    res.send(bd.listUsers());
})

app.get('/users/:id', (req, res, next) => {
    res.send(bd.getUser(req.params.id))
})

app.post('/users', (req, res, next) => {
    const user = bd.createUser({
        nome: req.body.nome,
        email: req.body.email,
        endereco: req.body.endereco
    })
    res.send(user)
})

app.put('/users/:id', (req, res, next) => {
    res.send(bd.editUser(req.params.id, req))
})

app.delete('/users/:id', (req, res, next) => {
    res.send(bd.deleteUser(req.params.id))
})