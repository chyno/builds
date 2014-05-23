'use strinct';


describe('buildsControllerApp', function() {
    //load the controller's module
    beforeEach(module('app'));

    var scope, q;
    var mvBuild;
    var blds;

   
    //Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, $q) {
        q = $q;
        scope = $rootScope.$new();
      
    }));
    

    it( 'builds is defined', inject( function ( $rootScope ) {
      //  scope.init();
        $rootScope.$apply();
        expect(scope.builds)["defined"];
    }) );

    beforeEach(inject(function(_mvBuild_) {
        mvBuild =   _mvBuild_;
        blds = mvBuild.getAllBuilds();
    }));

     it('get build',  function (mvBuild) {
       // scope.init();
       // scope.$apply();
         
         expect(blds);

    });

  
});
