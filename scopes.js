{
    let ab="abd"
    console.log(ab);
}
//it will show err because let is function level scope
//console.log(ab);


{
    var abe="sakshi gaye"
    console.log(abe)
}
console.log(abe)

//var block scope
// num is inside function scope
//let func scope
function abcd()
{
    let num=12345
    console.log(num)
}
abcd()
//first order function

const abc=function()
{
    console.log('abcdre')
}
console.log(abc);

//high order
// function highorder(abc2)
// {
//     console.log(abc2,adcd2)
// }

//argument
const singleArg=arg=>console.log(arg,"abc")
singleArg("sakshi")



const obj={
    name:"sakshi",
    arrowfn:()=>
    {
        console.log(this.name)
    }
}
