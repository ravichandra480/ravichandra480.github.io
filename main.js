/**
 * Created by Ravi on 11-07-2015.
 */
var app = angular.module('CvApp', ['ngMaterial', 'ngMap', 'typer']);

app.controller('CvCtrl', ['$scope', '$log', function($scope, $log){
    $scope.user = {
        title: 'Developer',
        email: 'ipsum@lorem.com',
        firstName: '',
        lastName: '' ,
        company: 'Google' ,
        address: '1600 Amphitheatre Pkwy' ,
        city: 'Mountain View' ,
        state: 'CA' ,
        biography: '',
        postalCode : '94043'
    };
}]);

app.directive('smoothScroll', function() {
    return {
        restrict: 'EA',
        scope: {},
        controller: function($scope, $element) {
            smoothScroll.init({
                speed: 1000, // Integer. How fast to complete the scroll in milliseconds
                easing: 'easeInOutCubic', // Easing pattern to use
                updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
                offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
                callback: function ( toggle, anchor ) {} // Function to run after scrolling
            });
        }
    };
});

app.directive('niceScroll', function() {
    return {
        restrict: 'EA',
        scope: {},
        link: function($scope, $element) {
            $("body").niceScroll();
        }
    };
});

app.directive('skillBar', function() {
    return {
        restrict: 'EA',
        scope: {},
        link: function($scope, $element) {
            jQuery('.skillbar').each(function() {
                jQuery(this).appear(function() {
                    jQuery(this).find('.count-bar').animate({
                        width:jQuery(this).attr('data-percent')
                    },3000);
                    var percent = jQuery(this).attr('data-percent');
                    jQuery(this).find('.count').html('<span>' + percent + '</span>');
                });
            });
        }
    };
});

app.directive('headerAnim', function() {
    return {
        restrict: 'EA',
        scope: {},
        link: function($scope, $element) {
            var handler,
            displayMenu = function(){
                if ( $element.hasClass('top-nv') ) {
                    $element.removeClass('top-nv');
                }
            },
            hideMenu = function(){
                if ( !$element.hasClass('top-nv') ) {
                    $element.addClass('top-nv');
                }
            },
            lastScrollTop = 0, direction;
            if ( handler != undefined ) {
                $(window).unbind('scroll', handler);
            }
            var handler = function(e){
                console.debug(e.currentTarget.scrollY);
                if (e.currentTarget.scrollY > lastScrollTop){
                    direction = 'down';
                } else {
                    direction = 'up';
                }
                lastScrollTop = e.currentTarget.scrollY;
                // check is user scrolling to up or down?
                if ( direction == 'up' ) {
                    // so you are scrolling to up...

                    // lets display menu
                    displayMenu();

                } else {
                    // so you are scrolling to down...

                    // se we have to hide only the small menu because the normal menu isn't sticky!
                    hideMenu();
                }
            };
            $(window).bind('scroll', handler);
        }
    };
})
