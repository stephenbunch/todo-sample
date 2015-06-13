import { Router } from 'express';
import fs from 'fs';

var controller = new Router();

controller.path = '/api/todos';

controller.get( '/', function( req, res ) {
  console.log("get");
  var todos = fs.readFileSync(`${ PROJECT_DIR }/data/todos.json`, 'utf8');
  console.log(todos);
  res.send( todos );
});

controller.post( '/saveData', function( req, res ) {
  var data = new Array();
  for(var i = 0 ; i < req.body.length ; ++i ) {
    data.push(req.body[i].data);
  }

  console.log(data);

  fs.writeFile(`${ PROJECT_DIR }/data/todos.json`, JSON.stringify(data), function(err) {
    if(err) {
      console.log(err);
    }
  });

  var todos = fs.readFileSync(`${ PROJECT_DIR }/data/todos.json`, 'utf8');
  console.log(todos);
  res.send( todos );
});

export default controller;
