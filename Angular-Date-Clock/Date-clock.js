console.log("\"DATE and CLOCK sample Program\"");
var CurrentDateFormatter = /** @class */ (function () {
    function CurrentDateFormatter() {
        this.currentDate = new Date();
    }
    CurrentDateFormatter.prototype.printDate = function () {
        console.log("DATE:" + this.currentDate);
    };
    return CurrentDateFormatter;
}());
var currentdate = new CurrentDateFormatter();
currentdate.printDate();
