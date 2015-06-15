app.service('RecordModel', function (FieldModel, API) {
    var record = [];
    this.init = function (data) {
        record = [];
        for(var title in data){
            if(data.hasOwnProperty(title)){
                record.push(new FieldModel(title, data[title]));
            }
        }
    };
    this.getRecord = function () {
        return record;
    };
    this.getRecordByID = function (opt) {
        var _this = this;
        return API.getRecordByID(opt.id).then(function (res) {
            _this.init(res);
        });
    }
});