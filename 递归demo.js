let n = 3
let arr = [1,2,3]
let paths = []
let i=0
function getPaths(originArr = [], max = 0, inputArr = [], outputArr = []) {
  i++
  console.log(arguments[0], 'originArr', inputArr, 'inputArr', outputArr, 'outputArr',i)
  
  //     
  if (outputArr.length === max) {
    paths.push(outputArr.join(' '))
    return
  }
  if (originArr.length == max) {
    inputArr.push(originArr.shift())
    getPaths(originArr, max, inputArr, outputArr)
    return
  }
  if (originArr.length > 0) {
    let cur = originArr.shift()
    inputArr.push(cur)
    getPaths(originArr, max, inputArr, outputArr)
    inputArr.pop()
    originArr.unshift(cur)
  }
  if (inputArr.length > 0) {
    let cur = inputArr.pop()
    outputArr.push(cur)
    getPaths(originArr, max, inputArr, outputArr)
    inputArr.push(cur)
    outputArr.pop()
  }
}
getPaths(arr, n)
// paths.sort((l, r) => {
//   let p = 0
//   while (p < paths.length) {
//     if (l[p] < r[p]) {
//       return -1
//     }
//     else if (l[p] > r[p]) {
//       return 1
//     }
//     p++
//   }

// })
paths.forEach(i => { console.log(i) })