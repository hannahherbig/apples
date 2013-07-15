'use strict';

var connect = require('connect')
  , app     = connect()
              .use(connect.logger('dev'))
              .use(connect.compress())
              .use(connect.static('public'))
  , server  = require('http').createServer(app)
  , io      = require('socket.io').listen(server)
  , Game    = require('./game')
  , game    = new Game()

server.listen(process.env.PORT || 3000)

io.sockets.on('connection', function (socket) {
  var me = game.createPlayer(socket.id)
  
  socket.emit('game', game.pickle(), me.name)
  socket.emit('hand', me.hand)

  socket.on('disconnect', function () {
    me.quit()
  })
  
  socket.on('play', function (card) {
    me.play(card)
  })
  
  socket.on('pick', function (card) {
    me.pick(card)
  })
  
  socket.on('name', function (name) {
    me.name = name
    me.emit('update')
  })
  
  me.on('update', function () {
    socket.emit('me', me.pickle())
  })
  
  me.on('hand', function () {
    socket.emit('hand', me.hand)
  })
  
  game.on('update', function () {
    socket.emit('game', game.pickle(), me.id)
  })
})

game.on('judge', function (cards) {
  io.sockets.emit('judge', cards)
})
