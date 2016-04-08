import Ember from 'ember';

export function questionIcon(params) {
  var question = params[0];

  if(question.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<p>New!</p>');
  }
}

export default Ember.Helper.helper(questionIcon);
