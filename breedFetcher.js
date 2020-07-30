const request = require('request');
const args = process.argv.splice(2);

const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + args;
//console.log(URL);

request(URL, (error, response, body) => {
  if (!error) {
    if (body !== '[]') {
      const data = JSON.parse(body);
      console.log(data[0].description);
    } else {
      console.log('Error: Breed not found!');
    }
  } else {
    console.log(error);
  }
});