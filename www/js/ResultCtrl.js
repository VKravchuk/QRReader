app.controller('ResultCtrl', function ($scope, RecordModel) {
    $scope.record = RecordModel.getRecord();
});