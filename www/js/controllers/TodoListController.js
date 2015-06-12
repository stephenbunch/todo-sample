export default [ '$scope', 'models/Todo', async function( $scope, Todo ) {
  var todos = await Todo.findAllAsync();
  $scope.todos = todos;
  $scope.$evalAsync();
}];
