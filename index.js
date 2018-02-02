import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';
import requestPromise from 'request-promise-native';
import zips from 'zips';
import { rescueGroupsKey } from './keys';

const app = express();

app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.post('/search/general', (req, res) => {
  const buildNewRequest = (searchSettings) => {
    const { activePage, locationCoords, sex, age, goodWith, distance } = searchSettings;

    const request = {
      method: 'POST',
      url: 'https://api.rescuegroups.org/http/v2.json',
      gzip: true,
      pool: { maxSockets: Infinity },
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'Keep-Alive'
      }
    };

    const body = {
      apikey: rescueGroupsKey,
      objectType: 'animals',
      objectAction: 'publicSearch',
      search: {
        // (activePage - 1) for 0 based index of search
        // * 20 for items per page
        resultStart: (activePage - 1) * 20,
        resultLimit: 20,
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
            criteria: zips.getByLocation(locationCoords.lat, locationCoords.lng).zip
          },
          {
            fieldName: 'animalLocationDistance',
            operation: 'radius',
            criteria: distance
          }
        ],
        fields: [
          'animalID',
          'animalLocationCoordinates',
          'animalName',
          'animalSex',
          'animalGeneralAge',
          'animalBreed',
        	'animalOKWithCats',
        	'animalOKWithDogs',
        	'animalOKWithKids',
          'animalPictures',
          'animalDescription',
          'animalAdoptionPending'
        ]
      }
    };

    if (sex && sex.length < 2) {
      body.search.filters.push({
        fieldName: 'animalSex',
        operation: 'equals',
        criteria: sex
      });
    }

    if (age && age.length < 4) {
      body.search.filters.push({
        fieldName: 'animalGeneralAge',
        operation: 'equals',
        criteria: age
      });
    }

    if (goodWith && goodWith.find(el => el === 'Kids')) {
      body.search.filters.push({
        fieldName: 'animalOKWithKids',
  	    operation: 'equals',
        criteria: 'Yes'
      });
    }

    if (goodWith && goodWith.find(el => el === 'Dogs')) {
      body.search.filters.push({
        fieldName: 'animalOKWithDogs',
  	    operation: 'equals',
        criteria: 'Yes'
      });
    }

    if (goodWith && goodWith.find(el => el === 'Cats')) {
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
