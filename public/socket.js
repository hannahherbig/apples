!function (angular, io, app) {
  'use strict';
  
  factory.$inject = ['$rootScope']
  
  function factory($rootScope) {
    var socket = io.connect()
  
    return {
      on: function (name, callback) {
        socket.on(name, function () {
          var args = arguments
        
          $rootScope.$apply(function () {
            callback.apply(socket, args)
          })
        })
      }
    , emit: function () {
        var callback = arguments[arguments.length - 1]
          , args
      
        if (typeof callback === 'function') {
          args = [].slice.call(arguments, 0, -1)

          socket.emit.apply(socket, args.concat(function () {
            var args = arguments
          
            $rootScope.$apply(function () {
              callback.apply(socket, args)
            })
          }))
        } else {
          socket.emit.apply(socket, arguments)
        }
      }
    }
  }
  
  app.factory('socket', factory)
}(window.angular, window.io, window.app)
