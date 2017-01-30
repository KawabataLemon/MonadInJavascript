var arr = [1,2,3,4,5,6]

var arrmapped = []
for (var i = 0; i < arr.length; i++) {
  let val = arr[i] * 2

  if (val%2 == 0) {
    arrmapped.push(val)
  }
}

let sum = 0
for (var j = 0; j < arrmapped.length; j++) {
  sum += arrmapped[j]
}

console.log(sum);


const arr2 = [1,2,3,4,5,6]

console.log(arr2.map(x=>x*2).filter(x=>x%2==0).reduce((x,y)=>x+y));
