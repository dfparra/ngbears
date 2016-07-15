
(function(){
  angular.module('ngbears') //getter
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'BearService'];

  function MainController($scope, BearService){
    $scope.bears = BearService.bears;
    $scope.create = createBear;
    $scope.delete = deleteBear;
    getBears();

    function getBears(){
      BearService.readAll()
                  .then(function(){
                    $scope.bears = BearService.bears;
                    // console.log($scope.bears);
                  })
    }

    function createBear(size,color){
      BearService.create(size,color)
                  .then(function(){
                    $scope.size = '';
                    $scope.color = '';
                    getBears();
                  })
        // }
    }

    function deleteBear(id){
      console.log(id);
      BearService.delete(id)
                  .then(function(){
                    getBears();
                  })
    }

  }
})();
