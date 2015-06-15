app.service('API', function ($http, $q) {
    var API_HOST = '';

    this.updateRecord = function (opt) {
        var deferred = $q.defer();
        $http.put( API_HOST + '/record?id=' + opt.id, opt).then(function (resp) {
            deferred.resolve('Record was update success');
        }, function (err) {
            deferred.reject(err)
        });
        return deferred.promise;
    };

    this.getRecordByID = function (id) {
        var deferred = $q.defer();
        var params = {
            id : id
        };
        deferred.resolve({
            id : id,
            'Last date of service' : '06-06-2015',
            'CPU' : 'Intel Pentium N3540 (2.16 - 2.66 ГГц)',
            'RAM' : '4GB',
            'GPU' : 'Intel HD Graphics'
        });
        /*$http.get( API_HOST + '/record', {params : params}).then(function (resp) {
            deferred.resolve(resp.data);
        }, function (err) {
            deferred.reject(err);
        });*/
        return deferred.promise;
    }
});