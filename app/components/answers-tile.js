import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newAnswer(params) {
      this.sendAction('newAnswer', params);
    }
  }
});
