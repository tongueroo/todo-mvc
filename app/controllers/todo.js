import Ember from 'ember';
 
export default Ember.ObjectController.extend({
  actions: {
    editTodo: function() {
      console.log("editTodo");
      this.set('isEditing', true);
    },
    acceptChanges: function() {
      console.log("acceptChanges");
        // Remove is editing property
        this.set('isEditing', false);

        // If the todo is empty, delete it
        // otherwise save it with the new title
        console.log("333");
        console.log(this.get('model.title'));
        if(Ember.isEmpty(this.get('model.title'))) {
            this.send('removeTodo');
        } else {
          var todo = this.get('model');
          // console.log("111");
          // console.log(todo.get("title"));
          // console.log("222");
          // console.log(todo.get("model.title"));
          todo.save();
        }
    },
    removeTodo: function() {
        var todo = this.get('model');
        todo.deleteRecord();
        todo.save();
    }
  },

  isEditing: false

});