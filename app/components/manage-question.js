import Ember from 'ember';

export default Ember.Component.extend({
  manageQuestionLinks: false,
  actions: {
    updateQuestion(question, params) {
      this.sendAction('updateQuestion', question, params);
      this.set('manageQuestionLinks', false);
    },
    manageQuestionToggle: function() {
      this.toggleProperty('manageQuestionLinks');
    }
  }
});
