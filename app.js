const iconValue = {
    Afghan_hound: 2,
    Airedale: 4,
    Akita: 6,
    American_staffordshire: 16,
    Basset_hound: 30,
    Beagle: 31,
    Bedlington_terrier: 34,
    Bernese_mountain: 41,
    Bichon_frise: 42,
    Border_collie: 50,
    Boxer: 55,
    Bullmastiff: 64,
    Bullterrier: 61,
    Chinese_crested: 78,
    Chow_chow: 81,
    Dalmatian: 92,
    Doberman: 94,
    English_cocker_spaniel: 86,
    French_bulldog: 113,
    German_shepherd: 115,
    Greyhound: 127,
    Husky: 226,
    Japanese_chin: 140,
    Kurzhaar: 116,
    Malamute: 9,
    Miniature_Schnauzer: 168,
    Newfoundland: 171,
    Pharaoh_hound: 188,
    Pomeranian: 193,
    Poodle: 197,
    Pug: 201,
    Rottweiler: 210,
    Saluki: 213,
    Shar_pei: 79,
    Sheltie: 221,
    Shihpoo: 224,
    Shih_tzu: 223,
    Springer_spaniel: 103,
    St_bernard: 212,
    Tibetan_mastiff: 244,
    Yorkshire_terrier: 264,
};

const searchInput = document.getElementById('inputSearch');
const suggestions = document.getElementById('suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
searchInput.addEventListener('click', removeMatches)

const breeds = [];

fetch(`https://api.thedogapi.com/v1/breeds`)
 .then(response => response.json())
  .then(data => breeds.push(...data));

function displayMatches() {
 const matchArray = findMatches(this.value, breeds);
 console.log(this.value);
 const html = matchArray.map(dog => {
    const regex = new RegExp(this.value, 'gi');
    const dogName = dog.name.replace(regex, `<span class="text--highlighted">${this.value}</span>`);
    return `
    <li>
      <span class="name">${dogName}</span>
    </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

function findMatches(wordToMatch, breeds) {
 return breeds.filter(dog => {
   const regex = new RegExp(wordToMatch, 'gi');
   return dog.name.match(regex)
 })
};

function removeMatches() {
    suggestions.innerHTML = '';
}


// ----------------------------------------- // 
function fetchDogApi(dogKey, dogId) {
 // dogId = '50';

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
   document.getElementById('dogOrigin').innerHTML = dogOrigin;
   document.getElementById('dogFacts').innerHTML = breedFor;
   document.getElementById('dogIcon').src = getICON(icon);
   })
   .catch(error => console.log('error', error));
}

fetchDogApi();


function getRandomDog() {

            const keys = 264;
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
     case iconValue.American_staffordshire:
         return "img/dog breeds/american-staffordshire-terrier.png";
     case iconValue.Basset_hound:
         return "img/dog breeds/basset-hound.png";
     case iconValue.Beagle:
         return "img/dog breeds/beagle.png";
     case iconValue.Bedlington_terrier:
         return "img/dog breeds/bedlington-terrier.png";
     case iconValue.Bernese_mountain:
         return "img/dog breeds/bernese-mountain.png";
     case iconValue.Bichon_frise:
         return "img/dog breeds/bichon-frise.png";
     case iconValue.Border_collie:
         return "img/dog breeds/border-collie.png";
     case iconValue.Boxer:
         return "img/dog breeds/boxer.png";
     case iconValue.Bullmastiff:
         return "img/dog breeds/bullmastiff.png";
     case iconValue.Bullterrier:
         return "img/dog breeds/bullterrier.png";
     case iconValue.Chinese_crested:
         return "img/dog breeds/chinese-crested.png";
     case iconValue.Chow_chow:
         return "img/dog breeds/chow-chow.png";
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
     case iconValue.Greyhound:
         return "img/dog breeds/greyhound.png";
     case iconValue.Husky:
         return "img/dog breeds/husky.png";
     case iconValue.Japanese_chin:
         return "img/dog breeds/japanese-chin.png";
     case iconValue.Kurzhaar:
         return "img/dog breeds/kurzhaar.png";
     case iconValue.Malamute:
         return "img/dog breeds/malamute.png";
     case iconValue.Miniature_Schnauzer:
         return "img/dog breeds/miniature-schnauzer.png";
     case iconValue.Newfoundland:
         return "img/dog breeds/newfoundland.png";
     case iconValue.Pharaoh_hound:
         return "img/dog breeds/pharaoh-hound.png";
     case iconValue.Pomeranian:
         return "img/dog breeds/pomeranian.png";
     case iconValue.Poodle:
         return "img/dog breeds/poodle.png";
     case iconValue.Pug:
         return "img/dog breeds/pug.png";
     case iconValue.Rottweiler:
         return "img/dog breeds/rottweiler.png";
     case iconValue.Saluki:
         return "img/dog breeds/saluki.png";
     case iconValue.Shar_pei:
         return "img/dog breeds/shar-pei.png";
     case iconValue.Sheltie:
         return "img/dog breeds/sheltie.png";
     case iconValue.Shihpoo:
         return "img/dog breeds/shih-tzu.png";
     case iconValue.Shih_tzu:
         return "img/dog breeds/shih-tzu.png";
     case iconValue.Springer_spaniel:
         return "img/dog breeds/springer-spaniel.png";
     case iconValue.St_bernard:
         return "img/dog breeds/st-bernard.png";
     case iconValue.Tibetan_mastiff:
         return "img/dog breeds/tibetan-mastiff.png";
     case iconValue.Yorkshire_terrier:
         return "img/dog breeds/yorkshire-terrier.png";
     default:
         return "img/pawprint%20(2).png";
 }
}

