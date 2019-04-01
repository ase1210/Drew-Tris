/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./tetris.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/Board/board.js":
/*!***************************!*\
  !*** ./js/Board/board.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _View_canvas_templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View/canvas-templates */ "./js/View/canvas-templates.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Board =
/*#__PURE__*/
function () {
  function Board() {
    var _this = this;

    var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 21;
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    _classCallCheck(this, Board);

    this.height = height;
    this.width = width;
    this.grid = new Array(this.height).fill().map(function (r) {
      return new Array(_this.width).fill(0);
    });
    this.currentPiece = undefined;
    this.currentPos = [];
    this.currentPosState = undefined;
  }

  _createClass(Board, [{
    key: "setCurrentPiece",
    value: function setCurrentPiece(piece) {
      this.currentPiece = piece;
      this.currentPos = piece.initialState;
      this.currentPosState = 0;
      this.move("startingPos");
    }
  }, {
    key: "setSavedPiece",
    value: function setSavedPiece(piece) {
      var _this2 = this;

      this.currentPos.forEach(function (pos) {
        _this2.grid[pos[0]][pos[1]] = 0;
      });
      this.setCurrentPiece(piece);
    }
  }, {
    key: "move",
    value: function move(direction) {
      var currPos = this.currentPos;
      var newPos = this.currentPiece.move(direction, currPos);

      if (this._isValidMove(currPos, newPos)) {
        this._updateGrid(currPos, newPos);
      } else if (direction === "down") return true;
    }
  }, {
    key: "clearRows",
    value: function clearRows() {
      var _this3 = this;

      var fullRows = [];
      this.currentPos.forEach(function (block) {
        if (_this3._isOnGrid(block) && _this3.grid[block[0]].every(function (pos) {
          return pos;
        }) && !fullRows.includes(block[0])) {
          fullRows.push(block[0]);
        }
      });
      fullRows.sort(function (a, b) {
        return a - b;
      }); // clearRowAnimation(fullRows);

      fullRows.forEach(function (rowNum) {
        _this3.grid.splice(rowNum, 1);

        _this3.grid.unshift(new Array(10).fill(0));
      });
      return fullRows.length;
    }
  }, {
    key: "_isValidMove",
    value: function _isValidMove(currPos, newPos) {
      for (var i = 0; i < newPos.length; i++) {
        var newBlock = newPos[i];
        if (newBlock[1] < 0) return false;
        if (newBlock[1] > 9) return false;
        if (newBlock[0] > 20) return false; // REFACTOR THIS BELOW IF STATEMENT to use isOnGrid and isOccupied..maybe refactor above if statements as well?

        if (this._isOnGrid(newBlock) && this.grid[newBlock[0]][newBlock[1]] && // location on grid is occupied
        !this._includesBlock(currPos, newBlock)) return false;
      }

      return true;
    } // _isOccupied(posArr, block) {}

  }, {
    key: "_includesBlock",
    value: function _includesBlock(posArr, block) {
      for (var i = 0; i < posArr.length; i++) {
        if (posArr[i][0] === block[0] && posArr[i][1] === block[1]) return true;
      }

      return false;
    }
  }, {
    key: "_isOnGrid",
    value: function _isOnGrid(block) {
      return !!this.grid[block[0]];
    }
  }, {
    key: "_drawGrid",
    value: function _drawGrid() {
      Object(_View_canvas_templates__WEBPACK_IMPORTED_MODULE_0__["drawGrid"])(this.grid);
    }
  }, {
    key: "_updateGrid",
    value: function _updateGrid(currPos, newPos) {
      var _this4 = this;

      newPos.forEach(function (block) {
        if (_this4._isOnGrid(block)) {
          _this4.grid[block[0]][block[1]] = _this4.currentPiece.color;
        }
      });
      currPos.forEach(function (block) {
        if (_this4._isOnGrid(block) && !_this4._includesBlock(newPos, block)) {
          _this4.grid[block[0]][block[1]] = 0;
        }
      });

      this._drawGrid();

      this.currentPos = newPos;
    } // rotate(direction) {
    //   const currentPiece = this.currentPiece;
    //   const currPos = this.currentPos;
    //   let [currPosState, shift] = [this.currentPosState, -1];
    //   //  = this.currentPosState;
    //   if (direction === "clockwise") {
    //     shift = 1;
    //     currPosState += 1;
    //   }
    //   // let shift = direction === "clockwise" ? 1 : -1;
    //   const newPos = currentPiece.rotate(currPos, currPosState, shift);
    //   if (this._isValidMove(currPos, newPos)) {
    //     this._updateGrid(currPos, newPos);
    //     this.currentPosState = currPosState % this.currentPiece.numStates;
    //   } else if (direction === "down") return false;
    // }

  }, {
    key: "rotateClockwise",
    value: function rotateClockwise() {
      var currPos = this.currentPos;
      var pieceState = (this.currentPosState + 1) % this.currentPiece.numStates;
      var rotationMap = this.currentPiece.rotationMap[pieceState];
      var newPos = currPos.map(function (block, idx) {
        var newBlock = block.slice();
        newBlock[0] += rotationMap[idx][0];
        newBlock[1] += rotationMap[idx][1];
        return newBlock;
      });

      if (this._isValidMove(currPos, newPos)) {
        this._updateGrid(currPos, newPos);

        this.currentPosState = (this.currentPosState + 1) % this.currentPiece.numStates;
      }
    }
  }, {
    key: "rotateCounterClockwise",
    value: function rotateCounterClockwise() {
      var currPos = this.currentPos;
      var pieceState = this.currentPosState;
      var rotationMap = this.currentPiece.rotationMap[pieceState];
      var newPos = currPos.map(function (block, idx) {
        var newBlock = block.slice();
        newBlock[0] -= rotationMap[idx][0];
        newBlock[1] -= rotationMap[idx][1];
        return newBlock;
      });

      if (this._isValidMove(currPos, newPos)) {
        this._updateGrid(currPos, newPos);

        this.currentPosState = (this.currentPosState - 1 + this.currentPiece.numStates) % this.currentPiece.numStates;
      }
    }
  }]);

  return Board;
}();



/***/ }),

/***/ "./js/Game/game.js":
/*!*************************!*\
  !*** ./js/Game/game.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _Board_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Board/board */ "./js/Board/board.js");
/* harmony import */ var _KeyMap_keyMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../KeyMap/keyMap */ "./js/KeyMap/keyMap.js");
/* harmony import */ var _View_canvas_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../View/canvas-templates */ "./js/View/canvas-templates.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Game =
/*#__PURE__*/
function () {
  function Game(pieces, difficulty, colors) {
    var board = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new _Board_board__WEBPACK_IMPORTED_MODULE_0__["default"]();

    _classCallCheck(this, Game);

    this.board = board;
    this.difficulty = difficulty;
    this.colors = colors;
    this.pieces = pieces;
    this.score = 0;
    this.level = 1;
    this.bag = [];
    this.timeOut = null;

    this._fillAndShuffleBag();

    this.swapped = false;
    this.savedPiece = this.bag.shift();
    this.currentPiece = null;
    this.nextPiece = this.bag.shift();
    this.keyMap = null;
    this.rowsCleared = 0;
    this._tick = this._tick.bind(this);
  }

  _createClass(Game, [{
    key: "play",
    value: function play() {
      this._setKeyMap();

      this._setNextPiece();

      Object(_View_canvas_templates__WEBPACK_IMPORTED_MODULE_2__["previewPiece"])(this.savedPiece, "saved-piece");
    }
  }, {
    key: "pause",
    value: function pause() {
      var play = document.getElementById("play");

      if (play.innerText === "Pause") {
        clearTimeout(this.timeOut);
        play.innerText = "Resume";
        this.keyMap.removeEventListener();
        this.keyMap = new _KeyMap_keyMap__WEBPACK_IMPORTED_MODULE_1__["default"](this._pauseKeys()); //RENDER paused board
      } else {
        this.keyMap.removeEventListener();
        this.keyMap = new _KeyMap_keyMap__WEBPACK_IMPORTED_MODULE_1__["default"](this._keys());
        play.innerText = "Pause";
        this.timeOut = setTimeout(this._tick, 75 * (11 - this.level));
      }
    }
  }, {
    key: "_pauseKeys",
    value: function _pauseKeys() {
      var _this = this;

      return {
        KeyP: function KeyP() {
          return _this.pause();
        }
      };
    }
  }, {
    key: "_keys",
    value: function _keys() {
      var _this2 = this;

      return {
        KeyZ: function KeyZ() {
          _this2.board.rotateCounterClockwise();
        },
        KeyX: function KeyX() {
          return _this2.board.rotateClockwise();
        },
        KeyP: function KeyP() {
          return _this2.pause();
        },
        KeyS: function KeyS() {
          return _this2._setSavedPiece();
        },
        ArrowUp: function ArrowUp() {
          return _this2.board.rotateClockwise();
        },
        ArrowDown: function ArrowDown() {
          return _this2.move("down");
        },
        ArrowLeft: function ArrowLeft() {
          return _this2.move("left");
        },
        ArrowRight: function ArrowRight() {
          return _this2.move("right");
        }
      };
    }
  }, {
    key: "_setKeyMap",
    value: function _setKeyMap() {
      this.keyMap = new _KeyMap_keyMap__WEBPACK_IMPORTED_MODULE_1__["default"](this._keys());
    }
  }, {
    key: "move",
    value: function move(direction) {
      if (this.board.move(direction)) {
        this._freezePiece();
      }
    }
  }, {
    key: "_setNextPiece",
    value: function _setNextPiece() {
      this.board.setCurrentPiece(this.nextPiece);
      this.currentPiece = this.nextPiece;
      this.nextPiece = this.bag.shift();
      Object(_View_canvas_templates__WEBPACK_IMPORTED_MODULE_2__["previewPiece"])(this.nextPiece, "next-piece");
      this.swapped = false;

      this._tick();

      if (this.bag.length === 0) {
        this._fillAndShuffleBag();
      }
    }
  }, {
    key: "_setSavedPiece",
    value: function _setSavedPiece() {
      if (!this.swapped) {
        this.board.setSavedPiece(this.savedPiece);
        var temp = this.savedPiece;
        this.savedPiece = this.currentPiece;
        this.currentPiece = temp;
        this.swapped = true;
        Object(_View_canvas_templates__WEBPACK_IMPORTED_MODULE_2__["previewPiece"])(this.savedPiece, "saved-piece");
      }
    }
  }, {
    key: "_clearRows",
    value: function _clearRows() {
      var rowsCleared = this.board.clearRows();
      this.rowsCleared += rowsCleared; // update #Rows display

      var rowsEl = document.getElementById("rows");
      rowsEl.innerHTML = this.rowsCleared;
      return rowsCleared;
    }
  }, {
    key: "_setScore",
    value: function _setScore(clearedRows) {
      this.score += this.level * 25 * Math.pow(2, clearedRows);
      var formattedScore = this.score.toString(); // update Score display

      var scoreEl = document.getElementById("score");
      scoreEl.innerHTML = formattedScore;
    }
  }, {
    key: "_updateLevel",
    value: function _updateLevel() {
      if (this.level < 10) {
        this.level = Math.floor(this.rowsCleared / 10) + this.difficulty;
      } // update Level display


      var levelEl = document.getElementById("level");
      levelEl.innerHTML = this.level;
    }
  }, {
    key: "_freezePiece",
    value: function _freezePiece() {
      clearTimeout(this.timeOut);

      var rowsCleared = this._clearRows();

      this._setScore(rowsCleared);

      this._updateLevel();

      if (this._gameOver()) {
        console.log("GameOver");
        return;
      } else {
        this._setNextPiece();
      }
    }
  }, {
    key: "_tick",
    value: function _tick() {
      if (this.board.move("down")) {
        this._freezePiece();
      } else {
        this.timeOut = setTimeout(this._tick, 75 * (11 - this.level));
      }
    }
  }, {
    key: "_gameOver",
    value: function _gameOver() {
      var gameOver = this.board.grid[0].some(function (pos) {
        return pos;
      });

      if (gameOver) {
        this.keyMap.removeEventListener();
        var play = document.getElementById("play");
        play.innerText = "Play"; // RENDER GAMEOVER WITH SCORE???

        Object(_View_canvas_templates__WEBPACK_IMPORTED_MODULE_2__["drawGameOver"])();
      }

      return gameOver;
    }
  }, {
    key: "_fillAndShuffleBag",
    value: function _fillAndShuffleBag() {
      var bag = [];

      for (var i = 0; i < 4; i++) {
        bag = bag.concat(this.pieces);
      }

      for (var _i = bag.length - 1; _i >= 0; _i--) {
        var j = Math.floor(Math.random() * _i);
        var _ref = [bag[j], bag[_i]];
        bag[_i] = _ref[0];
        bag[j] = _ref[1];
      }

      this.bag = bag;
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./js/KeyMap/keyMap.js":
/*!*****************************!*\
  !*** ./js/KeyMap/keyMap.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyMap; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var KeyMap =
/*#__PURE__*/
function () {
  function KeyMap(actions) {
    _classCallCheck(this, KeyMap);

    this.actions = actions;
    this.eventHandler = this.eventHandler.bind(this);
    document.addEventListener("keydown", this.eventHandler);
  }

  _createClass(KeyMap, [{
    key: "eventHandler",
    value: function eventHandler(e) {
      if (this.actions[e.code]) {
        this.actions[e.code]();
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener() {
      document.removeEventListener("keydown", this.eventHandler);
    }
  }]);

  return KeyMap;
}();



/***/ }),

/***/ "./js/Pieces/Classic/i-piece.js":
/*!**************************************!*\
  !*** ./js/Pieces/Classic/i-piece.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IPiece; });
/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pieces */ "./js/Pieces/pieces.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var IPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(IPiece, _Piece);

  function IPiece(color) {
    var _this;

    _classCallCheck(this, IPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IPiece).call(this, color));
    _this.height = 1;
    _this.width = 4;
    _this.x = -2;
    _this.y = 0;
    _this.initialState = [[0, -2], [0, -1], [0, 0], [0, 1]];
    _this.numStates = 2;
    _this.rotationMap = {
      0: [[2, -2], [1, -1], [0, 0], [-1, 1]],
      1: [[-2, 2], [-1, 1], [0, 0], [1, -1]]
    };
    return _this;
  }

  return IPiece;
}(_pieces__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/Pieces/Classic/j-piece.js":
/*!**************************************!*\
  !*** ./js/Pieces/Classic/j-piece.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JPiece; });
/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pieces */ "./js/Pieces/pieces.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var JPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(JPiece, _Piece);

  function JPiece(color) {
    var _this;

    _classCallCheck(this, JPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JPiece).call(this, color));
    _this.height = 2;
    _this.width = 3;
    _this.x = -1;
    _this.y = -1;
    _this.initialState = [[-1, -1], [-1, 0], [-1, 1], [0, 1]];
    _this.numStates = 4;
    _this.rotationMap = {
      0: [[-1, -1], [0, 0], [1, 1], [2, 0]],
      1: [[-1, 1], [0, 0], [1, -1], [0, -2]],
      2: [[2, 1], [1, 0], [0, -1], [-1, 0]],
      3: [[0, -1], [-1, 0], [-2, 1], [-1, 2]]
    };
    return _this;
  }

  return JPiece;
}(_pieces__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/Pieces/Classic/l-piece.js":
/*!**************************************!*\
  !*** ./js/Pieces/Classic/l-piece.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LPiece; });
/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pieces */ "./js/Pieces/pieces.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var LPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(LPiece, _Piece);

  function LPiece(color) {
    var _this;

    _classCallCheck(this, LPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LPiece).call(this, color));
    _this.height = 2;
    _this.width = 3;
    _this.x = -1;
    _this.y = -1;
    _this.initialState = [[-1, -1], [-1, 0], [-1, 1], [0, -1]];
    _this.numStates = 4;
    _this.rotationMap = {
      0: [[-1, -1], [0, 0], [1, 1], [0, -2]],
      1: [[-1, 1], [0, 0], [1, -1], [-2, 0]],
      2: [[2, 1], [1, 0], [0, -1], [1, 2]],
      3: [[0, -1], [-1, 0], [-2, 1], [1, 0]]
    };
    return _this;
  }

  return LPiece;
}(_pieces__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/Pieces/Classic/o-piece.js":
/*!**************************************!*\
  !*** ./js/Pieces/Classic/o-piece.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OPiece; });
/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pieces */ "./js/Pieces/pieces.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var OPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(OPiece, _Piece);

  function OPiece(color) {
    var _this;

    _classCallCheck(this, OPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OPiece).call(this, color));
    _this.height = 2;
    _this.width = 2;
    _this.x = -1;
    _this.y = -1;
    _this.initialState = [[-1, -1], [-1, 0], [0, 0], [0, -1]];
    _this.numStates = 1;
    _this.rotationMap = {
      0: [[0, 0], [0, 0], [0, 0], [0, 0]]
    };
    return _this;
  }

  return OPiece;
}(_pieces__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/Pieces/Classic/s-piece.js":
/*!**************************************!*\
  !*** ./js/Pieces/Classic/s-piece.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SPiece; });
/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pieces */ "./js/Pieces/pieces.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(SPiece, _Piece);

  function SPiece(color) {
    var _this;

    _classCallCheck(this, SPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SPiece).call(this, color));
    _this.height = 2;
    _this.width = 3;
    _this.x = -1;
    _this.y = -1;
    _this.initialState = [[0, -1], [0, 0], [-1, 0], [-1, 1]];
    _this.numStates = 2;
    _this.rotationMap = {
      0: [[0, -2], [1, -1], [0, 0], [1, 1]],
      1: [[0, 2], [-1, 1], [0, 0], [-1, -1]]
    };
    return _this;
  }

  return SPiece;
}(_pieces__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/Pieces/Classic/t-piece.js":
/*!**************************************!*\
  !*** ./js/Pieces/Classic/t-piece.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TPiece; });
/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pieces */ "./js/Pieces/pieces.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var TPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(TPiece, _Piece);

  function TPiece(color) {
    var _this;

    _classCallCheck(this, TPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TPiece).call(this, color));
    _this.height = 2;
    _this.width = 3;
    _this.x = -1;
    _this.y = -1;
    _this.initialState = [[-1, -1], [-1, 0], [-1, 1], [0, 0]];
    _this.numStates = 4;
    _this.rotationMap = {
      0: [[-1, -1], [0, 0], [1, 1], [1, -1]],
      1: [[-1, 1], [0, 0], [1, -1], [-1, -1]],
      2: [[1, 1], [0, 0], [-1, -1], [-1, 1]],
      3: [[1, -1], [0, 0], [-1, 1], [1, 1]]
    };
    return _this;
  }

  return TPiece;
}(_pieces__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/Pieces/Classic/z-piece.js":
/*!**************************************!*\
  !*** ./js/Pieces/Classic/z-piece.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZPiece; });
/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pieces */ "./js/Pieces/pieces.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ZPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(ZPiece, _Piece);

  function ZPiece(color) {
    var _this;

    _classCallCheck(this, ZPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ZPiece).call(this, color));
    _this.height = 2;
    _this.width = 3;
    _this.x = -1;
    _this.y = -1;
    _this.initialState = [[0, 1], [0, 0], [-1, 0], [-1, -1]];
    _this.numStates = 2;
    _this.rotationMap = {
      0: [[0, 2], [1, 1], [0, 0], [1, -1]],
      1: [[0, -2], [-1, -1], [0, 0], [-1, 1]]
    };
    return _this;
  }

  return ZPiece;
}(_pieces__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/Pieces/Pentris/pb-piece.js":
/*!***************************************!*\
  !*** ./js/Pieces/Pentris/pb-piece.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PBPiece; });
/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pieces */ "./js/Pieces/pieces.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PBPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(PBPiece, _Piece);

  function PBPiece(color) {
    var _this;

    _classCallCheck(this, PBPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PBPiece).call(this, color));
    _this.height = 2;
    _this.width = 3;
    _this.x = -1;
    _this.y = -1;
    _this.initialState = [[-1, 0], [-1, -1], [0, 0], [0, -1], [0, 1]];
    _this.numStates = 4;
    _this.rotationMap = {
      3: [[-1, -1], [0, -2], [0, 0], [1, -1], [-1, 1]],
      0: [[0, 1], [-1, 0], [1, 0], [0, -1], [2, 1]],
      1: [[0, 0], [-1, 1], [-1, -1], [-2, 0], [0, -2]],
      2: [[1, 0], [2, 1], [0, 1], [1, 2], [-1, 0]]
    };
    return _this;
  }

  return PBPiece;
}(_pieces__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/Pieces/Pentris/pd-piece.js":
/*!***************************************!*\
  !*** ./js/Pieces/Pentris/pd-piece.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PDPiece; });
/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pieces */ "./js/Pieces/pieces.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PDPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(PDPiece, _Piece);

  function PDPiece(color) {
    var _this;

    _classCallCheck(this, PDPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PDPiece).call(this, color));
    _this.height = 2;
    _this.width = 3;
    _this.x = -1;
    _this.y = -1;
    _this.initialState = [[-1, 0], [-1, -1], [0, 0], [0, -1], [-1, 1]];
    _this.numStates = 4;
    _this.rotationMap = {
      3: [[-1, -1], [0, -2], [0, 0], [1, -1], [-2, 0]],
      0: [[0, 1], [-1, 0], [1, 0], [0, -1], [1, 2]],
      1: [[0, 0], [-1, 1], [-1, -1], [-2, 0], [1, -1]],
      2: [[1, 0], [2, 1], [0, 1], [1, 2], [0, -1]]
    };
    return _this;
  }

  return PDPiece;
}(_pieces__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/Pieces/Pentris/pi-piece.js":
/*!***************************************!*\
  !*** ./js/Pieces/Pentris/pi-piece.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PIPiece; });
/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pieces */ "./js/Pieces/pieces.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PIPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(PIPiece, _Piece);

  function PIPiece(color) {
    var _this;

    _classCallCheck(this, PIPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PIPiece).call(this, color));
    _this.height = 1;
    _this.width = 5;
    _this.x = -2;
    _this.y = 0;
    _this.initialState = [[0, -2], [0, -1], [0, 0], [0, 1], [0, 2]];
    _this.numStates = 2;
    _this.rotationMap = {
      0: [[2, -2], [1, -1], [0, 0], [-1, 1], [-2, 2]],
      1: [[-2, 2], [-1, 1], [0, 0], [1, -1], [2, -2]]
    };
    return _this;
  }

  return PIPiece;
}(_pieces__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/Pieces/Pentris/pj-piece.js":
/*!***************************************!*\
  !*** ./js/Pieces/Pentris/pj-piece.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PJPiece; });
/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pieces */ "./js/Pieces/pieces.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PJPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(PJPiece, _Piece);

  function PJPiece(color) {
    var _this;

    _classCallCheck(this, PJPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PJPiece).call(this, color));
    _this.height = 2;
    _this.width = 4;
    _this.x = -2;
    _this.y = -1;
    _this.initialState = [[0, -2], [0, -1], [0, 0], [0, 1], [-1, 0]];
    _this.numStates = 4;
    _this.rotationMap = {
      0: [[0, -2], [1, -1], [2, 0], [3, 1], [1, 1]],
      1: [[-3, 1], [-2, 0], [-1, -1], [0, -2], [0, 0]],
      2: [[2, 2], [1, 1], [0, 0], [-1, -1], [1, -1]],
      3: [[1, -1], [0, 0], [-1, 1], [-2, 2], [-2, 0]]
    };
    return _this;
  }

  return PJPiece;
}(_pieces__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/Pieces/Pentris/pl-piece.js":
/*!***************************************!*\
  !*** ./js/Pieces/Pentris/pl-piece.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PLPiece; });
/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pieces */ "./js/Pieces/pieces.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PLPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(PLPiece, _Piece);

  function PLPiece(color) {
    var _this;

    _classCallCheck(this, PLPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PLPiece).call(this, color));
    _this.height = 2;
    _this.width = 4;
    _this.x = -2;
    _this.y = -1;
    _this.initialState = [[0, -2], [0, -1], [0, 0], [0, 1], [-1, -1]];
    _this.numStates = 4;
    _this.rotationMap = {
      0: [[0, -2], [1, -1], [2, 0], [3, 1], [0, 0]],
      1: [[-3, 1], [-2, 0], [-1, -1], [0, -2], [-1, 1]],
      2: [[2, 2], [1, 1], [0, 0], [-1, -1], [2, 0]],
      3: [[1, -1], [0, 0], [-1, 1], [-2, 2], [-1, -1]]
    };
    return _this;
  }

  return PLPiece;
}(_pieces__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/Pieces/Pentris/ps-piece.js":
/*!***************************************!*\
  !*** ./js/Pieces/Pentris/ps-piece.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PSPiece; });
/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pieces */ "./js/Pieces/pieces.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PSPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(PSPiece, _Piece);

  function PSPiece(color) {
    var _this;

    _classCallCheck(this, PSPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PSPiece).call(this, color));
    _this.height = 2;
    _this.width = 4;
    _this.x = -2;
    _this.y = -1;
    _this.initialState = [[0, -2], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
    _this.numStates = 4;
    _this.rotationMap = {
      0: [[0, -2], [1, -1], [0, 0], [1, 1], [2, 2]],
      1: [[-3, 1], [-2, 0], [-1, 1], [0, 0], [1, -1]],
      2: [[2, 2], [1, 1], [2, 0], [1, -1], [0, -2]],
      3: [[1, -1], [0, 0], [-1, -1], [-2, 0], [-3, 1]]
    };
    return _this;
  }

  return PSPiece;
}(_pieces__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/Pieces/Pentris/pw-piece.js":
/*!***************************************!*\
  !*** ./js/Pieces/Pentris/pw-piece.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PWPiece; });
/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pieces */ "./js/Pieces/pieces.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PWPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(PWPiece, _Piece);

  function PWPiece(color) {
    var _this;

    _classCallCheck(this, PWPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PWPiece).call(this, color));
    _this.height = 3;
    _this.width = 3;
    _this.x = -1;
    _this.y = -2;
    _this.initialState = [[-2, -1], [-1, -1], [-1, 0], [0, 0], [0, 1]];
    _this.numStates = 4;
    _this.rotationMap = {
      0: [[-2, 0], [-1, -1], [0, 0], [1, -1], [2, 0]],
      1: [[0, 2], [-1, 1], [0, 0], [-1, -1], [0, -2]],
      2: [[2, 0], [1, 1], [0, 0], [-1, 1], [-2, 0]],
      3: [[0, -2], [1, -1], [0, 0], [1, 1], [0, 2]]
    };
    return _this;
  }

  return PWPiece;
}(_pieces__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/Pieces/Pentris/pz-piece.js":
/*!***************************************!*\
  !*** ./js/Pieces/Pentris/pz-piece.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PZPiece; });
/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pieces */ "./js/Pieces/pieces.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PZPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(PZPiece, _Piece);

  function PZPiece(color) {
    var _this;

    _classCallCheck(this, PZPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PZPiece).call(this, color));
    _this.height = 2;
    _this.width = 4;
    _this.x = -2;
    _this.y = -1;
    _this.initialState = [[-1, -2], [-1, -1], [-1, 0], [0, 0], [0, 1]];
    _this.numStates = 4;
    _this.rotationMap = {
      0: [[-1, -1], [0, 0], [1, 1], [2, 0], [3, 1]],
      1: [[-2, 2], [-1, 1], [0, 0], [-1, -1], [0, -2]],
      2: [[3, 1], [2, 0], [1, -1], [0, 0], [-1, -1]],
      3: [[0, -2], [-1, -1], [-2, 0], [-1, 1], [-2, 2]]
    };
    return _this;
  }

  return PZPiece;
}(_pieces__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/Pieces/piece-options.js":
/*!************************************!*\
  !*** ./js/Pieces/piece-options.js ***!
  \************************************/
/*! exports provided: pieces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieces", function() { return pieces; });
/* harmony import */ var _Classic_o_piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classic/o-piece */ "./js/Pieces/Classic/o-piece.js");
/* harmony import */ var _Classic_l_piece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Classic/l-piece */ "./js/Pieces/Classic/l-piece.js");
/* harmony import */ var _Classic_j_piece__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Classic/j-piece */ "./js/Pieces/Classic/j-piece.js");
/* harmony import */ var _Classic_i_piece__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Classic/i-piece */ "./js/Pieces/Classic/i-piece.js");
/* harmony import */ var _Classic_s_piece__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Classic/s-piece */ "./js/Pieces/Classic/s-piece.js");
/* harmony import */ var _Classic_z_piece__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Classic/z-piece */ "./js/Pieces/Classic/z-piece.js");
/* harmony import */ var _Classic_t_piece__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Classic/t-piece */ "./js/Pieces/Classic/t-piece.js");
/* harmony import */ var _Pentris_pj_piece__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pentris/pj-piece */ "./js/Pieces/Pentris/pj-piece.js");
/* harmony import */ var _Pentris_pl_piece__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pentris/pl-piece */ "./js/Pieces/Pentris/pl-piece.js");
/* harmony import */ var _Pentris_pw_piece__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pentris/pw-piece */ "./js/Pieces/Pentris/pw-piece.js");
/* harmony import */ var _Pentris_pi_piece__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Pentris/pi-piece */ "./js/Pieces/Pentris/pi-piece.js");
/* harmony import */ var _Pentris_pb_piece__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Pentris/pb-piece */ "./js/Pieces/Pentris/pb-piece.js");
/* harmony import */ var _Pentris_pd_piece__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Pentris/pd-piece */ "./js/Pieces/Pentris/pd-piece.js");
/* harmony import */ var _Pentris_ps_piece__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Pentris/ps-piece */ "./js/Pieces/Pentris/ps-piece.js");
/* harmony import */ var _Pentris_pz_piece__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Pentris/pz-piece */ "./js/Pieces/Pentris/pz-piece.js");














 // Classic Pieces

var iPiece = new _Classic_i_piece__WEBPACK_IMPORTED_MODULE_3__["default"]("#FF0000");
var tPiece = new _Classic_t_piece__WEBPACK_IMPORTED_MODULE_6__["default"]("#FF7F00");
var oPiece = new _Classic_o_piece__WEBPACK_IMPORTED_MODULE_0__["default"]("#FFFF00");
var lPiece = new _Classic_l_piece__WEBPACK_IMPORTED_MODULE_1__["default"]("#00FF00");
var jPiece = new _Classic_j_piece__WEBPACK_IMPORTED_MODULE_2__["default"]("#0000FF");
var sPiece = new _Classic_s_piece__WEBPACK_IMPORTED_MODULE_4__["default"]("#4b0082");
var zPiece = new _Classic_z_piece__WEBPACK_IMPORTED_MODULE_5__["default"]("#EE82EE"); //Pentris Pieces

var piPiece = new _Pentris_pi_piece__WEBPACK_IMPORTED_MODULE_10__["default"]("#FF0000");
var pbPiece = new _Pentris_pb_piece__WEBPACK_IMPORTED_MODULE_11__["default"]("#FF7F00");
var pdPiece = new _Pentris_pd_piece__WEBPACK_IMPORTED_MODULE_12__["default"]("#FFFF00");
var pjPiece = new _Pentris_pj_piece__WEBPACK_IMPORTED_MODULE_7__["default"]("#00FF00");
var plPiece = new _Pentris_pl_piece__WEBPACK_IMPORTED_MODULE_8__["default"]("#0000FF");
var psPiece = new _Pentris_ps_piece__WEBPACK_IMPORTED_MODULE_13__["default"]("#4b0082");
var pzPiece = new _Pentris_pz_piece__WEBPACK_IMPORTED_MODULE_14__["default"]("#EE82EE");
var pwPiece = new _Pentris_pw_piece__WEBPACK_IMPORTED_MODULE_9__["default"]("#9400D3");
var pieces = {
  classic: [iPiece, tPiece, oPiece, lPiece, jPiece, sPiece, zPiece],
  pentris: [piPiece, pbPiece, pdPiece, pjPiece, plPiece, psPiece, pzPiece, pwPiece],
  combo: [iPiece, tPiece, oPiece, pjPiece, plPiece, psPiece, pzPiece, pwPiece]
};

/***/ }),

/***/ "./js/Pieces/pieces.js":
/*!*****************************!*\
  !*** ./js/Pieces/pieces.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Piece; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var directions = {
  right: {
    idx: 1,
    shift: 1
  },
  left: {
    idx: 1,
    shift: -1
  },
  down: {
    idx: 0,
    shift: 1
  },
  startingPos: {
    idx: 1,
    shift: 5
  }
};

var Piece =
/*#__PURE__*/
function () {
  function Piece(color) {
    _classCallCheck(this, Piece);

    this.color = color;
  }

  _createClass(Piece, [{
    key: "move",
    value: function move(direction, currPos) {
      return currPos.map(function (block) {
        var newBlock = block.slice();
        var _directions$direction = directions[direction],
            idx = _directions$direction.idx,
            shift = _directions$direction.shift;
        newBlock[idx] += shift;
        return newBlock;
      });
    } //   rotate(currPos, state, shift) {
    //     // const { shift } = this.directionsMap(direction);
    //     // if (direction === "clockwise") {
    //     //   state++;
    //     // }
    //     state %= this.numStates;
    //     // let pieceState = (state + 1) % this.numStates;
    //     let rotationMap = this.rotationMap[state];
    //     return currPos.map((block, idx) => {
    //       let newBlock = block.slice();
    //       newBlock[0] += shift * rotationMap[idx][0];
    //       newBlock[1] += shift * rotationMap[idx][1];
    //       return newBlock;
    //     });
    //   }

  }]);

  return Piece;
}();



/***/ }),

/***/ "./js/View/canvas-templates.js":
/*!*************************************!*\
  !*** ./js/View/canvas-templates.js ***!
  \*************************************/
/*! exports provided: drawGrid, drawGameOver, drawGamePreview, clearRowAnimation, previewPiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawGrid", function() { return drawGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawGameOver", function() { return drawGameOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawGamePreview", function() { return drawGamePreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearRowAnimation", function() { return clearRowAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewPiece", function() { return previewPiece; });
var drawGrid = function drawGrid(grid) {
  var canvas = document.getElementById("tetris");
  var c = canvas.getContext("2d");
  var sq = canvas.width / 10;
  canvas.width = sq * 10;
  canvas.height = sq * 20;
  c.clearRect(0, 0, sq * 10, sq * 20);

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      c.fillStyle = grid[i][j] || "black";
      c.fillRect(j * sq, (i - 1) * sq, sq, sq);
      c.strokeStyle = "black";
      c.strokeRect(j * sq, (i - 1) * sq, sq, sq);
    }
  }
}; // CHANGE COLORS for an index position to key into colors array, and -1 for blank

var drawGameOver = function drawGameOver(grid) {
  var canvas = document.getElementById("tetris");
  var c = canvas.getContext("2d");
  var sq = canvas.width / 25;
  canvas.width = sq * 25;
  canvas.height = sq * 50;
  c.clearRect(0, 0, sq * 25, sq * 50);
  c.fillStyle = "black";
  c.fillRect(0, 0, sq * 25, sq * 50);

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      c.fillStyle = grid[i][j] || "black";
      c.fillRect((j + 3) * sq, (i + 16) * sq, sq, sq); // c.strokeStyle = "black";
      // c.strokeRect((j + 3) * sq, (i + 17) * sq, sq, sq);
    }
  }
};
var drawGamePreview = function drawGamePreview(pieces) {
  var canvas = document.getElementById("tetris");
  var c = canvas.getContext("2d");
  var sq = canvas.width / 10;
  canvas.width = sq * 10;
  canvas.height = sq * 20;
  c.fillStyle = "black";
  c.fillRect(0, 0, 10 * sq, 20 * sq);
  pieces.forEach(function (piece, idx) {
    piece.initialState.forEach(function (block) {
      c.fillStyle = piece.color;
      c.fillRect(sq * (block[1] - piece.x + (10 - piece.width) / 2), sq * (block[0] - piece.y + (19 / pieces.length * (idx + 1) - piece.height)), sq, sq);
      c.strokeStyle = "black";
      c.strokeRect(sq * (block[1] - piece.x + (10 - piece.width) / 2), sq * (block[0] - piece.y + (19 / pieces.length * (idx + 1) - piece.height)), sq, sq);
    });
  });
};
var clearRowAnimation = function clearRowAnimation(rowNums) {
  var canvas = document.getElementById("tetris");
  var c = canvas.getContext("2d");
  var sq = canvas.width / 10;
  canvas.width = sq * 10;
  canvas.height = sq * 20;

  for (var i = 0; i < rowNums.length; i++) {
    c.fillStyle = "#ffffff";
    c.fillRect(0, (rowNums[i] - 1) * sq, sq * 10, sq);
  }
};
var previewPiece = function previewPiece(piece, eleId) {
  var canvas = document.getElementById(eleId);
  var c = canvas.getContext("2d");
  var sq = canvas.width / 6;
  canvas.width = sq * 6;
  canvas.height = sq * 4;
  c.fillStyle = "black";
  c.fillRect(0, 0, 6 * sq, 4 * sq);
  var pieceState = piece.initialState;

  for (var i = 0; i < pieceState.length; i++) {
    c.fillStyle = piece.color;
    c.fillRect(sq * (pieceState[i][1] - piece.x + (6 - piece.width) / 2), sq * (pieceState[i][0] - piece.y + (4 - piece.height) / 2), sq, sq);
    c.strokeStyle = "black";
    c.strokeRect(sq * (pieceState[i][1] - piece.x + (6 - piece.width) / 2), sq * (pieceState[i][0] - piece.y + (4 - piece.height) / 2), sq, sq);
  }
};

/***/ }),

/***/ "./js/View/gameover.js":
/*!*****************************!*\
  !*** ./js/View/gameover.js ***!
  \*****************************/
/*! exports provided: gameoverGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameoverGrid", function() { return gameoverGrid; });
var gameoverGrid = [[0, "#FF0000", "#FF0000", "#FF0000", 0, 0, "#FF7F00", "#FF7F00", 0, 0, "#FFFF00", "#FFFF00", 0, "#FFFF00", "#FFFF00", 0, "#EE82EE", "#EE82EE", "#EE82EE"], ["#FF0000", 0, 0, 0, 0, "#FF7F00", 0, 0, "#FF7F00", 0, "#FFFF00", 0, "#FFFF00", 0, "#FFFF00", 0, "#EE82EE", 0, 0], ["#FF0000", 0, "#FF0000", "#FF0000", 0, "#FF7F00", "#FF7F00", "#FF7F00", "#FF7F00", 0, "#FFFF00", 0, "#FFFF00", 0, "#FFFF00", 0, "#EE82EE", "#EE82EE", 0], ["#FF0000", 0, 0, "#FF0000", 0, "#FF7F00", 0, 0, "#FF7F00", 0, "#FFFF00", 0, 0, 0, "#FFFF00", 0, "#EE82EE", 0, 0], ["#FF0000", "#FF0000", "#FF0000", "#FF0000", 0, "#FF7F00", 0, 0, "#FF7F00", 0, "#FFFF00", 0, 0, 0, "#FFFF00", 0, "#EE82EE", "#EE82EE", "#EE82EE"], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, "#00FF00", "#00FF00", 0, 0, "#0000FF", 0, "#0000FF", 0, "#EE82EE", "#EE82EE", "#EE82EE", 0, "#4B0082", "#4B0082", "#4B0082", "#4B0082", 0, "#FFFFFF"], ["#00FF00", 0, 0, "#00FF00", 0, "#0000FF", 0, "#0000FF", 0, "#EE82EE", 0, 0, 0, "#4B0082", 0, 0, "#4B0082", 0, "#FFFFFF"], ["#00FF00", 0, 0, "#00FF00", 0, "#0000FF", 0, "#0000FF", 0, "#EE82EE", "#EE82EE", 0, 0, "#4B0082", "#4B0082", "#4B0082", "#4B0082", 0, "#FFFFFF"], ["#00FF00", 0, 0, "#00FF00", 0, "#0000FF", 0, "#0000FF", 0, "#EE82EE", 0, 0, 0, "#4B0082", 0, "#4B0082", 0, 0, 0], [0, "#00FF00", "#00FF00", 0, 0, 0, "#0000FF", 0, 0, "#EE82EE", "#EE82EE", "#EE82EE", 0, "#4B0082", 0, 0, "#4B0082", 0, "#FFFFFF"]];

/***/ }),

/***/ "./tetris.js":
/*!*******************!*\
  !*** ./tetris.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_Game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Game/game */ "./js/Game/game.js");
/* harmony import */ var _js_View_canvas_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/View/canvas-templates */ "./js/View/canvas-templates.js");
/* harmony import */ var _js_Pieces_piece_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Pieces/piece-options */ "./js/Pieces/piece-options.js");
/* harmony import */ var _js_View_gameover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/View/gameover */ "./js/View/gameover.js");




var colors = [// "#E8B8AB",
// "#B9CBFF",
// "#A0E8B5",
// "#14CFBD",
// "#D68E05",
// "#FFF19C",
// "#D6AFFF",
//rainbow in order
"#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4b0082 ", "#9400D3"];
document.addEventListener("DOMContentLoaded", function () {
  var play = document.getElementById("play");
  var classic = document.getElementById("classic");
  var pentris = document.getElementById("pentris");
  var combo = document.getElementById("combo");
  var game = new _js_Game_game__WEBPACK_IMPORTED_MODULE_0__["default"](_js_Pieces_piece_options__WEBPACK_IMPORTED_MODULE_2__["pieces"].classic, 1, colors);

  var start = function start(e) {
    var play = document.getElementById("play");

    if (play.innerText === "Play") {
      var selected = document.getElementsByClassName("selected")[0];
      game = new _js_Game_game__WEBPACK_IMPORTED_MODULE_0__["default"](_js_Pieces_piece_options__WEBPACK_IMPORTED_MODULE_2__["pieces"][selected.id], 1, colors);
      game.play();
      play.innerText = "Pause";
    } else {
      game.pause();
    }
  };

  var chooseMode = function chooseMode(e) {
    if (play.innerText === "Play") {
      var selected = document.getElementsByClassName("selected")[0];
      selected.className = "game-selection-button";
      e.target.className = "selected";
      Object(_js_View_canvas_templates__WEBPACK_IMPORTED_MODULE_1__["previewPiece"])(_js_Pieces_piece_options__WEBPACK_IMPORTED_MODULE_2__["pieces"][e.target.id][0], "saved-piece");
      Object(_js_View_canvas_templates__WEBPACK_IMPORTED_MODULE_1__["previewPiece"])(_js_Pieces_piece_options__WEBPACK_IMPORTED_MODULE_2__["pieces"][e.target.id][4], "next-piece");
      Object(_js_View_canvas_templates__WEBPACK_IMPORTED_MODULE_1__["drawGamePreview"])(_js_Pieces_piece_options__WEBPACK_IMPORTED_MODULE_2__["pieces"][e.target.id]);
    }
  };

  play.addEventListener("click", start);
  classic.addEventListener("click", chooseMode);
  pentris.addEventListener("click", chooseMode);
  combo.addEventListener("click", chooseMode);
  Object(_js_View_canvas_templates__WEBPACK_IMPORTED_MODULE_1__["drawGamePreview"])(_js_Pieces_piece_options__WEBPACK_IMPORTED_MODULE_2__["pieces"].classic);
  Object(_js_View_canvas_templates__WEBPACK_IMPORTED_MODULE_1__["previewPiece"])(_js_Pieces_piece_options__WEBPACK_IMPORTED_MODULE_2__["pieces"].classic[0], "saved-piece");
  Object(_js_View_canvas_templates__WEBPACK_IMPORTED_MODULE_1__["previewPiece"])(_js_Pieces_piece_options__WEBPACK_IMPORTED_MODULE_2__["pieces"].classic[4], "next-piece");
  Object(_js_View_canvas_templates__WEBPACK_IMPORTED_MODULE_1__["drawGameOver"])(_js_View_gameover__WEBPACK_IMPORTED_MODULE_3__["gameoverGrid"]);
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map