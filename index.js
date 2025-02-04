function calculatelove(){
    const name1=document.getElementById("name1").value.trim();
    const name2=document.getElementById("name2").value.trim();
   if(name1=="" || name2==""){
    alert("please enter both name");
   }
   else{
    
    const lovepercentage=Math.floor(Math.random()*101);
    const result=document.getElementById("result");
    result.innerHTML=name1 + " and "+ name2 +" LOVE PERCENTAGE: "+lovepercentage;
    if(lovepercentage <30){
        result.innerHTML+=" not a great match. keeping looking!";
    }
    else if(lovepercentage >=30 && lovepercentage <70){
        result.innerHTML+=" there is potential. give it a try!";
    }
    else{
        result.innerHTML+=" your love is in air!";
    }
   }
}