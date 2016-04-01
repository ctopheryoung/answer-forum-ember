import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        question: this.get('question'),
        date: this.get('date'),
        user: this.get('user'),
        note: this.get('note'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', post, params);
    }
  }
});
