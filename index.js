import express from 'express';
import path from 'path';
import helmet from 'helmet';
import compression from 'compression';

const app = express();

app.use(helmet());
app.use(compression());

/*** For production use ***
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
*/

app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});
