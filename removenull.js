let arr=[1,,2,3,4,undefined,5,,6]
let newarr=[]
for(let i=0;i<arr.length;i++)
{
    if(arr[i]==''||arr[i]==undefined)
    {
      continue;
    }
    newarr.push(arr[i]);
}
console.log(newarr)
