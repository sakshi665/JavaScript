const arr=new Array(20)

for(let i=0;i<20;i++)
{
    arr[i]="*";
}
console.log(arr);

//shortcut fill method
//new is optional array 
//let arr1=[]
let arr1=Array(10).fill('*')
console.log(arr1)

