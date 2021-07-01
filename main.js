import Cliente from './src/cliente.js';
import Impuestos from './src/impuesto.js';

//Valores asignados al impuesto monto bruto anual y las deducciones (provenientes del modulo impuesto.js)
let impuestos = new Impuestos(400, 200)
  // Asignacion de la instancia impuestos al Cliente , para su respectivo calculo
let nombrecliente = new Cliente('Diego', impuestos)
  //Calculo del impuesto
console.log(nombrecliente.calcularImpuesto())
  // Aplicacion de getter
console.log(nombrecliente.nombre)
nombrecliente.nombre = ('Ernesto')
  //Aplicacion de setter
console.log(nombrecliente.nombre)
//Obtenciones de getters y settets (monto bruto anual y deducciones(valores asignados aleatoriamente)
let getbruto = new Impuestos(100000)
console.log(getbruto.monto_bruto_anual)
getbruto.monto_bruto_anual = (5000)
console.log(getbruto.monto_bruto_anual)
let getdeducciones = new Impuestos(9999, 200)
console.log(getdeducciones._deducciones)
getdeducciones._deducciones = (7000)
console.log(getdeducciones._deducciones)