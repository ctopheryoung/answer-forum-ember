import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  goToQuestion(question) {
    this.sendAction('goToQuestion', question);
  },
}

});
