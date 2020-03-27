const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const OngControler = require ('./controler/OngControler');
const IncidentControler = require ('./controler/IncidentControler');
const ProfileControler = require ('./controler/ProfileControler');
const SessionControler = require ('./controler/SessionControler');


const routes = express.Router();

routes.get('/ongs',OngControler.index);
routes.post('/ongs', OngControler.create);

routes.post('/incidents', IncidentControler.create);
routes.get('/incidents',IncidentControler.index);
routes.delete('/incidents/:id',IncidentControler.delete);

routes.get('/profile', ProfileControler.index);

routes.post('/session', SessionControler.create);




    module.exports = routes ;