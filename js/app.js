angular.module('portfolio', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    
    $stateProvider
    .state('Home', {
        url: '/',
        templateUrl: 'templates/projects.html',
        controller: 'mainCtrl'
    })
    .state('About', {
        url: '/About',
        templateUrl: 'templates/about.html',
        controller: 'mainCtrl'
    })
    
    $urlRouterProvider.otherwise('/');
    
})