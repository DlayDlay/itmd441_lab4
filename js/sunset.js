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

window.onload=function(){
	document.getElementById('btn').addEventListener('click', function(){
            console.log('Button Clicked!');
			
			
if(document.getElementById('NY').checked){
	url = `https://api.sunrisesunset.io/json?lat=${latNY}&lng=${longNY}`;
	url2 = `https://api.sunrisesunset.io/json?lat=${latNY}&lng=${longNY}&date=tomorrow`;
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
    console.log(data.results.sunrise);
    console.log(data.results.sunset);
    console.log(data.results.dawn);
	console.log(data.results.dusk);
	console.log(data.results.day_length);
	console.log(data.results.timezone);
  })
  .catch((error) => console.error("Error:", error));
	
	fetch(url2)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results.sunrise);
    console.log(data.results.sunset);
    console.log(data.results.dawn);
	console.log(data.results.dusk);
	console.log(data.results.day_length);
	console.log(data.results.timezone);
  })
  .catch((error) => console.error("Error:", error));
	})

}
