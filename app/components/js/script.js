// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function ($routeProvider) {
    $routeProvider.// route for the home page
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
});
    // create the controller and inject Angular's $scope
scotchApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'An Angular Controller injects this text by using $scope.';
});

scotchApp.controller('aboutController', function ($scope) {
    $scope.message = 'This site uses templateUrl and controllers.';
});

scotchApp.controller('tutorialController', function ($scope) {
    $scope.message = 'To learn more check out this great';
});
var animate, scale;
animate = (function (_this) {
    return function (element, delay) {
        var func;
        if (element) {
            func = function (entries) {
                return entries.forEach(function (e) {
                    if (e.intersectionRatio > 0.9) {
                        return setTimeout(function () {
                            return $(element).addClass('animate');
                        }, delay);
                    }
                });
            };
            return (new IntersectionObserver(func, {
                rootMargin: '0px',
                threshold: 1.0
            })).observe(element);
        }
    };
})(this);

scotchApp.run(['$rootScope', function ($rootScope) {
    var App = (function () {
        var self = this;
        this.module_name = 'App';
        var animate, scale;
        $((function (_this) {
            return function () {
                if ($('html').width() >= 544) {
                    $(window).load(function () {
                        return window.requestAnimationFrame(function () {
                            return setTimeout(function () {
                                return $('.section_welcome .iphone').addClass('animate');
                            }, 200);
                        });
                    });
                } else {
                    $rootScope.$on('$viewContentLoaded', function () {
                        $('.section_welcome .iphone .phone').css({
                            'transition': 'none',
                            'opacity': 1,
                            'transform': 'translateY(0) translateZ(1px)'
                        });
                    });
                }
                $rootScope.$on('$viewContentLoaded', function () {
                    animate($('.section_automate .flag')[0], 500);
                });
            };
        })(this));

        $((function (_this) {
            return function () {
                return $(window).scroll(function () {
                  var all, avail, dy, result, scrollTop, st;
                  scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
                  dy = -128 * scrollTop / screen.availHeight;
                  $('.iphone .appicon').css('transform', 'translateY(' + dy + 'px)');
                 /* console.log("dy is: " + dy);
                  console.log("pageYOffst is: " + window.pageYOffset);
                  console.log("scroll element is: " + document.documentElement.scrollTop);
                  console.log("scroll body is: " + document.body.scrollTop);
                  console.log("screen is: " + screen.availHeight);*/
               });
            };
        })(this));


        animate = (function (_this) {
            return function (element, delay) {
                var func;
                if (element) {
                    func = function (entries) {
                        return entries.forEach(function (e) {
                            if (e.intersectionRatio > 0.9) {
                                return setTimeout(function () {
                                    return $(element).addClass('animate');
                                }, delay);
                            }
                        });
                    };
                    return (new IntersectionObserver(func, {
                        rootMargin: '0px',
                        threshold: 1.0
                    })).observe(element);
                }
            };
        })(this);

        scale = (function (_this) {
            return function () {
                var s, w;
                w = $('html').width();
                if (w < 1024) {
                    if (w < 544) {
                        s = w / 320;
                        return $('.scale').css('transform', 'scale(' + s + ')');
                    } else {
                        s = w / 1024;
                        return $('.scale').css('transform', 'scale(' + s + ')');
                    }
                } else {
                    return $('.scale').css('transform', '');
                }
            }
        })(this);

        $(window).resize((function (_this) {
            return function () {
                return scale();
            };
        })(this));

        $((function (_this) {
            return function () {
                $rootScope.$on('$viewContentLoaded', function () {
                    return scale();
                });
            }
        })(this));


        ;
        return this
    }).call(App || {});
}]);