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
 dogId = '13';

 var myHeaders = new Headers();
 myHeaders.append("Content-Type", "application/json");
 myHeaders.append("x-api-key", dogKey);
 

 var requestOptions = {
   method: 'GET',
 };
 
 fetch(`https://api.thedogapi.com/v1/breeds/${dogId}`, requestOptions)
   .then(response => response.json())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));
}

fetchDogApi();

