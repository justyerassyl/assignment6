let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

/* Write your code here */
var country = document.querySelector("#countries");

function addCountries(){
	for(var i=0; i<countries.length; i++){
		var addcountry = document.createElement("option");
		addcountry.value = i;
		addcountry.textContent = countries[i];
		country.appendChild(addcountry);
	}
}
addCountries();

var city = document.querySelector("#cities");

function change(){

	var opt = document.querySelector("option");
	var attribute = document.createAttribute("value");
	attribute.value=-1;
	opt.setAttributeNode(attribute); 
	city.innerHTML = ""; 			
	

	if(country.value==-1){
		var selCity = document.createElement("option");
		selCity.textContent = "Select city";
		city.appendChild(selCity);
	}

	if(country.value==0){
		for (let cityy of cities_by_country["Kazakhstan"]) {
		var addcity = document.createElement("option");
		addcity.textContent = cityy;
		city.appendChild(addcity);
		}
	}
	if(country.value==1){
		for (let cityy of cities_by_country["Russia"]) {
		var addcity = document.createElement("option");
		addcity.textContent = cityy;
		city.appendChild(addcity);
		}
	}
	if(country.value==2){
		for (let cityy of cities_by_country["England"]) {
		var addcity = document.createElement("option");
		addcity.textContent = cityy;
		city.appendChild(addcity);
		}
	} 
	if(country.value==3){
		for (let cityy of cities_by_country["France"]) {
		var addcity = document.createElement("option");
		addcity.textContent = cityy;
		city.appendChild(addcity);
		}
	}
}

