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
    Shih_tzu: 223,
    Springer_spaniel: 103,
    St_bernard: 212,
    Tibetan_mastiff: 244,
    Yorkshire_terrier: 264,
};

function fetchDogApi(dogKey, dogId) {
 // dogId = '50';

 var myHeaders = new Headers();
 myHeaders.append("Content-Type", "application/json");
 myHeaders.append("x-api-key", dogKey);
 

 var requestOptions = {
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


function getRandomDog(dogId) {

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
     default:
         return "img/pawprint%20(2).png";
 }
}

