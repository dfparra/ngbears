

(function(){
  angular.module('ngbears')
          .factory('BearService', BearService);

  BearService.$inject = ['$http'];

  function BearService($http){
    var baseUrl = 'https://shielded-retreat-49451.herokuapp.com/';
    var o = {
      create: createBear, //function
      readAll: getAll, //function
      update: updateBear, //function
      delete: deleteBear, //function
      bears : [] //data
    };
    return o;

    function createBear(sz,clr){
      var info = {
        size: sz,
        color: clr
      };
      return $http.post(baseUrl + 'bears', info)
                  .then(function(response){
                    console.log('create',response);
                    getAll();
                  });
    }
    function getAll(){
      return $http.get(baseUrl + 'bears')
                  .then(function(response){
                    o.bears = response.data;
                    // console.log('BearService bears', bears);
                  });
    }
    // var newBear = {
    //   description: 'new description or at least the old one',
    //   isComplete: 'new comple status or at least the old one'
    // };
    function updateBear(id, newBear){
      return $http.put(baseUrl + 'bears/' + id, newBear)
                  .then(function(response){
                    console.log('update',response);
                    getAll();
                  });
    }
    function deleteBear(id){
      return $http.delete(baseUrl + 'bears/' + id)
                  .then(function(response){
                    console.log('delete',response);
                    getAll();
                  });

    }

  }

})()
