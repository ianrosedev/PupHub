import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';
import requestPromise from 'request-promise';
import { rescueGroupsKey } from './keys';

const app = express();

app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*** For production use ***
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
*/

app.post('/search/general', (req, res) => {
  const buildNewRequest = (searchSettings) => {
    const { zipcode, sex, size, age, goodWith } = searchSettings;

    const request = {
      method: 'POST',
      uri: 'https://api.rescuegroups.org/http/v2.json'
    };

    const body = {
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
            fieldName: 'animalLocation',
            operation: 'equals',
            criteria: zipcode
          },
          {
            fieldName: 'animalLocationDistance',
            operation: 'radius',
            criteria: 50
          },
          {
            fieldName: 'animalSex',
            operation: 'equals',
            criteria: sex
          },
          {
            fieldName: 'animalGeneralAge',
            operation: 'equals',
            criteria: age
          }
          /* More research needed
          {
            fieldName: 'animalGeneralSize',
            operation: 'equals',
            criteria: number
          }
          */
        ],
        fields: [
          'animalID',
          'animalOrgID',
          'animalName',
          'animalGeneralAge',
          'animalSizePotential',
          'animalSizeCurrent',
          'animalBreed',
          'animalOKWithCats',
          'animalOKWithDogs',
          'animalOKWithKids',
          'animalLocationCoordinates',
          'animalPictures'
        ]
      }
    };

    if (goodWith.find(el => el === 'Kids')) {
      body.search.filters.push({
        fieldName: 'animalOKWithKids',
  	    operation: 'equals',
        criteria: 'Yes'
      });
    }

    if (goodWith.find(el => el === 'Dogs')) {
      body.search.filters.push({
        fieldName: 'animalOKWithDogs',
  	    operation: 'equals',
        criteria: 'Yes'
      });
    }

    if (goodWith.find(el => el === 'Cats')) {
      body.search.filters.push({
        fieldName: 'animalOKWithCats',
  	    operation: 'equals',
        criteria: 'Yes'
      });
    }

    return { ...request, body: JSON.stringify(body) };
  };

  requestPromise(buildNewRequest(req.body))
    .then(parsedBody => res.json(parsedBody))
    .catch(err => console.log('Error: ' + err));
});

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});
