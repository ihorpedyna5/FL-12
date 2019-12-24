function guad(a, b, c){
	if(a==0) console.log("Error, a = 0 invalid value");
	var D= b*b-4*a*c;
	var x1, x2;

	if(D>0){
		x1=(-b+Math.sqrt(D))/(2*a);
		x2=(-b-Math.sqrt(D))/(2*a);
		console.log("Coefficient: a = "+a+", b = "+b+", c = "+c+"\nRoots: x1 = " + x1 + ", x2 = " + x2 + 
		"\n Discriminant (D) = " + D);
	}else if(D==0){
		x1=-b/(2*a);
		console.log("Coefficient: a = "+a+", b = "+b+", c = "+c+"\n Roots: X = " + x1 + "\n Discriminant (D) = " + D);
	}else if(D<0) console.log("Coefficient: a = "+a+", b = "+b+", c = "+c+"\n No Solution\n Discriminant (D) = " + D);
}
	function prog(){
		var a = document.getElementById('a').value;
		var b = document.getElementById('b').value;
		var c = document.getElementById('c').value;
		var result = guad(a, b, c);
	}
