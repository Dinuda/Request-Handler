var https = require('https');

var output = https.get('https://nodejs.org/api/http.html')
console.log(output);