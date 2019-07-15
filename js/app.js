var myApp = angular.module('peliculasApp',[]);

(function(app){

"use strict";
  app.controller("listadoCtrl", function($scope){

 

  });



"use strict";
app.controller("buscadorCtrl", function($scope){

 var vm = this;
  vm.sendEvent = function() {
    $scope.$parent.$broadcast('msg', vm.texto);
  };

  });


app.controller('mostradorCtrl',['$scope','$http',function($scope,$http){

var apiKey="f4b67d4d7d17e94f471c5a156fa73020";

var vm = this;
  vm.peliculas = {};
  
  vm.data = 'Nothing here...';
  $scope.$on('msg', function(evt, msg){
    vm.data = msg;

    $http.jsonp(`https://api.themoviedb.org/3/search/movie?query=${ vm.data }&sort_by=popularity.desc&api_key=${ apiKey }&language=es&callback=JSON_CALLBACK`)
      .success(function(data){

      vm.peliculas = data.results;

    });
  });

  }]);


})(myApp);
