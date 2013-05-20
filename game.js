'use strict';

var _            = require('lodash')
  , debug        = require('debug')('apples:game')
  , util         = require('util')
  , EventEmitter = require('events').EventEmitter
  , CARDS        = require('./cards')
  , WAITING      = 'Waiting'
  , PLAYING      = 'Playing'
  , JUDGING      = 'Judging'

module.exports = Game

function Game() {
  debug('new Game')
  
  this.state      = WAITING
  this.players    = []
  this.nouns      = _.shuffle(CARDS.NOUNS.slice())
  this.adjectives = _.shuffle(CARDS.ADJECTIVES.slice())
  
  trace('Game:', this)
}
util.inherits(Game, EventEmitter)

Game.prototype.pickle = function () {
  return {
    state     : this.state
  , players   : this.players.map(function (p) {
      return p.pickle()
    })
  , adjective : this.adjective
  , last      : this.last && {
      judge     : this.last.judge.pickle()
    , adjective : this.last.adjective
    , noun      : this.last.noun
    , winner    : this.last.winner.pickle()
    }
  }
}

Game.prototype.nextRound = function () {
  debug('Game#nextRound')
  
  this.nextJudge()
  this.players.forEach(function (player) {
    player.played = null
  })
  this.state = PLAYING
  this.adjective = this.adjectives.shift()
  this.emit('update')
}

Game.prototype.nextJudge = function () {
  debug('Game#nextJudge')
  
  if (this.players.length > 0) {
    var i = 0
    
    if (this.judge != null) {
      i = (_.findIndex(this.players, 'judge') + 1) % this.players.length
      this.judge.judge = false
    }
    
    this.judge = this.players[i]
    this.judge.judge = true
    this.judge.played = null
    this.judge.emit('update')
  } else {
    this.judge = null
  }
  
  this.play()
  this.emit('update')
}

Game.prototype.stop = function () {
  debug('Game#stop')

  this.players.forEach(function (player) {
    player.played = null
    player.judge = false
    player.emit('update')
  })
  this.adjective = null
  this.judge = null
  this.state = WAITING
  this.emit('update')
}

Game.prototype.pick = function (card) {
  debug('Game#pick', card)
  
  var winner = _.find(this.players, function (p) {
    return p.played === card
  })
  
  winner.score++
  winner.emit('update')
  this.last = {
    judge     : this.judge
  , adjective : this.adjective
  , winner    : winner
  , noun      : card
  }
  this.emit('pick', this.judge, winner, card)
  this.nextRound()
}

Game.prototype.draw = function () {
  debug('Game#draw')
  
  return this.nouns.shift()
}

Game.prototype.play = function () {
  debug('Game#play')
  
  var cards = _(this.players).reject('judge').pluck('played').shuffle().valueOf()
  
  if (this.state === PLAYING && _.all(cards)) {
    this.state = JUDGING
    this.emit('judge', cards)
    this.emit('update')
  }
}

Game.prototype.createPlayer = function (id) {
  debug('Game#createPlayer', id)
  
  var player = new Player(this, id)
  
  player.draw(7)
  
  this.players.push(player)
  
  if (this.players.length === 3) {
    this.nextRound()
  }
  
  player.on('update', this.emit.bind(this, 'update'))
  
  return player
}

Game.prototype.removePlayer = function (player) {
  debug('Game#removePlayer', player.name)
  
  if (player.judge && this.players.length > 1) {
    this.nextJudge()
  }
  
  this.players.splice(this.players.indexOf(player), 1)
  
  if (this.players.length < 3) { // not enough players
    this.stop()
  }
  
  this.play()
  
  this.emit('update')
}

function Player(game, id) {
  debug('new Player', id)
  
  this.game  = game
  this.id    = id
  this.name  = id
  this.hand  = []
  this.score = 0
  this.judge = false
  
  trace('Player: ' + id, this)
}
util.inherits(Player, EventEmitter)

Player.prototype.pickle = function () {
  return {
    id     : this.id
  , name   : this.name
  , score  : this.score
  , judge  : this.judge
  , played : !!this.played
  }
}

Player.prototype.draw = function (n) {
  debug('Player#draw', this.name)
  
  var i
  
  n = n || 1
  
  for (i = 0; i < n; i++) {
    this.hand.push(this.game.draw())
  }
  this.emit('hand')
}

Player.prototype.play = function (card) {
  debug('Player#play', this.name, card)
  
  if (!this.judge && this.played == null && this.game.state === PLAYING) {
    this.played = card
    this.hand.splice(this.hand.indexOf(card), 1)
    this.draw()
    this.game.play()
    this.emit('update')
  }
}

Player.prototype.pick = function (card) {
  debug('Player#pick', this.name, card)
  
  if (this.judge) {
    this.game.pick(card)
  }
}

Player.prototype.quit = function () {
  debug('Player#quit', this.name)
  
  this.game.removePlayer(this)
  this.removeAllListeners()
}

function trace(prefix, object) {
  var emit = object.emit
  
  object.emit = function (ev) {
		debug(prefix + ' ' + ev, [].slice.call(arguments, 1).map(function (o) {
      return util.inspect(typeof o.pickle === 'function' ? o.pickle() : o)
    }).join(', '))
    emit.apply(object, arguments)
  }
}
