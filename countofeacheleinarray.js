const arr=new Array(1,2,3,2,2)
let c=0
for(let i=0;i<arr.length;i++)
{
    c=0
    for(let j=i+1;j<arr.length;i++){
    if(arr[i]==arr[j])
    {
        c++
    }
    console.log(c)
    }
}