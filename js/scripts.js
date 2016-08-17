// Program should return true for years divisible by 4
var leapyear = function(year) {
  if  ((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)) {
    return true ;
}
  else {
    return false;
  }
}
