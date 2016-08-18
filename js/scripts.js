var numerals1s = ["","I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var numerals10s = ["","X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var numerals100s = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var numerals1000s = ["M", "MM", "MMM"];
var result = ""


$(document).ready(function() {
  $("#numberInput").submit(function(event) {
    event.preventDefault();

    var number = $(".number").val();
    var numberSplit = number.split('');

    if (isNaN(number)) {

      console.log("This is not a number");

    }

      else if (number < 10) {

        for (var index = 0; index < number; index++) {


          result = numerals1s[number];
          console.log(result);
        }
      }
      else if ((number >= 10) && (number <= 99)) {
        for (var index = 0; index < number; index++){

          result = numerals10s[parseInt(numberSplit[0])] + numerals1s[parseInt(numberSplit[1])];
          console.log(result);

        }
      }
      else if ((number >= 100) && (number <= 999)) {
        for (var index = 0; index < number; index++){

          result = numerals100s[parseInt(numberSplit[0])] + numerals10s[parseInt(numberSplit[1])] + numerals1s[parseInt(numberSplit[2])];
          console.log(result);
        }
      }



      // else if (number < 10) {
      //
      //   if (number === 1){
      //     answer = "I";
      //   }
      //   if (number === 2){
      //     answer = "II";
      //   }
      //   if (number === 3){
      //     answer = "III";
      //   }
      //   if (number === 4){
      //     answer = "IV";
      //   }
      //   if (number === 5){
      //     answer = "V";
      //   }
      //   if (number === 6){
      //     answer = "VI";
      //   }
      //   if (number === 7){
      //     answer = "VII";
      //   }
      //   if (number === 8){
      //     answer = "VIII";
      //   }
      //   if (number === 9){
      //     answer = "IX";
      //   } console.log(answer);
      //
      //



  });
});
