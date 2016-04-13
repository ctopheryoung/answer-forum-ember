import Ember from 'ember';

export default Ember.Component.extend({
  starredQuestions: Ember.inject.service(),

  answerCount: Ember.computed('question', function() {
    var answerCount = this.get('question.answers').get('length');
    if(answerCount === 1) {
      return answerCount + " answer";
    } else {
      return answerCount + " answers";
    }
  }),

  actions: {
  goToQuestion(question) {
    this.sendAction('goToQuestion', question);
  },
  starQuestion(question) {
    this.get('starredQuestions').add(question);
  }
}

});
