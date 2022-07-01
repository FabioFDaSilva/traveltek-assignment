
var fs = require('fs'),
    xml2js = require('xml2js');
 
var parser = new xml2js.Parser();
/// Flight is misspelled as fligh on the file
fs.readFile(__dirname + '/data/flighdata_A.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.dir(result);

        console.log(result.flights.flight[0]);
        console.log('Done');
    });
});