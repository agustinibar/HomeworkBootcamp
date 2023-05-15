'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro                                                    
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length  < 2)return array; 
  let random = Math.floor(Math.random() * array.length);
  let pivot = array.splice(random, 1)[0];
  let left = [];
  let right = [];

  for(let i=0; i<array.length; i++){
    if(array[i] < pivot){
      left.push(array[i]);
    }else {
      right.push(array[i]); 
  }
  };

  left = quickSort(left); 
  right = quickSort(right);
  
  array = left.concat([pivot]).concat(right);

  return array
};

let array = [9,8,7,2,6,4];
console.log(quickSort(array))

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length < 2) return array;

  const mitad = Math.floor(array.length / 2);
  let left = array.slice(0, mitad);
  let right = array.slice(mitad);

  array = [];

  left = mergeSort(left);
  right= mergeSort(right);

  while(left.length && right.length){
    if(left[0]<right[0]){
      array.push(left.shift())
    } else {
      array.push(right.shift())
    }
  };
  
  array = array.concat(left, right);
  return array;
  //okey probemos ahora
};
let arrayMerge = [9,5,1,3,7,6,2];
console.log(mergeSort(arrayMerge))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
