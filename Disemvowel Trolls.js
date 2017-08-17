function disemvowel(str) {
  return (str.split("").map(function(x){ return "qaeyuoi".indexOf(x.toLowerCase()) >=0 ? "" : x})).join("");
}


disemvowel("This website is for losers LOL!")

function disemvowel(str) {
  return str.replace(/[aeiou]/ig,'');
}
