import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.toggleProperty('updateQuestionForm');
    },
    updateQuestion(question) {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        user: this.get('user'),
        note: this.get('note'),
      };
      console.log('params' + params);
      console.log('question' + question);
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
