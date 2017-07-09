"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var greenQuad = document.querySelector("#q1");
var redQuad = document.querySelector("#q2");
var yellowQuad = document.querySelector("#q3");
var blueQuad = document.querySelector("#q4");
var gameQuads = [greenQuad, redQuad, yellowQuad, blueQuad];
var quads = document.getElementsByClassName("quads");

var randomSequence = [];
var currentScore = 0;
var highScore = 0;
var counter = 0;
var isGameOver = false;
var isGameRunning = false;
var isDisplaying = false;
//dom elements for scores
var currentScoreEle = document.querySelector(".currentScore");
var highScoreEle = document.querySelector(".highScore");

var gameAudio = new Audio('https://soundbible.com/grab.php?id=1598&type=mp3');
var gameOverAudio = new Audio("https://soundbible.com/grab.php?id=1830&type=mp3");
var highScoreAudio = new Audio("https://soundbible.com/grab.php?id=1964&type=mp3");

var sleep = function sleep(time) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, time);
  });
};

window.onload = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
  var startButton;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return sleep(1000);

        case 2:
          startButton = document.querySelector("#startButton");

          startButton.addEventListener('click', function () {
            currentScore = 0;
            isGameOver = false;
            isGameRunning = true;
            startGame();
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, undefined);
}));

var startGame = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
    var i;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return sleep(600);

          case 2:
            generateSequence();

            updateCurrentScore();

            isDisplaying = true;
            i = 0;

          case 6:
            if (!(i < randomSequence.length)) {
              _context2.next = 16;
              break;
            }

            if (isGameOver) {
              _context2.next = 13;
              break;
            }

            _context2.next = 10;
            return sleep(500);

          case 10:
            displayColor(randomSequence[i], 600);
            _context2.next = 13;
            return sleep(500);

          case 13:
            i++;
            _context2.next = 6;
            break;

          case 16:
            isDisplaying = false;

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  })),
      _this = undefined;

  return function startGame() {
    return ref.apply(_this, arguments);
  };
}();

//displayColor takes in the quadrant to light up, and for how long
var displayColor = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(quadrant, timer) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            gameQuads[quadrant].classList.add("active");
            gameAudio.currentTime = 0;
            gameAudio.play();
            _context3.next = 5;
            return sleep(timer).then(function () {
              gameQuads[quadrant].classList.remove("active");
              gameAudio.pause();
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  })),
      _this = undefined;

  return function displayColor(_x, _x2) {
    return ref.apply(_this, arguments);
  };
}();

//appends a random number between 0 - 4 to our sequence array
var generateSequence = function generateSequence(n) {
  randomSequence.push(Math.floor(Math.random() * 4 + 0));
};

var checkUserInput = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(event) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (isDisplaying) {
              _context4.next = 16;
              break;
            }

            displayColor(parseInt(event.target.id.substring(1, 2)) - 1, 200);

            _context4.next = 4;
            return sleep(250);

          case 4:
            if (!("q" + (randomSequence[counter] + 1) !== event.target.id)) {
              _context4.next = 10;
              break;
            }

            counter = 0;
            displayGameOver();
            return _context4.abrupt("return");

          case 10:
            counter += 1;
            //if the user has answered correctly we move to

            if (!(counter > currentScore)) {
              _context4.next = 16;
              break;
            }

            currentScore = counter;
            counter = 0;
            startGame();
            return _context4.abrupt("return");

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  })),
      _this = undefined;

  return function checkUserInput(_x3) {
    return ref.apply(_this, arguments);
  };
}();

var displayGameOver = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!isGameRunning) {
              _context5.next = 15;
              break;
            }

            isGameOver = true;
            isGameRunning = false;
            isDisplaying = false;

            updateCurrentScore();
            randomSequence = [];

            gameOverAudio.play();
            alert("Game Over! You scored: " + currentScore + ". Press Start to play again.");

            gameOverAudio.pause();
            _context5.next = 11;
            return sleep(500);

          case 11:
            gameOverAudio.currentTime = 0;

            _context5.next = 14;
            return sleep(250);

          case 14:
            if (currentScore > highScore) {
              highScore = currentScore;
              updateHighScore();

              highScoreAudio.play();
              alert("New Highscore!!!");
              highScoreAudio.pause();
              highScoreAudio.currentTime = 0;
            }

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  })),
      _this = undefined;

  return function displayGameOver() {
    return ref.apply(_this, arguments);
  };
}();

var updateCurrentScore = function updateCurrentScore() {
  currentScoreEle.innerHTML = currentScore;
};

var updateHighScore = function updateHighScore() {
  highScoreEle.innerHTML = currentScore;
};

$('.quads').on('click', checkUserInput);