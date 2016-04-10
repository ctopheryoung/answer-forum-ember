import Ember from 'ember';

export function questionIcon(params) {
  var question = params[0];
  console.log(question.title);
  if(question.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="noAnswerFlag">Answer now!</span>');
  }
}

export default Ember.Helper.helper(questionIcon);
