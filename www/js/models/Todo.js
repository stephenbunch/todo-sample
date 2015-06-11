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
      return this.completed;
    }

    set completed( value ) {
      this.completed = value;
    }

    static async findAllAsync() {
      var rsp = await $http.get( '/api/todos' );
      return rsp.data.map( x => new Todo( x ) );
    }
  };
}];
