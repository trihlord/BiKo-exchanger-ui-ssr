import api from 'routes/api'
import root from 'routes/root'
import bodyParser from 'body-parser'
import compression from 'compression'
import express from 'express'
import helmet from 'helmet'

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.static('public'));
app.use(bodyParser.json())

app.use('/api', api)
app.use('/', root);

const port = process.env.PORT || 3030;

app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`);
});