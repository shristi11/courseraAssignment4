(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states 
  $stateProvider
    
    .state('home', {
      url         : '/',
      templateUrl : 'pages/home.template.html'
    })

   
    .state('categories', {
      url          : '/categories',
      templateUrl  : 'pages/main-categories.template.html',
      controller   : 'CategoriesController as categories',
      resolve      : {
                        menuCategories : ['MenuDataService', function (MenuDataService) {
                          return MenuDataService.getAllCategories();
                        }]
                      }
    })

   
    .state('items', {
      url          : '/items/{category}',
      templateUrl  : 'pages/main-items.template.html',
      controller   : "ItemsController as menuItems",
      resolve      : {
                        categoryItems: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                          return MenuDataService.getItemsForCategory($stateParams.category);
                        }]
                      }
    });
}

})();
