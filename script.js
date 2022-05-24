(function () {
   const b = document.getElementById('ex1_content')
   const c = document.getElementById('ex1_button')

  c.addEventListener("click",function (){
  var data="";
    for(var i=0;i<10;i++)
      {
        if(i!=0)
          data +=",";
        data +=i.toString();
      }
    b.innerHTML=data;
  })
})();