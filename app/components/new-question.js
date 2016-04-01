import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionForm: false,
  actions: {
    newQuestionForm() {
      this.set('newQuestionForm', true);
    },
    saveQuestion() {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        user: this.get('user'),
        note: this.get('note'),
      };
      this.set('newQuestionForm', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
