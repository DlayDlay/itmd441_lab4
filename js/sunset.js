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
	zonetxt2.value = (data.results.timezone);
  })
  .catch((error) => console.error("Error:", error));
	})

}


function createBoxes() {
	
	risetxt = document.createElement("input");
	settxt = document.createElement("input");
	dawntxt = document.createElement("input");
	dusktxt = document.createElement("input");
	lengthtxt = document.createElement("input");
	zonetxt = document.createElement("input");
	
	risetxt2 = document.createElement("input");
	settxt2 = document.createElement("input");
	dawntxt2 = document.createElement("input");
	dusktxt2 = document.createElement("input");
	lengthtxt2 = document.createElement("input");
	zonetxt2 = document.createElement("input");

	risetxt.type = "text";
	risetxt.disabled = true;
	document.body.appendChild(risetxt);
	
	settxt.type = "text";
	settxt.disabled = true;
	document.body.appendChild(settxt);
	
	dawntxt.type = "text";
	dawntxt.disabled = true;
	document.body.appendChild(dawntxt);
	
	dusktxt.type = "text";
	dusktxt.disabled = true;
	document.body.appendChild(dusktxt);
	
	lengthtxt.type = "text";
	lengthtxt.disabled = true;
	document.body.appendChild(lengthtxt);
	
	zonetxt.type = "text";
	zonetxt.disabled = true;
	document.body.appendChild(zonetxt);
	
	risetxt2.type = "text";
	risetxt2.disabled = true;
	document.body.appendChild(risetxt2);
	
	settxt2.type = "text";
	settxt2.disabled = true;
	document.body.appendChild(settxt2);
	
	dawntxt2.type = "text";
	dawntxt2.disabled = true;
	document.body.appendChild(dawntxt2);
	
	dusktxt2.type = "text";
	dusktxt2.disabled = true;
	document.body.appendChild(dusktxt2);
	
	lengthtxt2.type = "text";
	lengthtxt2.disabled = true;
	document.body.appendChild(lengthtxt2);
	
	zonetxt2.type = "text";
	zonetxt2.disabled = true;
	document.body.appendChild(zonetxt2);

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
