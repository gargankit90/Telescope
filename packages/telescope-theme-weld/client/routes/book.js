Router.route('/about', {
  name: 'about',
  loadingTemplate: 'loadingWeld',
  template: getTemplate('calendar'),
  data: function() {
    return Meteor.user();
  },
});