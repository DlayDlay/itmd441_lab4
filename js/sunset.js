window.onload=function(){
	document.getElementById('btn').addEventListener('click', function(){
            console.log('Button Clicked!');
	// Coordinates for New York
latitude = 40.71427;
longitude = -74.00597;

url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`;
url2 = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&date=tomorrow`;

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
