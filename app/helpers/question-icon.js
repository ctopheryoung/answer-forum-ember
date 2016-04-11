import Ember from 'ember';

export function questionIcon(params) {
  var question = params[0];
  if(question.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="noAnswerFlag">Unanswered!</span>');
  } else if(question.get('answers').get('length') === 1){
    return Ember.String.htmlSafe('One answer.');
  } else {
    return Ember.String.htmlSafe(question.get('answers').get('length') + ' answers.');
  }
}

export default Ember.Helper.helper(questionIcon);
