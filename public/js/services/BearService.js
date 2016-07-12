

(function(){
  angular.module('ngbears')
          .factory('BearService', BearService);

  BearService.$inject = ['$http'];

  function BearService($http){
    var o = {
      create: createBear, //function
      readAll: getAll, //function
      update: updateBear, //function
      delete: deleteBear, //function
      bears : [] //data
    };
    return o;

    function createBear(){}
    function getAll(){
      return $http.get('https://quiet-refuge-27140.herokuapp.com/todos')
                  .then(function(response){
                    o.bears = response.data;
                    // console.log('BearService bears', bears);
                  });
    }
    function updateBear(){}
    function deleteBear(){}

  }

})()
