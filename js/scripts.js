// Program should return true for years divisible by 4
var leapyear = function(input) {
  if ((input % 4 === 0) && (input % 100 != 0)) //&& ( input % 400 === 0)) {
{
    console.log("This is divisible by 4 and not divisible by 100");
}
  else {
    console.log("this is not a leap year!");
  }
}
