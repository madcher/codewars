function accum(s) {
	var res="";
	for (k in s) {
		var i =0;
		while (i<=k){
	    if (i) {
				res+=s[k].toLowerCase();
			}
			else{
				res+=s[k].toUpperCase()
			}
			i++;
		}
	}
	return res;
}
accum("Zpgln");

function accum(s) {
	var res="";
	for (k in s) {
		for (var i = 0; i<=k; i++){
			res+=i ? s[k].toLowerCase() : s[k].toUpperCase();
		} res+="-";
	}
	return res.slice(0,-1) ;
}
accum("Zpgln");


function accum(s) {
  return s.split("").map(function(x, index){return x.toUpperCase()+Array(index).join(x.toLowerCase()) }).join("-");
}
accum("Zpgln");
