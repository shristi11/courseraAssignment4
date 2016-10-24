(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoriesController', MenuCategoriesController);


MenuCategoriesController.$inject = ['MenuDataService'];
function MenuCategoriesController(MenuDataService) {
  var menuList = this;
  
   var promise =  MenuDataService.getMenuCategories();

  promise.then(function (response) {
    menuList.items = response.data;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
