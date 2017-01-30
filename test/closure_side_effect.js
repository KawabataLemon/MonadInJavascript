const expect = require('expect.js')

var counter = (()=>{
  let count = 1
  return ()=>{
    count++
    console.log(count)
   }
})()


counter()
counter()
counter()
counter()
