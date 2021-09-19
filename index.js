const express = require('express')

const server = express()

server.use(express.json())

const construtores = [
  'Aston Martin',
  'Alpha Tauri',
  'Ferrari',
  'Mercedes',
  'McLaren'
]

//retornar um
server.get('/construtores/:index', (req, res) => {
  const { index } = req.params

  return res.json(construtores[index])
})

//retornar todos
server.get('/construtores', (req, res) => {
  return res.json(construtores)
})

//criar
server.post('/construtores', (req, res) => {
  const { name } = req.body
  construtores.push(name)

  return res.json(construtores)
})

//atualizar
server.put('/construtores/:index', (req, res) => {
  const { index } = req.params
  const { name } = req.body

  construtores[index] = name

  return res.json(construtores)
})

//excluir
server.delete('/construtores/:index', (req, res) => {
  const { index } = req.params

  construtores.splice(index, 1)
  return res.json({ message: 'Construtor deletado' })
})

server.listen(3000)
