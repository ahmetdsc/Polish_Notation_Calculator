function myFunction() {
  let sentence= document.getElementById("entry").value;
  const words = sentence.split(" ");//I break the sentence into words with split function
  let numberStack=[];//I am using stack
  let a,b;
  
  //I put the words in the loop in order
  for(let i=0;i<words.length;i++){
    //I add the numbers to the stack
    if(parseInt(words[i])>0 || parseInt(words[i])<1 ){
      numberStack.push(parseInt(words[i]));
    }
    //addition, subtraction, multiplication etc.
    else if(words[i]=="+"){
      a=numberStack.pop();
      b=numberStack.pop();
      numberStack.push(b+a);
    }
    else if(words[i]=="-"){
      a=numberStack.pop();
      b=numberStack.pop();
      numberStack.push(b-a);
    }
    else if(words[i]=="*"){
      a=numberStack.pop();
      b=numberStack.pop();
      numberStack.push(b*a);
    }
    else if(words[i]=="/"){
      a=numberStack.pop();
      b=numberStack.pop();
      numberStack.push(b/a);
    }
    else if(words[i]=="^"){
      a=numberStack.pop();
      b=numberStack.pop();
      numberStack.push(Math.pow(b,a));
    }
    //Undefined character detection
    else{
      alert("You entered an unidentified character: "+words[i]);
    }
  }
  //Print Results
  if(numberStack.length==1){
    document.getElementById("equals").innerHTML ="= "+numberStack[0];
  }
  else{
    alert("Could not be calculated!Check the input");
  }
}
