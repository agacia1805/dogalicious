const iconValue = {
    Afghan_hound: '2',
    Airedale: '4',
    Akita: '6',
    American_staffordshire: '16',
    Basset_hound: '30',
    Beagle: '31',
    Bedlington_terrier: '34',
    Bernese_mountain: '41',
    Bichon_frise: '42',
    Border_collie: '50',
    Boxer: '55',
    Bullmastiff: '64',
    Bullterrier: '61',
    Chinese_crested: '78',
    Chow_chow: '81',
    Dalmatian: '92',
    Doberman: '94',
    English_cocker_spaniel: '86',
    French_bulldog: '113',
    German_shepherd: '115',
};

function fetchDogApi(dogKey, dogId) {
 dogId = '2';

 var myHeaders = new Headers();
 myHeaders.append("Content-Type", "application/json");
 myHeaders.append("x-api-key", dogKey);
 

 var requestOptions = {
   method: 'GET',
 };
 
 fetch(`https://api.thedogapi.com/v1/breeds/${dogId}`, requestOptions)
   .then(response => response.json())
   .then(data => {
    console.log(data)
   let breedName =  data.name;
   let temperament = data.temperament;
   let dogWeight =  data.weight.metric;
   let dogSize = data.height.metric;
   let lifespan = data.life_span;

   document.getElementById('dogBreed').innerHTML = breedName;
   document.getElementById('dogTemperament').innerHTML = temperament;
   document.getElementById('dogWeight').innerHTML = `${dogWeight} kg`;
   document.getElementById('dogSize').innerHTML = `${dogSize} cm`;
   document.getElementById('dogLifespan').innerHTML = lifespan;
   })
   .catch(error => console.log('error', error));
}

fetchDogApi();

// function getRandomDog() {
//     const ids = iconValue.value;
//     const keys = Object.keys(ids);
//     const randomIndex = Math.floor(Math.random() * keys.length);
//
// }
//
// getRandomDog();

document.ready(function(){
    let dogId = '2';

    $.getJSON(`https://api.thedogapi.com/v1/breeds/${dogId}`,
        {
            tags: keyword,
            tagmode: "any",
            format: "json"
        },
        function(data) {
            var rnd = Math.floor(Math.random() * data.items.length);

            var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");

            $('body').css('background-image', "url('" + image_src + "')");

        });

});
