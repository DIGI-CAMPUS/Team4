function input(){
  let birthday = new Date(document.querySelector("input").value);
  let bM=birthday.getMonth()+1;
  let bD=birthday.getDate();

  let current= new Date();
  let cM=current.getMonth()+1;
  let cD=current.getDate();

  if(bM<=cM){
    if(bD<=cD){
      document.write(`${current.getFullYear()-birthday.getFullYear()}`);    
    }else{
      document.write(`${current.getFullYear()-birthday.getFullYear()}`-1);
    }
  }else{
    document.write(`${current.getFullYear()-birthday.getFullYear()}`-1);
  };
};


