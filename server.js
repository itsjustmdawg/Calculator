// Admission Number: 2234865
// Name: Mahesha Uthayakumar
// Class: DIT/FT/1B/03

var app = require('./controller/app');
var port = 8081;
var server = app.listen(port, function(){
    console.log(`Web App Hosted at http://localhost:${port}`);
});