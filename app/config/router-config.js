'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/join#signup');
  $urlRouterProvider.when('/', '/join#signup');
  $urlRouterProvider.when('/signup', '/join#signup');
  $urlRouterProvider.when('/login', '/join#login');

  let states = [
    {
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    },
    {
      name: 'landing',
      url: '/join',
      template: require('../view/landing/landing.html'),
      controller: 'LandingController',
      controllerAs: 'landingCtrl'
    },
    {
      name: 'message',
      url: '/message',
      template: require('../view/message/message.html'),
      controller: 'MessageController',
      controllerAs: 'messageCtrl'
    },
    {
      name: 'way',
      url: '/way',
      template: require('../view/way/way.html'),
      controller: 'WayController',
      controllerAs: 'wayCtrl'
    }
  ];

  states.forEach( state => {
    $stateProvider.state(state);
  });
}
