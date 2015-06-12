import 'babelify/polyfill';
import angular from 'angular';

var app = angular.module( 'TodoSample', [ 'ngMaterial' ] );

import TodoListController from './controllers/TodoListController';
import Todo from './models/Todo';

app.controller( 'TodoListController', TodoListController );
app.factory( 'models/Todo', Todo );

console.log( 'hello world' );
