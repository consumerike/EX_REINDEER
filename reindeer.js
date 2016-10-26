var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];


var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("coloredReindeer");

for (var i = 0; i < reindeer.length; i++) {
	var reindeerColor = colors[i]; 
	var reindeerName = reindeer[i];


	hohohoElement.innerHTML += "<div>" + colors[i] + " " + reindeer[i] + "</div>";

};



//insert html into labeled div container as a string
//in the following format: 'color[counter] + " " + reinder[counter]'
	
//we want to add corresponding elementes using the counter until there are no more reindeers left 

//

// [counter] + element[counter]