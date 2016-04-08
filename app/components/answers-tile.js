import Ember from 'ember';

export default Ember.Component.extend({
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
