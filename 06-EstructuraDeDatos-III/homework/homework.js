'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
   this._lenght = 0;
};

var tree = new BinarySearchTree()
BinarySearchTree.prototype.size = function(){
   //let total = this._lenght
   //return total
   if(this.left === null && this.right === null)return 1;
   if(this.left !== null && this.right === null)return 1 + this.left.size();
   if(this.left === null && this.right !== null)return 1 + this.right.size();
   if(this.left !== null && this.right !== null)return 1 + this.left.size() + this.right.size()
};
BinarySearchTree.prototype.insert = function (value){
   if (value < this.value){
      if (this.left){
         this.left.insert(value);
      }else this.left = new BinarySearchTree (value);
      this._lenght++
   }
   else {
      if(this.right){
         this.right.insert(value);
      }else {
         this.right = new BinarySearchTree (value);
      this._lenght++;
   }
   }
};

BinarySearchTree.prototype.depthFirstForEach = function (cb,pedido){
   if (pedido === 'in-order' || pedido === undefined){
      if(this.left && this.left.depthFirstForEach(cb,pedido));
      cb(this.value);
      if(this.right && this.right.depthFirstForEach(cb,pedido));
   }; 
   if (pedido === 'pre-order'){
      cb(this.value);
      if(this.left && this.left.depthFirstForEach(cb,pedido));
      if(this.right && this.right.depthFirstForEach(cb,pedido));
   };
   if(pedido === 'post-order'){
      if(this.left && this.left.depthFirstForEach(cb,pedido));
      if(this.right && this.right.depthFirstForEach(cb,pedido));
      cb(this.value);
   };
};
BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue = []){
   if(this.left) {queue.push(this.left)}
   if(this.right) {queue.push(this.right)}
   cb(this.value)
   if(queue.length > 0){
    queue.shift().breadthFirstForEach(cb, queue)
   }
},
BinarySearchTree.prototype.contains = function (value){
   if(value === this.value){
      return true
   } 
   if(value < this.value){
      if(!this.left)return false
      return this.left.contains(value)
   }
   if (value > this.value){
      if(!this.right)return false
      return this.right.contains(value)
   }
   
};

console.log(tree.insert(2))
console.log(tree.insert(3))
console.log(tree.insert(7))
console.log(tree)

// No modifiquen nada debajo de esta linea
// --------------------------------


module.exports = {
   BinarySearchTree,
};
