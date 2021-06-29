const searchInput = document.getElementById('inputSearch');
const suggestions = document.getElementById('suggestions');


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
searchInput.addEventListener('keypress', displayMatches);
searchInput.addEventListener('click', removeMatches);


const breeds = [];

fetch(`https://api.thedogapi.com/v1/breeds`)
    .then(response => response.json())
    .then(data => {breeds.push(...data);
        console.log(data);
    });

function displayMatches() {
    const matchArray = findMatches(this.value, breeds);
    const suggestBreed = matchArray.map(dog => {
    const regex = new RegExp(this.value, 'gi');
    const dogName = dog.name.replace(regex, `<span class="text--highlighted">${this.value}</span>`);
    return `
    <li class="list__item">
      <span id="dogSearch">${dogName}</span
    </li>
    `;
    }).join('');
    suggestions.innerHTML = suggestBreed;
  
    const matchBreed = document.querySelectorAll('.list_item');
    
    matchBreed.forEach(function(item, index){
        item.addEventListener('click', function(){
            let resultId = matchArray[index].id;
            fetchDogApi(dogKey, resultId);
                suggestions.innerHTML = '';
        });
      });

}

function findMatches(wordToMatch, breeds) {
 return breeds.filter(dog => {
   const regex = new RegExp(wordToMatch, 'gi');
   return dog.name.match(regex)
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
// ----------------------------------------- //
function fetchDogApi(dogKey, dogId) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", dogKey);
 
    let requestOptions = {
        method: 'GET',
    };
 
 fetch(`https://api.thedogapi.com/v1/breeds/${dogId}`, requestOptions)
   .then(response => response.json())
   .then(data => {
    console.log(data);
   let breedName =  data.name;
   let temperament = data.temperament;
   let dogWeight =  data.weight.metric;
   let dogSize = data.height.metric;
   let dogLifespan = data.life_span;
   let dogOrigin =  data.origin;
   let breedFor = data.bred_for;
   let icon = data.id;

   document.getElementById('dogBreed').innerHTML = breedName;
   document.getElementById('dogTemperament').innerHTML = temperament;
   document.getElementById('dogWeight').innerHTML = `${dogWeight} kg`;
   document.getElementById('dogSize').innerHTML = `${dogSize} cm`;
   document.getElementById('dogLifespan').innerHTML = dogLifespan;
   document.getElementById('dogIcon').src = getICON(icon);
    if(typeof dogOrigin !== 'undefined') {
        document.getElementById('dogOrigin').innerHTML = dogOrigin;
    } else {
        document.getElementById('dogOrigin').innerHTML = '-';
    }
    if(typeof breedFor !== 'undefined') {
        document.getElementById('dogFacts').innerHTML = breedFor;
    } else {
        document.getElementById('dogFacts').innerHTML = '-';
    }

   })
   .catch(error => console.log('error', error));
}

function getRandomDog() {
    const keys = breeds.length;
    let randomIndex = Math.floor(Math.random() * keys);
    console.log(randomIndex);
    fetchDogApi(dogKey, randomIndex);

}


document.getElementById('searchRandom').addEventListener('click', getRandomDog);


function getICON(icon) {
 switch (icon) {
     case iconValue.Afghan_hound:
         return "img/dog breeds/afghan-hound.png";
     case iconValue.Airedale:
         return "img/dog breeds/airedale.png";
     case iconValue.Akita:
         return "img/dog breeds/akitas.png";
     case iconValue.Alaskan_husky:
         return "img/dog breeds/husky.png";
     case iconValue.American_staffordshire:
         return "img/dog breeds/american-staffordshire-terrier.png";
     case iconValue.Australian_shepherd:
         return "img/dog breeds/australian-shepherd.png";
     case iconValue.Basset_hound:
         return "img/dog breeds/basset-hound.png";
     case iconValue.Basenji:
         return "img/dog breeds/Basenji.png";
     case iconValue.Beagle:
         return "img/dog breeds/beagle.png";
     case iconValue.Bedlington_terrier:
         return "img/dog breeds/bedlington-terrier.png";
     case iconValue.Bernese_mountain:
         return "img/dog breeds/bernese-mountain.png";
     case iconValue.Belgian_malinois:
         return "img/dog breeds/Belgian-Malinois.png";
     case iconValue.Bichon_frise:
         return "img/dog breeds/bichon-frise.png";
     case iconValue.Border_collie:
         return "img/dog breeds/border-collie.png";
     case iconValue.Boston_terrier:
         return "img/dog breeds/boston-terrier.png";
     case iconValue.Boxer:
         return "img/dog breeds/boxer.png";
     case iconValue.Bullmastiff:
         return "img/dog breeds/bullmastiff.png";
     case iconValue.Bullterrier:
         return "img/dog breeds/bullterrier.png";
     case iconValue.Chihuahua:
         return "img/dog breeds/chihuahua.png";
     case iconValue.Chinese_crested:
         return "img/dog breeds/chinese-crested.png";
     case iconValue.Chow_chow:
         return "img/dog breeds/chow-chow.png";
     case iconValue.Collie:
         return "img/dog breeds/collie.png";
     case iconValue.Corgi:
         return "img/dog breeds/corgi.png";
     case iconValue.Dachshund:
         return "img/dog breeds/dachshund.png";
     case iconValue.Dalmatian:
         return "img/dog breeds/dalmatian.png";
     case iconValue.Doberman:
         return "img/dog breeds/doberman.png";
     case iconValue.English_cocker_spaniel:
         return "img/dog breeds/english-cocker-spaniel.png";
     case iconValue.French_bulldog:
         return "img/dog breeds/french-bulldog.png";
     case iconValue.German_shepherd:
         return "img/dog breeds/german-shepherd.png";
     case iconValue.Golden_retriever:
         return "img/dog breeds/golden-retriever.png";
     case iconValue.Great_dane:
         return "img/dog breeds/great-dane.png";
     case iconValue.Great_pyrenees:
         return "img/dog breeds/Great-Pyrenees.png";
     case iconValue.Greyhound:
         return "img/dog breeds/greyhound.png";
     case iconValue.Havanese:
         return "img/dog breeds/Havanese.png";
     case iconValue.Siberian_husky:
         return "img/dog breeds/husky.png";
     case iconValue.Jack_russel_terrier:
         return "img/dog breeds/jack-russell-terrier.png";
     case iconValue.Japanese_chin:
         return "img/dog breeds/japanese-chin.png";
     case iconValue.Kurzhaar:
         return "img/dog breeds/kurzhaar.png";
     case iconValue.Labrador_retriever:
         return "img/dog breeds/labrador.png";
     case iconValue.Malamute:
         return "img/dog breeds/malamute.png";
     case iconValue.Maltese:
         return "img/dog breeds/maltese.png";
     case iconValue.Miniature_Schnauzer:
         return "img/dog breeds/miniature-schnauzer.png";
     case iconValue.Newfoundland:
         return "img/dog breeds/newfoundland.png";
     case iconValue.Pharaoh_hound:
         return "img/dog breeds/pharaoh-hound.png";
     case iconValue.Pit_bull:
         return "img/dog breeds/pit-bull.png";
     case iconValue.Pomeranian:
         return "img/dog breeds/pomeranian.png";
     case iconValue.Poodle:
         return "img/dog breeds/poodle.png";
     case iconValue.Poodle_mini:
         return "img/dog breeds/poodle.png";
     case iconValue.Pug:
         return "img/dog breeds/pug.png";
     case iconValue.Rhodesian_ridgeback:
         return "img/dog breeds/ridgeback.png";
     case iconValue.Rottweiler:
         return "img/dog breeds/rottweiler.png";
     case iconValue.Saluki:
         return "img/dog breeds/saluki.png";
     case iconValue.Scottish_terrier:
         return "img/dog breeds/yorkshire-terrier.png";
     case iconValue.Sealyham_terrier:
         return "img/dog breeds/yorkshire-terrier.png";
     case iconValue.Shar_pei:
         return "img/dog breeds/shar-pei.png";
     case iconValue.Sheltie:
         return "img/dog breeds/sheltie.png";
     case iconValue.Shiba_inu:
         return "img/dog breeds/shiba-inu.png";
     case iconValue.Shihpoo:
         return "img/dog breeds/shih-tzu.png";
     case iconValue.Shih_tzu:
         return "img/dog breeds/shih-tzu.png";
     case iconValue.Springer_spaniel:
         return "img/dog breeds/springer-spaniel.png";
     case iconValue.St_bernard:
         return "img/dog breeds/st-bernard.png";
     case iconValue.Thai_ridgeback:
         return "img/dog breeds/ridgeback.png";
     case iconValue.Tibetan_mastiff:
         return "img/dog breeds/tibetan-mastiff.png";
     case iconValue.Xoloitzcuintli:
         return "img/dog breeds/xoloitzcuintli.png";
     case iconValue.Yorkshire_terrier:
         return "img/dog breeds/yorkshire-terrier.png";
     case iconValue.Aw_spaniel:
         return "img/dog breeds/english-cocker-spaniel.png";
     case iconValue.Boykin_spaniel:
         return "img/dog breeds/english-cocker-spaniel.png";
     case iconValue.Cavalier_spaniel:
         return "img/dog breeds/english-cocker-spaniel.png";
     case iconValue.Clumber_spaniel:
         return "img/dog breeds/english-cocker-spaniel.png";
     case iconValue.A_spaniel:
         return "img/dog breeds/english-cocker-spaniel.png";
     case iconValue.English_spaniel:
         return "img/dog breeds/english-cocker-spaniel.png";
     case iconValue.English_toy_spaniel:
         return "img/dog breeds/english-cocker-spaniel.png";
     case iconValue.Field_spaniel:
         return "img/dog breeds/english-cocker-spaniel.png";
     case iconValue.Tibetan_spaniel:
         return "img/dog breeds/english-cocker-spaniel.png";
     case iconValue.Welsh_spaniel:
         return "img/dog breeds/english-cocker-spaniel.png";

     default:
         return "img/pawprint%20(2).png";
 }
}

