var app = angular.module('nbaRoutes', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.interceptors.push('httpRequestInterceptor');

    $stateProvider
      .state('home', {
        url: '/' ,
        controller: 'homeCtrl' ,
        templateUrl: 'js/home/homeTmpl.html' ,
        resolve: {
                allTeamData: function(homeService) {
                  return homeService.getAllTeamData();
                }
        }
      })
      .state('teams', {
        url: '/teams/:team' ,
        controller: 'teamCtrl' ,
        templateUrl: 'js/teams/teamTmpl.html' ,
        resolve: {
                  teamData: function(teamService, $stateParams) {
                    return teamService.getTeamData($stateParams.team);
                  }
            }
      })

      $urlRouterProvider.otherwise('/');

});
