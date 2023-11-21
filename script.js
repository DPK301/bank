 function register(){
    window.location='./register.html'
}
function login(){
    window.location='./login.html'
}
 function reg(){
    const details={
        user:reg_user.value,
        acn:reg_acn.value,
        psw:reg_psw.value
    }
  psw=reg_psw.value;
  if(reg_acn.value==''||reg_psw.value==''||reg_user.value==''){
    alert("Enter full details")
  }
  else{
    if(psw in localStorage){
        alert('Account number is already exist')
        document.getElementById("form1").reset();
      }
      else{
       localStorage.setItem(details.acn,JSON.stringify(details));
       window.location='./home.html';
       alert('Registration successfully');
      }
  }
 }

 function log(){
    acn=log_acn.value;
    psw=log_psw.value;

var acc=JSON.parse(localStorage.getItem(acn))
   if(logdetails.acn in localStorage){
       if(logdetails.psw==acc.psw){
        window.location='./home.html';
        alert("Login successful");
      
       }
       else{
        alert("Incorrect passward");
        document.getElementById("form2").reset();
       }
   }
   else{
          alert("Invalid account number");
          document.getElementById("form2").reset();
   }    

 }

 
 function dep(){
  
    let bal=0;
     let amt=price.value;
     amt=Math.floor(amt);
     let psw=pricepsw.value;
     bal=amt;
     if(psw in localStorage){
      
        if(amt>0){
            const accountdetails=JSON.parse(localStorage.getItem(psw));
            accountdetails.balance=accountdetails.balance+bal;
            localStorage.setItem(accountdetails.acn,JSON.stringify(accountdetails));
          alert('Your amount is successfully added')
          document.getElementById('currentb').innerHTML=`Your current balance : ${accountdetails.balance}`
          price.value='';
        }
        else{
            alert('Invalid amount')
        }
        
     }
     else{
        alert('Incorrect passward') 
        }
     }

    
     function withdraw(){
       
    
        let amt=eprice.value
        let psw=drawpsw.value
       
        if(psw in localStorage){
            if(amt>0){
                const accountdetails=JSON.parse(localStorage.getItem(psw));
              accountdetails.balance=accountdetails.balance-amt;
              localStorage.setItem(accountdetails.acn,JSON.stringify(accountdetails));
              alert('Your amount is successfully withdrawed')
              document.getElementById('currentb').innerHTML=`Your current balance :${accountdetails.balance}`
              eprice.value='';
            }
            else{
                alert('Invalid amount');
                eprice.value='';
            }
            
         }
         else{
            alert('Incorrect passward') ;
            drawpsw.value='';
            }
    }
    
 