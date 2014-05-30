'use strinct';


describe('buildsControllerApp', function() {
    //load the controller's module
    beforeEach(module('app'));

    var scope, q;
    var mvBuild;
    var blds, bld;

   
    //Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, $q) {
        q = $q;
        scope = $rootScope.$new();
      
    }));
     beforeEach(inject(function(_mvBuild_) {
        mvBuild =   _mvBuild_;
         blds = mvBuild.getAllBuilds();
         bld = mvBuild.GetBuildDetail(1);
     }));

    it( 'builds is defined', inject( function ( $rootScope ) {
      //  scope.init();
        $rootScope.$apply();
        expect(scope.builds)["defined"];
    }) );

   

     it('get correct build count',  function (done) {
       // scope.init();
       // scope.$apply();
         done();
         expect(blds.count).equal(2);

    });

      it('get biuld details',  function (done) {
       // scope.init();
       // scope.$apply();
         done();
        
         expect(blds.count).equal(2);

    });

  
});
