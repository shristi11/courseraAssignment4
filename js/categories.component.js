(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'pages/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
