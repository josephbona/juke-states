'use strict';

juke.config(function($stateProvider) {
  $stateProvider.state('albums', {
    url: '/albums',
    templateUrl: '/js/album/templates/album-list.html',
    resolve: {
      albums: function(AlbumFactory) {
        return AlbumFactory.fetchAll();
      }
    },
    controller: 'AlbumsCtrl'
  });

  $stateProvider.state('album', {
    url: '/albums/:id',
    templateUrl: '/js/album/templates/album.html',
    resolve: {
      album: function(AlbumFactory, $stateParams) {
        return AlbumFactory.fetchById($stateParams.id);
      }
    },
    controller: 'AlbumCtrl'
  });
});