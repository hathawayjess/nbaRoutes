var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q, teamService){

  this.getAllTeamData = function() {
    var deferred = $q.defer();
    var allTeamData = [];

    teamService.getTeamData('losangeleslakers')
      .then(function(response) {
        response.homeTeamDisplay = 'Los Angeles Lakers';
        response.teamLogo = 'images/lakers-logo.png';
        allTeamData.push(response);
      })
    teamService.getTeamData('utahjazz')
        .then(function(response) {
          response.homeTeamDisplay = 'Utah Jazz';
          response.teamLogo = 'images/jazz-logo.png';
          allTeamData.push(response);

        })
    teamService.getTeamData('miamiheat')
          .then(function(response) {
            response.homeTeamDisplay = 'Miami Heat';
            response.teamLogo = 'images/heat-logo.png';
            allTeamData.push(response);
          })
          deferred.resolve(allTeamData);

          return deferred.promise;
  }


});
