import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  date: DS.attr(),
  reply: DS.attr(),
  score: DS.attr('number', {defaultValue: 1}),
  question: DS.belongsTo('question', {async: true})
});
