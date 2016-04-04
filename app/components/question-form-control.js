import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newQuestionForm() {
      this.set('newQuestionForm', true);
    },
    saveQuestion(params) {
      this.sendAction('saveQuestion', params);
      this.set('newQuestionForm', false);
    }
  }
});
