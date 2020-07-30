const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(URL, (error, response, body) => {

    if (error) {
      return callback(error, null);
    }
    
    const data = JSON.parse(body);
    if (data[0]) {
      let desc = data[0].description; //console.log(data[0].description);
      callback(null, desc);
    } else {
      callback('Breed Not Found', null);
    }

    // if (!error) {
    //   if (body !== '[]') {
    //     const data = JSON.parse(body);
    //      desc = data[0].description; //console.log(data[0].description);
    //   } else {
    //     return err =('Error: Breed not found!');
    //   }
    // } else {
    //   return err = error;
    // }
  });
};

module.exports = {
  fetchBreedDescription
};