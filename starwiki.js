let getPeople = document.querySelector('#get-people');
let getSpecies = document.querySelector('#get-species');

//selectors for the buttons

let personName = document.querySelector('#person-name');
let personHeight = document.querySelector('#person-height');
let personWeight = document.querySelector('#person-weight');
let personBorn = document.querySelector('#person-born');


function getInfo () {
	axios.get('https://swapi.co/api/people/1/').then(function(res) {
		console.log(res.data);
		updateInfo(res.data);
	}).catch(e => {
		udateInfoWithError()
	})
}

function updateInfo(data) {
	personName.innerText = data.name;
	personHeight.innerText=data.height;
	personWeight.innerText = data.mass;
	personBorn.innerText = data.birth_year;

}

function updateInfoWithError() {
	personName.innerText = 'There was a disturbance in the force'

}

getPeople.addEventListener('click', getInfo)
getSpecies.addEventListener('click', getInfo)
getShips.addEventListener('click', getInfo)
getPlanets.addEventListener('click', getInfo)

