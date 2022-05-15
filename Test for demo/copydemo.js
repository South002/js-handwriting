let orig = { a: { a: 2 }, b: 2 }
let orig1 = { a: { a: 2 }, b: 2 }
let obj = Object.assign({}, orig);//obj是浅拷贝的对象
obj.a.a = 1
console.log(obj, 'obj', orig, 'orig')
let obj1 = JSON.parse(JSON.stringify(orig1))
obj1.a.a = 3
console.log(obj1, 'obj', orig1, 'orig')
