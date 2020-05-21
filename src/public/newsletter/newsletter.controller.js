(function () {
"use strict";

angular.module('public')
.controller('NewsLetterController', NewsLetterController);

NewsLetterController.$inject = ['customer','InfoService'];
function NewsLetterController(customer,InfoService) {
  var $ctrl = this;
  $ctrl.customer=customer;

  console.log("newsletter ctrl");




  $ctrl.getMenuItem = function (menuItem) {

   InfoService.getMenuItem(menuItem);

   };
//  $ctrl.menuCategories = menuCategories;
$ctrl.submit = function () {
  console.log($ctrl.customer);

   $ctrl.completed = true;
 };
}


})();
