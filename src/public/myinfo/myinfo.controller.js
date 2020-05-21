(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['customer', 'ApiPath'];
function MyInfoController(customer,ApiPath) {
  var $ctrl = this;
  $ctrl.customer=customer;
  $ctrl.basePath=ApiPath;
  console.log("myinfo ctrl");
//  $ctrl.menuCategories = menuCategories;
}


})();
