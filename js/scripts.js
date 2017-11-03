function Pizza(size, meat, veggie) {
  this.sizePizza = size;
  this.meatPizza = meat;
  this.veggiePizza = veggie;
}//end Pizza constructors

Pizza.prototype.pizzaText = function() {
  var infoText = "You'll be having"
  if (this.sizePizza == "sm-pizza") {
    infoText += " a small pizza"
  } else if (this.sizePizza == "md-pizza") {
    infoText += " a medium pizza";
  } else if (this.sizePizza == "lg-pizza") {
    infoText += " a large pizza";
  } else if (this.sizePizza == "xl-pizza") {
    infoText += " an extra large pizza";
  }

  if (this.meatPizza == "no-meat") {
    infoText += " with no meat";
  } else if (this.meatPizza == "pepperoni-meat") {
    infoText += " with pepperoni";
  } else if (this.meatPizza == "sausage-meat") {
    infoText += " with sausage";
  }

  if (this.veggiePizza == "no-veg") {
    infoText += " and no veggies.";
  } else if (this.veggiePizza == "olive-veg") {
    infoText += " and olives.";
  } else if (this.veggiePizza == "pepper-veg") {
    infoText += " and green peppers.";
  } else if (this.veggiePizza == "onion-veg") {
    infoText += " and onions.";
  }
  return infoText;
}//end pizzaText prototype

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
  return "<h5>Your pizza will cost: $" + pizzaPrice + "<p class='remove'>Change your order?</p>";
}//end pizzaCost prototype


$(document).ready(function(){
  $("#order-form").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("select#size-question").val();
    var pizzaMeat = $("select#meat-question").val();
    var pizzaVeggie = $("select#veg-question").val();

    var newPizza = new Pizza(pizzaSize, pizzaMeat, pizzaVeggie);
    // alert(newPizza.pizzaCost());
    $("ol#storePizzaResults").append("<li><span class='listInfo'>" + newPizza.pizzaCost() + "</span></li>")

    $(".listInfo").last().click(function(){
      $(".show-info").show();
      $(".pizza-info").text(newPizza.pizzaText());
    });//end click fxn

    $(".remove").click(function(){
      $(this).closest("li").remove();
      $(".show-info").hide();
    });//remove fxn end
  });//submit fxn end
});//doc ready fxn end
