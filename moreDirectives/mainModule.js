var app = angular.module("mainModule",["subModule","ngTagsInput"]);

app.controller('MainCtrl', function($scope) {
  $scope.tags = [
    { text: 'Tag1' },
    { text: 'Tag2' },
    { text: 'Tag3' }
  ];
});