"use strict";

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// ES6+ код
class MyClass {
  constructor(name) {
    // Стрелочная функция
    _defineProperty(this, "farewell", () => {
      return "\u0414\u043E \u0441\u0432\u0438\u0434\u0430\u043D\u0438\u044F, ".concat(this.name, "!");
    });
    this.name = name;
  }

  // Метод класса
  greet() {
    return "\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(this.name, "!");
  }

  // Статический метод
  static welcome() {
    return 'Добро пожаловать!';
  }
}
