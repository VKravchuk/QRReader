app.factory('FieldModel', function (API) {
    var RecordModel = function (title, data) {
        this.title = title;
        this.data = data;
    };
    RecordModel.prototype.update = function () {
        API.updateRecord().then(function (successMesaage) {
            return successMesaage;
        }, function (err) {
            return 'There is some error, please try again!'
        })
    };

    return RecordModel;
});