import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newQuestionForm() {
      this.set('newQuestionForm', true);
    },
    saveQuestion() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        date: this.get('date') ? this.get('date') : "",
        user: this.get('user') ? this.get('user') : "",
        note: this.get('note') ? this.get('note') : "",
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
