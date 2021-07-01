"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  //Creacion de la funcion constructora
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    this._nombre = nombre;
    this._impuesto = impuesto;
  } //Obtencion del getter


  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    } //Obtencion del setter
    ,
    set: function set(new_name) {
      this._nombre = new_name;
    } //Calculo del impuesto, mediante la formula

  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return (this._impuesto._monto_bruto_anual - this._impuesto._deducciones) * 0.21;
    }
  }]);

  return Cliente;
}();

exports["default"] = Cliente;