function A(name) {
  this.kiki=name
}
let a = new A('jim')
console.log(a)
console.log(a.__proto__.__proto__)
console.log(A.prototype.prototype)