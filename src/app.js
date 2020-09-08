!(function (window, angular, _) {
  "use strict";

  var app = (window.app = angular.module("app", []));

  app.controller("controller", [
    "$scope",
    "socket",
    "CARDS",
    function ($scope, socket, CARDS) {
      var UNKNOWN = "Unknown",
        WAITING = "Waiting",
        PLAYING = "Playing",
        JUDGING = "Judging",
        connected = false;

      $scope.state = UNKNOWN;

      // refresh the page if we connect while we're already connected
      socket.on("connect", function () {
        if (connected) {
          document.location.reload(true);
        } else {
          connected = true;
        }
      });

      socket.on("game", function (game, id) {
        var me = _.find(game.players, function (p) {
          return p.id === id;
        });
        me.me = true;
        _.extend($scope, game);
        $scope.me = me;
        $scope.canplay = !me.played && !me.judge && game.state === PLAYING;
        $scope.judge = me.judge && game.state === JUDGING;
        $scope.unknown = game.state === UNKNOWN;
        $scope.waiting = game.state === WAITING;
        $scope.playing = game.state === PLAYING;
        $scope.judging = game.state === JUDGING;
      });

      socket.on("hand", function (hand) {
        $scope.hand = hand;
      });

      socket.on("judge", function (cards) {
        $scope.cards = cards;
      });

      $scope.play = function (card) {
        socket.emit("play", card);
      };

      $scope.pick = function (card) {
        socket.emit("pick", card);
      };

      $scope.define = function (word) {
        return CARDS[word];
      };

      $scope.updateName = function () {
        socket.emit("name", $scope.name);
      };
    },
  ]);
})(window, window.angular, window._);
