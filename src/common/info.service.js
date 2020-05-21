(function () {
"use strict";

angular.module('common')
.service('InfoService', InfoService);


InfoService.$inject = ['$http', 'ApiPath'];


function InfoService($http, ApiPath) {
  var service = this;
  service.customer={
  firstname:"",
  lastname:"",
  email:"",
  phone:"",
  favorite:"",
  isfavoritevalid:false,
  menuItem:undefined

};
service.getCustomer = function () {
return service.customer;
};

service.getMenuItem = function (short_name) {

  $http.get(ApiPath + '/menu_items/' + short_name + '.json').then(function (response) {
    console.log(response.data);
    service.customer.menuItem=response.data;
    service.customer.isfavoritevalid=true;
  }).catch(error => {
    service.customer.menuItem=undefined;
    service.customer.isfavoritevalid=false;
    //console.error('onRejected function called: ' + error.message);
  }).finally(function() {  });

};

}



})();
