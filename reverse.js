let str="sakshi"
function rev(str){
    let strnew=""
for(let i=str.length-1;i>=0;i--)
{
    strnew+=str.charAt(i);
}
return strnew;
}
console.log(rev(str))