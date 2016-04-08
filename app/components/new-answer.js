import Ember from 'ember';

export default Ember.Component.extend({
  answerQuestionForm: false,
  actions: {
    answerQuestionForm() {
      this.toggleProperty('answerQuestionForm');
    },
    newAnswer() {
      var params = {
        user: this.get('user') ? this.get('user') : "",
        date: this.get('date') ? this.get('date') : "",
        reply: this.get('reply') ? this.get('reply') : "",
        question: this.get('question') ? this.get('question') : ""
      };
      this.set('answerQuestionForm', false);
      this.sendAction('newAnswer', params);
    }
  }
});
