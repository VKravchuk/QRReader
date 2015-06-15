app.controller('ScanCtrl', function ($scope, $cordovaBarcodeScanner, RecordModel, $state) {
    $scope.isRecordRemote = {
        checked : false
    };
    $scope.scanBarcode = function () {
        try {
            scan().then(function (res) {
                if($scope.isRecordRemote){
                    RecordModel.getRecordByID(res)
                }
                else{
                    RecordModel.init(res);
                }
                $state.go('app.result')
            });
        }
        catch (e) {
            if($scope.isRecordRemote.checked){
                RecordModel.getRecordByID({
                    id : 1
                })
            }
            else{
                RecordModel.init({
                    data : 'test data',
                    message : 'test message'
                });
            }
            $state.go('app.result')
        }
    };
    function scan(){
        var res;
        return $cordovaBarcodeScanner.scan().then(function (imageData) {
            try{
                res = parseQR(imageData.text);
            }
            catch(e){
                res = {
                    Text : imageData.text
                };
            }
            finally{
                return res;
            }
        }, function (error) {
            return { 'An error happened -> ' : error };
        });
    }

    function parseQR(data){
        return JSON.parse(data.replace(/[↵\\]/g, ''))
    }

});