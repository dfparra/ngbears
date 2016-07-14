
(function(){
  angular.module('ngbears') //getter
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'BearService'];

  function MainController($scope, BearService){
    // console.log('Main!');
    // $scope.message = 'Hey now! What that is sound?';
    // $scope.messages = 'some more stuff';
    // var msg = 'a non scoped messaged';
    // console.log(BearService);
    $scope.bears = BearService.bears;
    $scope.create = createBear;
    $scope.delete = deleteBear;
    getBears();

    // var bears;
    // BearService.readAll()
    //             .then(function(){
    //               bears = BearService.bears;
    //               console.log(bears);
    //             });
    // BearService.create();
    // BearService.delete();
    // BearService.update();

    function getBears(){
      BearService.readAll()
                  .then(function(){
                    $scope.bears = BearService.bears;
                    // console.log($scope.bears);
                  })
    }

    function createBear(size,color){
      // if(isEmpty(size) || isEmpty(color){
      //   getBears();
      // } else{

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
