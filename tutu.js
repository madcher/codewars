
function testStr(str){
  var quotes =["()","[]","{}","<>"];
  for (k in quotes){
    if (str.indexOf(quotes[k])>=0){
      str=str.replace(quotes[k],"");
      return testStr(str);
    }
  }
  return str;
}

function testCode(code){
    var mass =code.split("").filter(function(x){if ("()[]{}<><>".indexOf(x)>=0) return x}).join("");
    return testStr(mass)=="";

}


function checkSyntax(code){
    var mass =code.split("").filter(function(x){if ("()[]{}<><>".indexOf(x)>=0) return x}).join("");
    return testStr(mass)=="" ? 0:1;

}

checkSyntax("---(++++)----") == 0;
checkSyntax("") == 0;
checkSyntax("before ( middle []) after ") == 0;
checkSyntax(") (") == 1;
checkSyntax("} {") == 1;
checkSyntax("<(   >)") == 1;
checkSyntax("(  [  <>  ()  ]  <>  )") == 0;
checkSyntax("   (      [)") == 1;
