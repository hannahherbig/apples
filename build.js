var fs = require('fs')
  , files = {
      NOUNS      : 'cards/red.txt'
    , ADJECTIVES : 'cards/green.txt'
    }
  , node = {}
  , site = {}

Object.keys(files).forEach(function (name) {
  var cards = []
  
  fs.readFileSync(files[name])
  .toString()
  .trim()
  .split('\n')
  .forEach(function (line) {
    var m = line.trim().match(/(.+?) = (.+)/)
      , word = m[1]
      , desc = m[2]
    
    cards.push(word)
    site[word] = desc
  })
  
  node[name] = cards
})

fs.writeFileSync('cards.json', JSON.stringify(node, null, 2))
fs.writeFileSync('public/cards.js',
  "!function (app) {\napp.constant('CARDS',\n" + JSON.stringify(site, null, 2) + ');\n}(window.app);')
