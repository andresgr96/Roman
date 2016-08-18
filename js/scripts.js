var numerals1s = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var numerals10s = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var numerals100s = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var numerals1000s = ["", "M", "MM", "MMM"];

var romanNumber = function(number) {



}



$(document).ready(function() {
  $("#numberInput").submit(function(event) {
    event.preventDefault();

    var number = parseInt($(".number").val());

    if (isNaN(number)) {

      console.log("This is not a number");

    }

  });
});
