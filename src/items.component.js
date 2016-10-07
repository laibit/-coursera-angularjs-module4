(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/templates/items-list.template.html',
  bindings: {
    items: '<'
  }
});

})();