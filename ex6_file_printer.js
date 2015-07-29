if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (position === undefined || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}

module.exports = function (dirname, fileExtension, callback) {
    var fs = require('fs');

    fs.readdir(dirname, function(err, list) {
        if (err) {
            callback(err, null);
        } else {
            callback(null,
                     list.filter(function(item) {
                         return item.endsWith('.' + fileExtension);
                     }));
        }
    });
};
