import Ember from 'ember';

export default Ember.Component.extend({
  starredQuestions: Ember.inject.service(),
  actions: {
    transitionToQuestion(question) {
      this.sendAction('transitionToQuestion', question);
    }

  }
});
