// Linshijian l00527475对所有人说说： 10: 06 AM
// #### 字母大小写全排列

// 给定一个字符串 `s` ，通过将字符串 `s` 中的每个字母转变大小写，我们可以获得一个新的字符串。
// 返回 * 所有可能得到的字符串集合 * 。以 ** 任意顺序 ** 返回输出。


// ** 示例 1：**

//   ```
// 输入：s = "a1b2"
// 输出：["a1b2", "a1B2", "A1b2", "A1B2"]
// ```

//   ** 示例 2:**

//     ```
// 输入: s = "3z4"
// 输出: ["3z4","3Z4"]
// ```


//     ** 提示:**

//       - `1 <= s.length <= 12`
//       - `s` 由小写英文字母、大写英文字母和数字组成

// 用递归
let res=[]
function arrange(str,index=0) {
  let i=index
  let arr=str.split('')
  // 遇到i是字母,转变大小写往下走
  if(index==arr.length) {
    res.push(str) 
    return
  }
  // 如果当前是数字,i直接递增
  if(!(/^[a-zA-Z]$/.test(arr[i]))) {
    i++
  }
  // 如果当前是字母,转变大小写之后往下走
  if (/^[a-z]$/.test(arr[i])) {
    arr[i]=arr[i].toUpperCase()
    i++
    arrange(arr.join(''),i)
  } else if (/^[A-Z]$/.test(arr[i])) {
    arr[i]=arr[i].toLowerCase()
    i++
    arrange(arr.join(''), i)
  }
  // 第二种情况,用原来的str,当前字母不转变大小写往下走
  arrange(str,i)
}
arrange('d123abc')
console.log(res)
