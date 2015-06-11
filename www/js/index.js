require( 'babelify/polyfill' );

import angular from 'angular';

var app = angular.module( 'TodoSample', [ 'ngMaterial' ] );

app.controller( 'TodoListController', require( './controllers/TodoListController' ) );
app.factory( 'models/Todo', require( './models/Todo' ) );

console.log( 'hello world' );
