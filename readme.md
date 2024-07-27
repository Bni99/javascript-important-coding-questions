So types of loops in Javascript

for(let i=0;i<10;i++){
console.log(i)
}

For In loops

it helps to iterate over the objects keys mostly use it with objects only

const obj1 = {
'key1':'singapore',
'key2':'thailand'
}

for(let key in Obj1){
console.log(key)
console.log(obj1[key])
}

For of loops
majorly used with arrays

const arr = [1,2,3,4]

for(let i of arr){
console.log(i)
}
