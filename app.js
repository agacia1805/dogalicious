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


