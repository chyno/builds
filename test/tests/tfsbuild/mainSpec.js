'use strinct';


describe('buildsControllerApp', function() {
    //load the controller's module
    beforeEach(module('app'));

    var scope, q;
    var mvBuildsMainCtrl;


   
    //Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, $q, _mvBuild_) {
        q = $q;
        scope = $rootScope.$new();
        mvBuildsMainCtrl = _mvBuild_;
    }));
    


    it( 'should request latest build', function () {
        var spy = sinon.spy( mvBuildsMainCtrl, "getLastBuild" );
        scope.init();
        // spyOn(buidService, "getLastBuild").andCallThrough();  
        expect( spy.calledOnce ).to.be.true;


    });

    it( 'can get latest build', inject( function ( $rootScope ) {
        scope.init();
        $rootScope.$apply();
        expect(scope.builds)["defined"];
    }) );
});
