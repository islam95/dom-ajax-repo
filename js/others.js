// #1 API - Chuck Norris Jokes
var result = document.querySelector("#api-result");
var getJokeBtn = document.querySelector('#newJoke'); 

function getNewJoke(){
    fetch("https://api.chucknorris.io/jokes/random")
		.then(response => response.json())
		.then(joke => {
            var p = document.createElement("p");
            p.innerHTML = joke.value;
            p.style.color = "#bb5d3d";
            result.innerHTML = "";
			result.appendChild(p);
		});
}
getJokeBtn.addEventListener("click", getNewJoke);

// #2 API - IP address info

var ip = document.querySelector("#ip");
var city = document.querySelector("#city");
var region = document.querySelector("#region");
var country = document.querySelector("#country");
var post = document.querySelector("#post");
var lat_long = document.querySelector("#lat_long");
var timeZone = document.querySelector("#timeZone");
var org = document.querySelector("#org");

fetch("https://ipapi.co/json")
	.then(response => response.json())
	.then(info => {
		ip.innerHTML = info.ip;
		city.innerHTML = info.city;
		region.innerHTML = info.region;
		country.innerHTML = info.country_name;
		post.innerHTML = info.postal;
        lat_long.innerHTML = info.latitude + " / " + info.longitude;
        timeZone.innerHTML = info.timezone + " (" + info.utc_offset + ")";
        org.innerHTML = info.org;
	});
