var northwestern = '2';
var michigan = '1';
console.log("Northwestern is #"+ northwestern +" while Michigan is #"+ michigan);


var total_months = 0;
var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

for (var i=0; i<months.length; i++){
	total_months +=1;
	console.log("Adding months: " + months[i]);
	console.log("Total months is" + total_months);
}


TotalNor = 0;
TotalMich = 0;
for (var i=0; i<8; i++){

	var rn=Math.floor(Math.random()*10)
	var rn1=Math.floor(Math.random()*10)

	if (rn > rn1){
	TotalNor += 1;	
	}
	else if (rn1 > rn){
	TotalMich += 1;	
	}	
}

if (TotalNor > TotalMich){
	console.log("Northwestern is betther than Michigan with "+ TotalNor + " matches won");
}
else if (TotalMich > TotalNor){
	console.log("Michigan is betther than Northerstern with "+ TotalMich + " matches won");
}
else {
	console.log("bahhhhhh")
}

var Northwestern_object = {
	school: "Pretty good",
	weather: "Not so good",
	beach: "beatiful",
	sheridan: "Not so beatiful",
	football_team: 'terrible',
	name: 'Northwestern'
}
console.log("Before:", Northwestern_object);
Northwestern_object["analytics"] = "up-and-coming";
console.log("After:", Northwestern_object);

var Michigan_object = {
	school: "Good",
	weather: "Not so good",
	beach: "Non-existant",
	football_team: 'terrible',
	name: 'Michigan'
}

var big_ten_list = [];
big_ten_list.push(Northwestern_object);
big_ten_list.push(Michigan_object);

for (var i=0; i<big_ten_list.length; i++){
	trial(big_ten_list[i]);
}

function trial (university){ // Expects a variable
	if (university.football_team == "excellent"){
		console.log("Must be Michigan");
		console.log(university.name);
	}
	else {
		console.log("Must be Northerstern");
		console.log(university.name);
	}
}




