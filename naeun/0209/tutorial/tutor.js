document.write("<h3>문제 1 </h3>")
{
  let x=15;
  if(10<x<20){
    document.write(x);
  }
}
document.write("<h3>문제 2 </h3>")
{
  for(let x=0;x<10;x+=2){
    document.write(x+"<br>");
  }
}
document.write("<h3>문제 3 </h3>")
{
  for(let x=0;x<10;x+=2){
    document.write(x);
  }
}
document.write("<h3>문제 4 </h3>")
{
  for(let x=9;x>=0;x-=2){
    document.write(x+"<br>");
  }
}
document.write("<h3>문제 5 </h3>")
{
  let x=0;
  while(x<10){
    document.write(x+"<br>");
    x=x+2;
  }
}
document.write("<h3>문제 6 </h3>")
{
  let x=9;
  while(x>=0){
    document.write(x+"<br>");
    x-=2;
  }
}
document.write("<h3>문제 7 </h3>")
{
  let result=0;
  for(let x=0;x<10;x++){
    result=result+x;
  }
  document.write(result);
}
document.write("<h3>문제 8 </h3>")
{
  let result=0;
  for(let x=1;x<20;x++){
    if(x%2==0||x%3==0){
      continue;
    }
    result=result+x;
  }
  document.write(result);
}
document.write("<h3>문제 9 </h3>")
{
  let result=0;
  for(let x=1;x<20;x++){
    if(x%2==0||x%3==0){
      result=result+x;
    }  
  }
  document.write(result);
}
