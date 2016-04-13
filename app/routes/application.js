import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    },
    transitionToQuestion(question) {
      this.transitionTo('/question/' + question.id)
    }
  }
});
