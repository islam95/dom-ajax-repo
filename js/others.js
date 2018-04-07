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
