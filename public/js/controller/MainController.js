
(function(){
  angular.module('ngbears') //getter
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'BearService'];

  function MainController($scope, BearService){
    $scope.bears = BearService.bears;
    $scope.create = createBear;
    $scope.delete = deleteBear;
    $scope.edit = editBear;
    $scope.update = updateBear;
    getBears();

    function editBear(bear){
      bear.editing = true;
    }

    function updateBear(bear){
      bear.editing = false;
      bear.size = bear.size;
      bear.color = bear.color;

      //Implement these in frontend
      bear.isAwake = "";
      bear.hasKids = "";
      bear.isHungry = "";

      BearService.update(bear.id,bear)
                  .then(function(){
                    getBears();
                  });

    }

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
