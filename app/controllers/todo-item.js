import Ember from 'ember';
 
export default Ember.Controller.extend({
  actions: {
    editTodo: function() {
      this.set('model.isEditing', true);
    }
  }

});