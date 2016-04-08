import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionForm: false,
  actions: {
    newQuestionForm() {
      this.toggleProperty('newQuestionForm');
    },
    saveQuestion(params) {
      this.sendAction('saveQuestion', params);
      this.set('newQuestionForm', false);
    }
  }
});
