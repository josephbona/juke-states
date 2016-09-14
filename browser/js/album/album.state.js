'use strict';

juke.config(function($stateProvider) {
  $stateProvider.state('albumsList', {
    url: '/albums',
    templateUrl: '/js/album/albumsList.html',
    controller: 'AlbumsCtrl'
  }).state('artistsList', {
    url: '/artists',
    templateUrl: '/js/artist/artistsList.html',
    controller: 'ArtistsCtrl'
  }).state('album', {
    url: '/albums/:id',
    templateUrl: '/js/album/album.html',
    controller: 'AlbumCtrl'
  })
});