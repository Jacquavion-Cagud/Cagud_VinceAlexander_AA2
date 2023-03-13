var x = 1;
while(x <= 51) {
	if(x<51) {
		document.getElementById("darby").innerHTML += x + ", ";
		x = x + 2;
	} else {
		document.getElementById("darby").innerHTML += x + " ";
		x = x + 2;
	}
}
var y = 2;
do{
	if(y<50){
		document.getElementById("dabus").innerHTML += y + ", ";
		y = y + 2;
	}else{
		document.getElementById("dabus").innerHTML += y + " ";
		y = y + 2;
	}
}while(y<=50)
for (var z = 1; z <= 4096; z=z*2) {
	if(z<4096){
		document.getElementById("drake").innerHTML += z + ", ";
	}else{
		document.getElementById("drake").innerHTML += z + " ";
	}
}