//importacion del modulo desde impuesto.js
import Impuestos from './impuesto.js';
export default class Cliente {
  //Creacion de la funcion constructora
  constructor(nombre, impuesto) {
      this._nombre = nombre;
      this._impuesto = impuesto;


    }
    //Obtencion del getter
  get nombre() {
      return this._nombre;
    }
    //Obtencion del setter
  set nombre(new_name) {
      this._nombre = new_name;
    }
    //Calculo del impuesto, mediante la formula
  calcularImpuesto() {
    return (this._impuesto._monto_bruto_anual - this._impuesto._deducciones) * 0.21
  }
}
