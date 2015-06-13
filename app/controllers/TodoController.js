import { Router } from 'express';
import fs from 'fs';

var controller = new Router();

controller.path = '/api/todos';

controller.get( '/', function( req, res ) {
  fs.readFile(`${ PROJECT_DIR }/data/todos.json`, 'utf8', function(err, data) {
    if(err) throw err;

    res.send(data);
  });
});

controller.post( '/saveData', function( req, res ) {
  var data = new Array();
  for(var i = 0 ; i < req.body.length ; ++i ) {
    data.push(req.body[i].data);
  }

  fs.writeFile(`${ PROJECT_DIR }/data/todos.json`, JSON.stringify(data), function(err) {
    if(err) {
      console.log(err);
    }
  });

  res.send('OK');
});

export default controller;
