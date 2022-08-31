let obj={
    name:"sakshi",
    experience: 3,
    4: "abc"
}
console.log(obj)


//if key is string then two way to get the value
console.log(obj.name)
console.log(obj['name'])


//if key is number then one way to get the value
console.log(obj[4])


let arr=["sakshi",3,"abc"]
console.log(typeof arr)


let arr2=[{name:"ram"}]
console.log(arr2[0].name)
console.log(arr2[0][0])

//implementation by object

let obj2={
    0:{
        name:"sam"
    }
}
console.log(obj2[0].name)
//print all keys
console.log(Object.keys(obj))
console.log(Object.keys(obj2[0]))//arrays of nested

arr[1]
obj[1]

//js is only based on object......
//actual identity is nothing but object.....

