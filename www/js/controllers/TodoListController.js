export default [ '$scope', 'models/Todo', async function( $scope, Todo ) {
  var todos = await Todo.findAllAsync();
  $scope.todos = todos;
  $scope.toggle = function (id) {
    for(var i=0; i < todos.length; ++i) {
      if(todos[i]["id"] === id) {
        todos[i].completed = ! todos[i].completed;
      }
    }

    Todo.saveData(todos);
  };
  $scope.$evalAsync();
}];
