import Ember from 'ember';

export default Ember.Component.extend({
  manageAnswerLinks: false,
  actions: {
    updateAnswer(answer, params) {
      this.sendAction('updateAnswer', answer, params);
    },
    manageAnswerToggle: function() {
      this.toggleProperty('manageAnswerLinks');
    }
  }
});
