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

  sortBy: ['score:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
  actions: {
    newAnswer(params) {
      this.sendAction('newAnswer', params);
    },
    updateAnswer(params, answer) {
      this.sendAction('updateAnswer', params, answer);
    }
  }
});
