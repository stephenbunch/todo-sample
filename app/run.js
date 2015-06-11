import express from 'express';
import browserify from 'browserify-middleware';
import path from 'path';
import shim from 'browserify-global-shim';
import babelify from 'babelify';

global.PROJECT_DIR = path.resolve( __dirname, '../' );

var app = express();

app.get(
  '/app.js',
  browserify( `${ PROJECT_DIR }/www/js/index.js`, {
    transform: [
      babelify.configure({
        optional: [ 'es7.asyncFunctions' ]
      }),
      shim.configure({
        'angular': 'angular'
      })
    ]
  })
);

app.get( '/', function( req, res ) {
  res.sendFile( `${ PROJECT_DIR }/www/index.html` );
});

app.get( '/views/*', function( req, res ) {
  res.sendFile( `${ PROJECT_DIR }/www` + req.path );
});

[
  require( './controllers/TodoController' )
].forEach( controller => {
  app.use( controller.path, controller );
});

app.listen( process.env.PORT || 8000, function() {
  console.log( `Server started at http://localhost:${ process.env.PORT || 8000 }` );
});
