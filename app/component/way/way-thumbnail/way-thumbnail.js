'use strict';

//this should be up in here

require('./_way-thumbnail.scss');

const editWayComponent = require('../..//../dialog/way/edit-way/edit-way.js');

module.exports = {
  template: require('./way-thumbnail.html'),
  controller: ['$log', '$http', '$interval', 'NgMap', 'wayService', '$mdMedia', '$scope', '$mdDialog', WayThumbnailController],
  controllerAs: 'wayThumbnailCtrl',
  bindings: {
    ways: '<'
  }
};

function WayThumbnailController($log, $http, $interval, NgMap, wayService, $mdMedia, $scope, $mdDialog) {
  $log.debug('WayThumbnailController');

  this.editWay = function ($event, bindFlag, way) {
    const dialogConfig = {
      fullscreen: !$mdMedia('gt-sm'),
      targetEvent: $event,
      scope: $scope.$new(bindFlag),
      resolve: {
        way: function() {
          return way;
        }
      },
    };
    $mdDialog.show(Object.assign(editWayComponent, dialogConfig));
  };



  //vars
  // this.way = {}; //binded???
}
