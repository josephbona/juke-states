'use strict';

juke.config(function($stateProvider) {
  $stateProvider.state('albums', {
    url: '/albums',
    templateUrl: '/js/album/templates/album-list.html',
    controller: 'AlbumsCtrl'
  });

  $stateProvider.state('album', {
    url: '/albums/:id',
    templateUrl: '/js/album/templates/album.html',
    controller: 'AlbumCtrl'
  });
});