const latNY = 40.712776;
const longNY = -74.005974;

const latCHI = 41.878113;
const longCHI = -87.629799;

const latLA = 34.052235;
const longLA = -118.243683;

const latLV = 36.169941;
const longLV = -115.139832;

const latDC = 38.907192;
const longDC = -77.036873;

lat = 0;
lon = 0;


window.onload=function(){
	
	made = false;
	getPos();
     	 
		 
	document.getElementById('btn').addEventListener('click', function(){
            console.log('Button Clicked!');
			
		if (made == false) {
			createBoxes();
			made = true;
			}
			
    
if(document.getElementById('current').checked){
	url = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}`;
	url2 = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&date=tomorrow`;
}
else if(document.getElementById('NY').checked){
	url = `https://api.sunrisesunset.io/json?lat=${latNY}&lng=${longNY}`;
	url2 = `https://api.sunrisesunset.io/json?lat=${latNY}&lng=${longNY}&date=tomorrow`;
}
else if(document.getElementById('LV').checked){
	url = `https://api.sunrisesunset.io/json?lat=${latLV}&lng=${longLV}`;
	url2 = `https://api.sunrisesunset.io/json?lat=${latLV}&lng=${longLV}&date=tomorrow`;
}
else if(document.getElementById('CHI').checked){
	url = `https://api.sunrisesunset.io/json?lat=${latCHI}&lng=${longCHI}`;
	url2 = `https://api.sunrisesunset.io/json?lat=${latCHI}&lng=${longCHI}&date=tomorrow`;
}
else if(document.getElementById('DC').checked){
	url = `https://api.sunrisesunset.io/json?lat=${latDC}&lng=${longDC}`;
	url2 = `https://api.sunrisesunset.io/json?lat=${latDC}&lng=${longDC}&date=tomorrow`;
}
else if(document.getElementById('LA').checked){
	url = `https://api.sunrisesunset.io/json?lat=${latLA}&lng=${longLA}`;
	url2 = `https://api.sunrisesunset.io/json?lat=${latLA}&lng=${longLA}&date=tomorrow`;
}
else if(document.getElementById('LV').checked){
	url = `https://api.sunrisesunset.io/json?lat=${latLV}&lng=${longLV}`;
	url2 = `https://api.sunrisesunset.io/json?lat=${latLV}&lng=${longLV}&date=tomorrow`;
}
else if(document.getElementById('CHI').checked){
	url = `https://api.sunrisesunset.io/json?lat=${latCHI}&lng=${longCHI}`;
	url2 = `https://api.sunrisesunset.io/json?lat=${latCHI}&lng=${longCHI}&date=tomorrow`;
}
else if(document.getElementById('DC').checked){
	url = `https://api.sunrisesunset.io/json?lat=${latDC}&lng=${longDC}`;
	url2 = `https://api.sunrisesunset.io/json?lat=${latDC}&lng=${longDC}&date=tomorrow`;
}


fetch(url)
  .then((response) => response.json())
  .then((data) => {  
    risetxt.value = (data.results.sunrise);
    settxt.value = (data.results.sunset);
    dawntxt.value = (data.results.dawn);
	dusktxt.value = (data.results.dusk);
	lengthtxt.value = (data.results.day_length);
	noontxt.value = (data.results.solar_noon);
	zonetxt.value = (data.results.timezone);
  })
  .catch((error) => console.error("Error:", error));
	
	fetch(url2)
  .then((response) => response.json())
  .then((data) => {
    risetxt2.value = (data.results.sunrise);
    settxt2.value = (data.results.sunset);
    dawntxt2.value = (data.results.dawn);
	dusktxt2.value = (data.results.dusk);
	lengthtxt2.value = (data.results.day_length);
	noontxt2.value = (data.results.solar_noon);
	zonetxt2.value = (data.results.timezone);
  })
  .catch((error) => console.error("Error:", error));
	})

}


function createBoxes() {
	
	//Create Elements
	risetxt = document.createElement("input");
	settxt = document.createElement("input");
	dawntxt = document.createElement("input");
	dusktxt = document.createElement("input");
	lengthtxt = document.createElement("input");
	noontxt = document.createElement("input");
	zonetxt = document.createElement("input");
	
	risetxt2 = document.createElement("input");
	settxt2 = document.createElement("input");
	dawntxt2 = document.createElement("input");
	dusktxt2 = document.createElement("input");
	lengthtxt2 = document.createElement("input");
	noontxt2 = document.createElement("input");
	zonetxt2 = document.createElement("input");
	
	riselbl = document.createElement("h2");
	setlbl = document.createElement("h2");
	dawnlbl = document.createElement("h2");
	dusklbl = document.createElement("h2");
	lengthlbl = document.createElement("h2");
	noonlbl = document.createElement("h2");
	zonelbl = document.createElement("h2");
	
	img = document.createElement("img");
	img.src = "images/sunrise.jpg";
	document.body.appendChild(img);
	
	daylbl = document.createElement("h2");
	daylbl.innerHTML = "Day 1 vs Day 2";
	document.body.appendChild(daylbl);
	
	
	//create div
	
	infodiv = document.createElement("div");
	infodiv.setAttribute("id", "info");
	
	//fill div
	//Sunrise
	
	infodiv.appendChild(riselbl);
	riselbl.innerHTML = "Sunrise";

	risetxt.type = "text";
	risetxt.disabled = true;
	risetxt.setAttribute("id", "rise");
	infodiv.appendChild(risetxt);
	
	risetxt2.type = "text";
	risetxt2.disabled = true;
	risetxt2.setAttribute("id", "rise2");
	infodiv.appendChild(risetxt2);
	
	//Sunset
	
	infodiv.appendChild(setlbl);
	setlbl.innerHTML = "Sunset";
	
	settxt.type = "text";
	settxt.disabled = true;
	settxt.setAttribute("id", "set");
	infodiv.appendChild(settxt);
	
	settxt2.type = "text";
	settxt2.disabled = true;
	settxt2.setAttribute("id", "set2");
	infodiv.appendChild(settxt2);
	
	//Dawn
	
	infodiv.appendChild(dawnlbl);
	dawnlbl.innerHTML = "Dawn";
	
	dawntxt.type = "text";
	dawntxt.disabled = true;
	dawntxt.setAttribute("id", "dawn");
	infodiv.appendChild(dawntxt);
	
	dawntxt2.type = "text";
	dawntxt2.disabled = true;
	dawntxt2.setAttribute("id", "dawn2");
	infodiv.appendChild(dawntxt2);
	
	//Dusk
	
	infodiv.appendChild(dusklbl);
	dusklbl.innerHTML = "Dusk";
	
	dusktxt.type = "text";
	dusktxt.disabled = true;
	dusktxt.setAttribute("id", "dusk");
	infodiv.appendChild(dusktxt);
	
	dusktxt2.type = "text";
	dusktxt2.disabled = true;
	dusktxt2.setAttribute("id", "dusk2");
	infodiv.appendChild(dusktxt2);
	
	//Length
	
	infodiv.appendChild(lengthlbl);
	lengthlbl.innerHTML = "Length";
	
	lengthtxt.type = "text";
	lengthtxt.disabled = true;
	lengthtxt.setAttribute("id", "length");
	infodiv.appendChild(lengthtxt);
	
	lengthtxt2.type = "text";
	lengthtxt2.disabled = true;
	lengthtxt2.setAttribute("id", "length2");
	infodiv.appendChild(lengthtxt2);
	
	//Noon
	
	infodiv.appendChild(noonlbl);
	noonlbl.innerHTML = "Solar Noon";
	
	noontxt.type = "text";
	noontxt.disabled = true;
	noontxt.setAttribute("id", "noon");
	infodiv.appendChild(noontxt);
	
	noontxt2.type = "text";
	noontxt2.disabled = true;
	noontxt2.setAttribute("id", "noon2");
	infodiv.appendChild(noontxt2);
	
	//Zone
	
	infodiv.appendChild(zonelbl);
	zonelbl.innerHTML = "Timezone";
	
	zonetxt.type = "text";
	zonetxt.disabled = true;
	zonetxt.setAttribute("id", "zone");
	infodiv.appendChild(zonetxt);
	
	
	zonetxt2.type = "text";
	zonetxt2.disabled = true;
	zonetxt2.setAttribute("id", "zone2");
	infodiv.appendChild(zonetxt2);
	
	//add div
	document.body.appendChild(infodiv);
}	

function getPos(){
	navigator.geolocation.getCurrentPosition(success, error);
}

function success(pos) {
	let crd = pos.coords;
	lat = crd.latitude;
	lon = crd.longitude;
	console.log('Your current position is:');
	url = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}`;
	url2 = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&date=tomorrow`;
}

function error(err) {
	console.warn(`ERROR(${err.code}): ${err.message}`);
}
