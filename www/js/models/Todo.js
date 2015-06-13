export default [ '$http', function( $http ) {
  return class Todo {
    constructor( data ) {
      this.data = data || {
        id: null,
        description: '',
        completed: false
      };
    }

    get id() {
      return this.data.id;
    }

    get description() {
      return this.data.description;
    }

    set description( value ) {
      this.data.description = value;
    }

    get completed() {
      return this.data.completed;
    }

    set completed( value ) {
      this.data.completed = value;
    }

    static async findAllAsync() {
      var rsp = await $http.get( '/api/todos' );
      return rsp.data.map( x => new Todo( x ) );
    }

    static saveData(todos) {
      $http({
        url: '/api/todos/saveData',
        method: "POST",
        data: todos,
        headers: {'Content-Type': 'application/json'}
      }).
        success(function(data, status, headers, config) {
        }).
        error(function(data, status, headers, config) {
        });
    }
  };
}];
