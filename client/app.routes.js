// app.js
angular
    .module('ShowTrackerApp.routes', ['ui.router'])
    .config(routes);

// $URLROUTERPROVIDER: SAME THING AS URL PROVIDER?

function routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('home');

    $stateProvider
        
        .state('home', {
            url: '',
            templateUrl: './sections/whats_playing/whatsPlaying.view.html',
            controller: 'WhatsPlayingController',
            controllerAs: 'whatsPlaying'
        })        
        .state('trackedShows', {
            url: '/trackedShows',
            templateUrl: './sections/tracked_shows/trackedShows.view.html',
            controller: 'ShowtrackerController',
            controllerAs: 'trackedShows'
        })        
        .state('search', {
            url: '/search',
            templateUrl: './sections/searching/searching.view.html',
            controller: 'SearchingController',
            controllerAs: 'searching'
        })      
        .state('show', {
            url: '/show/:id',
            templateUrl: './sections/show/show.view.html',
            controller: 'ShowController',
            controllerAs: 'show'
        });

}