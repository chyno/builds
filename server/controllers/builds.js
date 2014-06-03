 
//var builds = [{ id: 1, name: 'build 1 node', buildDefinition: 'this was a successful build it went to production' }, { id: 2, name: 'build 2 node', buildDefinition: 'unit test failed did not deply' }];
var builds = [];
var edge = require('edge');


exports.getBuilds = function(req, res) {
    var data = { pageNumber: 2, pageSize: 3 };


    var tfsBuilds = require('edge').func({
        assemblyFile: 'TFSBuildsConnector.dll',
        typeName: 'TFSBuildsConnector.Startup',
        methodName: 'Invoke' // Func<object,Task<object>>
    });

    tfsBuilds(data, function(error, result) {
        if (error) {
            logError(error, res);
            return;
        }
        if (result) {
            res.send(result);
        }
        //res.send(builds);
    });
};

exports.getBuildsById = function(req, res) {
    res.send(builds.filter(function(build) { return build.id === req.params.id; }));
    
}