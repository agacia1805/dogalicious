const searchInput = document.getElementById('inputSearch');
const suggestions = document.getElementById('suggestions');


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
searchInput.addEventListener('keypress', displayMatches);
searchInput.addEventListener('click', removeMatches);

const breeds = [];

fetch(`https://api.thecatapi.com/v1/breeds?attach_breed=0`)
    .then(response => response.json())
    .then(data => {breeds.push(...data);
        console.log(data);
    });

function displayMatches() {
    const matchArray = findMatches(this.value, breeds);
    // console.log(this.value);
    const suggestBreed = matchArray.map(cat => {
        const regex = new RegExp(this.value, 'gi');
        const catName = cat.name.replace(regex, `<span class="text--highlighted">${this.value}</span>`);
        let catID = cat.id;
        return `
    <li class="list_item">
      <span id="catSearch">${catName}</span>
      <span id="catSearchId">id: ${catID}</span>
    </li>
    `;
    }).join('');

    suggestions.innerHTML = suggestBreed;

    const matchBreed = document.querySelectorAll('.list_item');

    matchBreed.forEach(function(item, index){
        item.addEventListener('click', function(){
            let resultId = matchArray[index].id;
            fetchCatApi(catKey, resultId);
            suggestions.innerHTML = '';
        });
    });

}

function findMatches(wordToMatch, breeds) {
    return breeds.filter(dog => {
        const regex = new RegExp(wordToMatch, 'gi');
        return cat.name.match(regex)
    })
}

function removeMatches() {
    let ignoreClickOnMeElement = suggestions;

    document.addEventListener('click', function(event) {
        let isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
        if (!isClickInsideElement) {
            suggestions.innerHTML = '';
        }
    });
}

function navigateMatches() {
    document.onkeydown(function (e) {

    })
}

function fetchCatApi(catKey, catId) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", catKey);

    let requestOptions = {
        method: 'GET',
    };

    fetch(`https://api.thecatapi.com/v1/breeds?attach_breed=0${catId}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let breedName =  data.name;
            let temperament = data.temperament;
            let catWeight =  data.weight.metric;
            let catSize = data.height.metric;
            let catLifespan = data.life_span;
            let catOrigin =  data.origin;
            let breedFor = data.bred_for;
            let icon = data.id;

            document.getElementById('catBreed').innerHTML = breedName;
            document.getElementById('catTemperament').innerHTML = temperament;
            document.getElementById('catWeight').innerHTML = `${catWeight} kg`;
            document.getElementById('catSize').innerHTML = `${catSize} cm`;
            document.getElementById('catLifespan').innerHTML = catLifespan;
            document.getElementById('catOrigin').innerHTML = catOrigin;
            document.getElementById('catFacts').innerHTML = breedFor;
            document.getElementById('catIcon').src = getICON(icon);
        })
        .catch(error => console.log('error', error));
}

function getRandomCat() {
    const keys = breeds.length;
    let randomIndex = Math.floor(Math.random() * keys);
    console.log(randomIndex);
    fetchCatApi(catKey, randomIndex);

}

document.getElementById('searchRandom').addEventListener('click', getRandomCat);