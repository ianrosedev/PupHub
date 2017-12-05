import express from 'express';
import path from 'path';
import helmet from 'helmet';
import compression from 'compression';
import requestPromise from 'request-promise';
import { rescueGroupsKey } from './keys';

const app = express();

app.use(helmet());
app.use(compression());

/*** For production use ***
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
*/

app.get('/search/general/:zipcode', (req, res) => {
  const zipcode = req.params.zipcode;

  requestPromise({
    method: 'POST',
    uri: 'https://api.rescuegroups.org/http/v2.json',
    body: JSON.stringify({
		  apikey: rescueGroupsKey,
		  objectType: 'animals',
	    objectAction: 'publicSearch',
	    search: {
	      resultStart: 0,
	      resultLimit: 10,
	      filters: [
	        {
	          fieldName: 'animalSpecies',
	          operation: 'equals',
	          criteria: 'dog'
	        },
	        {
	          fieldName: 'animalStatus',
	          operation: 'equals',
	          criteria: 'Available'
	        },
	        {
	          fieldName: 'animalLocationDistance',
	          operation: 'radius',
	          criteria: 50
	        },
	        {
	          fieldName: 'animalLocation',
	          operation: 'equals',
	          criteria: zipcode
	        }
	      ],
	    'fields':
	      [
	        'animalID',
          'animalOrgID',
          'animalSex',
          'animalName',
          'animalGeneralAge',
          'animalSizePotential',
          'animalSizeCurrent',
          'animalBreed',
          'animalOKWithCats',
          'animalOKWithDogs',
          'animalOKWithKids',
          'animalLocationCoordinates'
	      ]
      }
	   })
   })
    .then((parsedBody) => {
      res.json(parsedBody);
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
});

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});
