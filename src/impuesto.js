export default class Impuestos {
  // Creacion de la funcion constructora
  constructor(monto_bruto_anual, deducciones) {
    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  }

  //Obtencion de getters y setters
  get monto_bruto_anual() {
    return this._monto_bruto_anual;
  }
  set monto_bruto_anual(monto_bruto) {
    this._monto_bruto_anual = monto_bruto;
  }
  get deducciones_del_impuesto() {
    return this._deducciones;
  }
  set deducciones_del_impuesto(deduccion_impuestos) {
    this._deducciones = deduccion_impuestos;
  }
}

