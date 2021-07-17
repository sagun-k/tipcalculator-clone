document.getElementById('five').addEventListener('click', display);
document.getElementById('ten').addEventListener('click',display);
document.getElementById('fifteen').addEventListener('click',display);
document.getElementById('twentyfive').addEventListener('click',display);
document.getElementById('fifty').addEventListener('click',display);
document.getElementById('custom').addEventListener('keyup',display);



     
       function display(event){
           let bill=document.getElementById('bill').value;
           let person=document.getElementById('person').value;
           let custom=document.getElementById('custom').value;
           if(event.target.id === 'five'){
              let tip=0.05;
              let result=tip*parseFloat(bill);
              let totaltip=parseFloat(person)*parseFloat(result);
               document.getElementById('head').innerHTML=  "$"+result.toFixed(2);
               document.getElementById('total').innerHTML= "$"+totaltip.toFixed(2);
               
           }
           else if(event.target.id === 'ten'){
              let tip=0.1;
              let result=tip*parseFloat(bill);
              let totaltip=parseFloat(person)*parseFloat(result);
               document.getElementById('head').innerHTML= "$"+result.toFixed(2);
               document.getElementById('total').innerHTML=  "$"+totaltip.toFixed(2);
           }
           else if(event.target.id === "fifteen"){
              let tip=0.15;
              let result=tip*parseFloat(bill);
              let totaltip=parseFloat(person)*parseFloat(result);
               document.getElementById('head').innerHTML= "$"+result.toFixed(2);
               document.getElementById('total').innerHTML= "$"+totaltip.toFixed(2);
           }
           else if(event.target.id === "twentyfive"){
              let tip=0.25;
              let result=tip*parseFloat(bill);
              let totaltip=parseFloat(person)*parseFloat(result);
               document.getElementById('head').innerHTML="$"+result.toFixed(2);
               document.getElementById('total').innerHTML= "$"+totaltip.toFixed(2);
           }
           else if(event.target.id === "fifty"){
              let tip=0.5;
              let result=tip*parseFloat(bill);
              let totaltip=parseFloat(person)*parseFloat(result);
               document.getElementById('head').innerHTML="$"+result.toFixed(2);
               document.getElementById('total').innerHTML="$"+totaltip.toFixed(2);
           }
           else{
                 let tip=parseFloat(custom)/100;
                 let result=tip*parseFloat(bill);
              let totaltip=parseFloat(person)*parseFloat(result);
               document.getElementById('head').innerHTML= "$"+result.toFixed(2);
               document.getElementById('total').innerHTML="$"+totaltip.toFixed(2);
           }
        
       }
       
       function fun(){
           document.getElementById('re').reset();
       }
       document.getElementById('reeset').addEventListener('click',redisplay)
       function redisplay(event){
           if(event.target.id === 'reeset'){
              document.getElementById('head').innerHTML="$0.00";
               document.getElementById('total').innerHTML="$0.00";
           }
       }
          
       