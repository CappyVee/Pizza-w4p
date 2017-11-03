function Pizza(size, meat, veggie) {
  this.sizePizza = size;
  this.meatPizza = meat;
  this.veggiePizza = veggie;
}//end Pizza constructors

Pizza.prototype.pizzaCost = function() {
  var pizzaPrice = 0;
  if (this.sizePizza == "sm-pizza") {
    pizzaPrice += 8;
  } else if (this.sizePizza == "md-pizza") {
    pizzaPrice += 10;
  } else if (this.sizePizza == "lg-pizza") {
    pizzaPrice += 12;
  } else if (this.sizePizza == "xl-pizza") {
    pizzaPrice += 14;
  }

  if (this.meatPizza == "no-meat") {
    pizzaPrice += 0;
  } else if (this.meatPizza == "pepperoni-meat") {
    pizzaPrice += 1;
  } else if (this.meatPizza == "sausage-meat") {
    pizzaPrice += 2;
  }

  if (this.veggiePizza == "no-veg") {
    pizzaPrice += 0;
  } else if (this.veggiePizza == "olive-veg") {
    pizzaPrice += 1;
  } else if (this.veggiePizza == "pepper-veg") {
    pizzaPrice += 2;
  } else if (this.veggiePizza == "onion-veg") {
    pizzaPrice += 3;
  }
  return pizzaPrice;
}//end pizzaCost prototype


$(document).ready(function(){
  $("#order-form").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("select#size-question").val();
    var pizzaMeat = $("select#meat-question").val();
    var pizzaVeggie = $("select#veg-question").val();
    var newPizza = new Pizza(pizzaSize, pizzaMeat, pizzaVeggie);
    alert(newPizza.pizzaCost());
  });//submit fxn end
});//doc ready fxn end
