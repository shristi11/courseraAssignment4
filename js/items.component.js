(function () {
'use strict';

angular.module('MenuApp')
.component('menuItems', {
  templateUrl: 'pages/items.template.html',
  bindings: {
    items: '<',
    name: '<',
  }
});

})();
