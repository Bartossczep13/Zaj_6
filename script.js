(function () {
   const b = document.getElementById('ex2_content');
   var c = document.getElementById('ex2_text');
  
  c.addEventListener("input",function (){
  
  if(c.value.match(/^[0-9]+$/) && c.value.length ==9){
    b.textContent = "numer jest poprawny";
  };
    
})();