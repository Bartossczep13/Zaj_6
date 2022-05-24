(function () {
   const b = document.getElementById('ex1_content')
   const c = document.getElementById('ex1_button')

  c.addEventListener("click",function (){
  var data="0,1,2,3,4,5,6,7,8,9";
 
    b.innerHTML=data;
  })
})();