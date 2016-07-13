
(function(){
  angular.module('ngbears') //getter
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'BearService'];

  function MainController($scope, BearService){
    // console.log('Main!');
    $scope.message = 'Hey now! What that is sound?';
    $scope.messages = 'some more stuff';
    var msg = 'a non scoped messaged';
    // console.log(BearService);


    var bears;
    BearService.readAll()
                .then(function(){
                  bears = BearService.bears;
                  console.log(bears);
                });
    BearService.create();
    BearService.delete();
    BearService.update();

  }
})();
