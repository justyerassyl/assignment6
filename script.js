function remove(event){
	var text = event.currentTarget;
	text.parentNode.setAttribute("data-status", "done");
	console.log(text);
}  

var finish = document.querySelectorAll("button");
for(var i=0; i<finish.length; i++){
	finish[i].addEventListener("click", remove);
}

/* Write your code here */
/*function removeFirst(){
	var array = [];
	for(var i=0; i<5; i++){
		var x = document.getElementsByTagName("span")[i].textContent
 		array.push(x);
	}

	var attribute = document.createAttribute("data-status");
	attribute.value = "done";
	var h = document.getElementsByTagName("div")[0];
	h.getElementsByTagName("div")[0].setAttributeNode(attribute);
}

function removeSecond(){
	var attribute = document.createAttribute("data-status");
	attribute.value = "done";
	var h = document.getElementsByTagName("div")[0];
	h.getElementsByTagName("div")[1].setAttributeNode(attribute);
}

function removeThird(){
	
	var attribute = document.createAttribute("data-status");
	attribute.value = "done";
	var h = document.getElementsByTagName("div")[0];
	h.getElementsByTagName("div")[2].setAttributeNode(attribute);
}

function removeFourth(){
	
	var attribute = document.createAttribute("data-status");
	attribute.value = "done";
	var h = document.getElementsByTagName("div")[0];
	h.getElementsByTagName("div")[3].setAttributeNode(attribute);
}

function removeFifth(){
	var attribute = document.createAttribute("data-status");
	attribute.value = "done";
	var h = document.getElementsByTagName("div")[0];
	h.getElementsByTagName("div")[4].setAttributeNode(attribute);
}
*/