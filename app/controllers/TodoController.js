import { Router } from 'express';

var controller = new Router();

controller.path = '/api/todos';

controller.get( '/', function( req, res ) {
  var todos = require( `${ PROJECT_DIR }/data/todos.json` );
  res.json( todos );
});

export default controller;
