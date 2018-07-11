// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function ($routeProvider) {
    $routeProvider.
    // route for the home page
        when("/", {
            templateUrl: '../home/home.html',
            controller: 'mainController'
        })

    // route for the about page
        .when('/about', {
            templateUrl: '../home/about.html',
            controller: 'aboutController'
        })

    // route for the contact page
        .when('/tutorial', {
           templateUrl: '../home/tutorial.html',
           controller: 'tutorialController'
        });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function ($scope) {
        // create a message to display in our view
        $scope.message = 'An Angular Controller injects this text by using $scope. ';
    });

    scotchApp.controller('aboutController', function ($scope) {
       $scope.message = 'This site uses templateUrl and controllers.';
    });

    scotchApp.controller('tutorialController', function ($scope) {
       $scope.message = 'To learn more check out this great';
    });
})