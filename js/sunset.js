window.onload=function(){
document.getElementById('btn').addEventListener('click', function(){
            console.log('Button Clicked!');

            fetch('https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873')
            .then(function(response){
                return response.json();
            })
            .then(function(myJson){
                console.log(myJson);
            })
            .catch(error => console.log(error));

        }, false); //end button click event handler
}
