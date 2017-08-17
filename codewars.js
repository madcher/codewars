//first task
function XO(str) {
    var oo=0;
    var xx=0;
    for (k in str) {
      if (str[k].toLowerCase()=='x') {
      xx+=1;}
      else if (str[k].toLowerCase()=='o') {
      oo+=1;}
    }

    return (oo==xx);
}
//second variant
function XO(str) {
    var oo=0;
    var xx=0;
    for (k in str) {
      (str[k].toLowerCase()=='x') ? xx+=1 : (str[k].toLowerCase()=='o')&&(oo+=1);}
    return (oo==xx);}
