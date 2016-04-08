import Ember from 'ember';

export default Ember.Component.extend({

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
}

});
