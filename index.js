const args = process.argv[2];
const { fetchBreedDescription } = require('./breedFetcher');

const  InputBreedName = args;

fetchBreedDescription(InputBreedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:' , error);
  } else {
    console.log(desc);
  }
});