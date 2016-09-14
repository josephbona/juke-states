'use strict';

juke.config(function($stateProvider) {

  // all artists
  $stateProvider.state('artists', {
    url: '/artists',
    templateUrl: '/js/artist/templates/artist-list.html',
    resolve: {
      artists: function(ArtistFactory) {
        return ArtistFactory.fetchAll();
      }
    },
    controller: 'ArtistsCtrl'
  });

  // single artist
  $stateProvider
    .state('artist', {
      url: '/artist/:id',
      templateUrl: '/js/artist/templates/artist.html',
      resolve: {
        artist: function($stateParams, ArtistFactory) {
          return ArtistFactory.fetchById($stateParams.id);
        }
      },
      controller: 'ArtistCtrl'
    })
    .state('artist.albums', {
      url: '/albums',
      templateUrl: 'js/artist/templates/albums.html'
    })
    .state('artist.songs', {
      url: '/songs',
      templateUrl: 'js/artist/templates/songs.html'
    });

});