var numerals1s = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var numerals10s = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var numerals100s = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var numerals1000s = ["M", "MM", "MMM"];



$(document).ready(function() {
  $("#numberInput").submit(function(event) {
    event.preventDefault();

    var number = parseInt($(".number").val());

    if (isNaN(number)) {

      console.log("This is not a number");

    }
      else if (number < 10) {

        if (number === 1){
          answer = "I";
        }
        if (number === 2){
          answer = "II";
        }
        if (number === 3){
          answer = "III";
        }
        if (number === 4){
          answer = "IV";
        }
        if (number === 5){
          answer = "V";
        }
        if (number === 6){
          answer = "VI";
        }
        if (number === 7){
          answer = "VII";
        }
        if (number === 8){
          answer = "VIII";
        }
        if (number === 9){
          answer = "IX";
        } console.log(answer);

    }

      else if ((10 <= number) && (number < 100)) {

      console.log("the number is between 10 and 99");

        for (index = 0; index <  )

      }



  });
});
