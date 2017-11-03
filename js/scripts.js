$(document).ready(function(){
  $("#order-form").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("select#size-question").val();
    alert(pizzaSize);
    var pizzaMeat = $("select#meat-question").val();
    alert(pizzaMeat);
    var pizzaVeggie = $("select#veg-question").val();
    alert(pizzaVeggie);
  });//submit fxn end
});//doc ready fxn end
