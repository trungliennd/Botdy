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
                    animate($('.diagram.openrates .messenger')[0], 500);
                    animate($('.diagram.openrates .mail')[0], 1000);
                    animate($('.diagram.click .messenger')[0], 1500);
                    animate($('.diagram.click .mail')[0], 2000);
                    if ($('html').width() < 544) {
                        animate($('.facts .item.users')[0], 800);
                        animate($('.facts .item.average')[0], 800);
                        animate($('.facts .item.ctr')[0], 1200);
                    } else {
                        animate($('.facts .item.users')[0], 2500);
                        animate($('.facts .item.average')[0], 3000);
                        animate($('.facts .item.ctr')[0], 3500);
                    }
                    if ($('html').width() < 544) {
                        animate($('.section_templates>.overflow')[0], 0);
                        return animate($('.section_clients>.overflow')[0], 0);
                    }
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


        $((function (_this) {
            var overlay = $('.overlay');
            var mainPopUp = $('.main-popup');
            var signIn = $('#sign-in');
            var register = $('#register');
            var formSignIn = $('form.sign-in');
            var formRegister = $('form.register');

        })(this));






       /* $((function (_this) {
            function initialize() {
                var mapCanvas = document.getElementsByClassName("map");
                var myLatlng = new google.maps.LatLng(53.3333,-3.08333);
                var imagePath = 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png'
                var mapOptions = {
                    zoom: 11,
                    center: myLatlng,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }
                var map = new google.maps.Map(mapCanvas, mapOptions);
                //Callout Content
                var contentString = 'Some address here..';
                //Set window width + content
                var infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    maxWidth: 500
                });

                //Add Marker
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    icon: imagePath,
                    title: 'image title'
                });

                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map,marker);
                });

                //Resize Function
                google.maps.event.addDomListener(window, "resize", function() {
                    var center = map.getCenter();
                    google.maps.event.trigger(map, "resize");
                    map.setCenter(center);
                });
            }
        google.maps.event.addDomListener(window, 'load', initialize);
        }));*/

        ;return this}).call(App || {});
}]);