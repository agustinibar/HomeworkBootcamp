'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo  valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;   
}
function Node(value) {
  this.value = value;
  this.next = null;                                                                   
}
var linkedList = new LinkedList();

LinkedList.prototype.add = function (value){
  let node = new Node(value);
  let current = this.head; 

  if(!current){
    this.head = node;
   return 
  }
  while (current.next !==null){
     current = current.next;
  } 
  current.next = node 
  //this._length ++;
  return 
};

LinkedList.prototype.remove = function(){
  let current = this.head;
  
  if (!this.head) {                  //si head no tiene otro nodo enlazado, retornas null es decir no podes elminar nada
    return null;
  }

  else if (current && !current.next){  //{current : {current.next : null}}
    let ultimo = current.value;         // guardamos el valor del utilmo nodo en una variable
    this.head = null;                   //current = null. eliminamos el ultimonodo {current : null}
    //this._length --;                    
    return ultimo                     //retornas el VALOR del nodo eliminado   
  }                                                                             //actual
  while (current.next.next !== null){        //while para recorrer listas      []=>[]=>[previous]=>[current]=>null        [next]=>null
    current = current.next; 
  }
  let ultimo = current.next.value;          // [next]=>null = ultimo
  current.next = null;                      // []=>[]=>[current]=>[next]=>null
  //this._length --;                           //
  return ultimo                               //retornas [next]=>null
};
LinkedList.prototype.search = function(arg){
  let current = this.head; 
  
  while (current){  // current !== null => entrar a analizar el current 
   if (typeof arg === 'function'){ //si es una funcion, analiza el parametro de la funcion para buscar coincidencia
    if (arg(current.value)){ // si el parametro de la funcion que me habias pasado como argumento es igual al valor del current, devuelveme ese valor
      return current.value
    }
    }else {
      if (current.value === arg){
        return current.value 
      }
    }
    current= current.next //salta al otro nodo si no se cumplen las condiciones
   }
  return null
};

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() { //creamos la hash table para guardar datos encriptados
  this.buckets = []; //es el array donde guardaremos las KEYS
  this.numBuckets = 35; //es la cantidad limite de posiciones que tiene nuestro Array (this.buckets)
}
                                // [[{key:value},{key:value},{key:value}[{key:value}][{key:value},{key:value}][{key:value},{key:value},{key:value}]]
var hash = new HashTable();

HashTable.prototype.hash = function (key){
  
  let hash = 0;
  for(var i = 0; i<key.length; i++){
    hash +=  key.charCodeAt(i); //
  } 
 return hash % this.numBuckets // retorna un numero que sera la posicion a guardar en buckets[]
};


HashTable.prototype.set = function(key, value){
  if (typeof key !== 'string') throw TypeError('Keys must be strings')
   
  let indice = this.hash(key); //recibimos el numero llamando al metodo hasKey que nos dara la posicion, esta posicion sera igual //
  if (!this.buckets[indice]){// corroboramos si la posicion esta vacia 
    this.buckets[indice] = {};//si no hay nada, creamos un objeto vacio dentro de esa posicion
  }
  let indiceEnBuckets = this.buckets[indice]
  indiceEnBuckets[key] = value
};
HashTable.prototype.get = function(key){
  let clave = this.hash(key);
  return this.buckets[clave][key]

};
HashTable.prototype.hasKey = function (key){
  let indice = this.hash(key);
  
  return !!this.buckets[indice][key] // cuando utilizamos el doble !! me retorna si o si un booleano. si el indicie (posicion) existe la key. retornara true o false.
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
