let cars = [{brand:'Toyota',model:'Camry','year':1999,'price':20000,image_url:"https://media.ed.edmunds-media.com/toyota/camry/2016/ot/2016_toyota_camry_LIFE1_ot_902163_1280.jpg"},{brand:'BMW',model:'X6',year:2014,price:25000,image_url:"https://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_5_1280.jpg"},{brand:'Daewoo',model:'Nexia',year:2007,price:15000,image_url:"https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg"}];

/* Write your code here */
var basketImage = "https://png.pngtree.com/png-vector/20190116/ourlarge/pngtree-cart-line-filled-icon-png-image_321335.jpg";
var dollar = "https://e7.pngegg.com/pngimages/599/196/png-clipart-united-states-dollar-icon-dollar-sign-dollar-icon-company-text.png";
var element = document.querySelector("#cars");

function myfunction(){
for(var i=0; i<cars.length; i++){
	var tag = document.createElement("div");
	tag.classList.add("card");
	tag.style.width = "100%";
	var title = document.createElement("div");
	title.innerHTML = cars[i]['brand'] + " " + cars[i]['model'];
	title.style.margin = "10px";
	var x = document.createElement("img");
	x.setAttribute("src", cars[i]['image_url']);
	x.style.width = "200px";
	x.style.margin = "5px";
	tag.appendChild(x);
	var basket = document.createElement("img");
	basket.setAttribute("src", basketImage);
	basket.classList.add("basket");
	basket.style.width = "40px";
	basket.style.cursor = "pointer";
	basket.style.left = "165px";
	basket.style.top = "15px";
	var attribute = document.createAttribute("value");
	basket.setAttribute("value", i);

	tag.appendChild(title);
	tag.appendChild(basket);
	element.appendChild(tag);
}
}
myfunction();
console.log(element);

var baskets = document.querySelectorAll(".basket");

var item = 0;
var sum = 0;


var sums = document.querySelector("#sum");

function sumOf(){

	for(var i=0; i<baskets.length; i++){
		if(baskets[i].src==dollar){
			sum+=cars[i]['price'];
		}
	}
	return sum;
}

function change(event){
	var image = document.createElement("img");
	image.setAttribute("src", dollar);

	if(event.currentTarget.src==image.src){
		event.currentTarget.src = basketImage;
		item--;
		var items = document.querySelector("#items");
		items.innerHTML = item;
		sums.innerHTML = sumOf();
	} else {
		event.currentTarget.src=image.src;
		item++;
		var items = document.querySelector("#items");
		items.innerHTML = item;
		sums.innerHTML = sumOf();
	}
	sum = 0;
}

for(var j=0; j<cars.length; j++){
	baskets[j].addEventListener("click", change);
}
