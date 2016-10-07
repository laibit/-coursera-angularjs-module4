(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/templates/categories-list.template.html',
  bindings: {
    items: '<'
  }
});

})();