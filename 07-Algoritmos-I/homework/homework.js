'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array  = [1]; 

  for(let i = 2; i<=num; i++){
    while(num % i === 0){
      array.push(i);
      num /= i;
    }
  }
  return array
  
 
};                                                                                      

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:


  for(let i = 0; i<array.length; i++){ 
    for(let j = i+1; j<array.length; j++ ){ 
      if (array[i]>array[j]){ 
        var temp = array[j];
        array[j] = array[i];
        array[i] = temp
        
      } 
    }  
  }  return array

};



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
  for(let i = 1; i<array.length; i++){ 
    while(array[i] < array[i-1]  ){
      if(array[i]<array[i-1]){
        let temp = array[i];
        array[i] = array[i-1];
        array [i-1] = temp
        i--
      }
    }
  }  return array
};

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante  
  // Tu código:                                  
 
  for(let i = 0; i<array.length -1; i++){ // recorro el array dede cero hasta la anteultima posicion
    let minIndex = i; //declaro la primer iteracion como el numero mas chico
    for(let j = i+1; j<array.length; j++){//recorro el array desde la primer posicion hasta la ultima, aqui se forman los dos punteros. El que marca el minimo y el que compara. 
      if (array[minIndex] > array[j]){//si el puntero comparador, es mas chico que el ultimo elemento guardado 
        minIndex = j; // si el puntero comparador es mas chico, pisamos la variable minIndex con el nuevo valor mas chico encontrado
      }
    }
    if(i!==minIndex){//terminado el recorrido del puntero, el minIndex tiene el valor de la iteracion mas chica que encontro el puntero o la misma (porque no encontro uno mas chico), si no es la misma entonces: 
      let temp = array[i]; // alojamos la iteracion actual en una variable para no perder su valor, la iteracion actual va a ser la primera sin ordenar, la que esta apuntando el primer puntero 
      array[i] = array[minIndex]; //intercambiamos lo que hay en la posicion del puntero inicial con lo que el puntero comparativo encontro mas chico
      array[minIndex] = temp; //la variable minIndex ahora sera igual al puntero inicial, el que marca el primer elemento del array.
    };
}; return array

};
let arrayPrueba = [10,1,3,8]; 
console.log(arrayPrueba)
console.log(selectionSort(arrayPrueba))



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
