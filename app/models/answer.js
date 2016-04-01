import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  date: DS.attr(),
  answer: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
