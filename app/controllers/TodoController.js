import { Router } from 'express';

var controller = new Router();

controller.path = '/api/todos';

controller.get( '/', function( req, res ) {
  res.sendFile( `${ PROJECT_DIR }/data/todos.json` );
});

export default controller;
