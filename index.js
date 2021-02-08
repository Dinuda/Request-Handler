const https = require('https');
const chalk = require('chalk')
const yargs = require('yargs')
const readline = require("readline");


// Customerie yargs verison
yargs.version('1.1.0')

// Config readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// GET: HTTP
// rl.question('What is your name? ', function (name) {

// })
rl.question(`What would you liek to do today ${name} (GET/POST/PUT/DELETE)`, function (method) {
    if (method === "GET") {
        rl.question('What is the request url? ', function (url) {
            const output = https.get(`${url}`)
            fs.writeFile('get_output.txt', output, callbackFunction)
            console.log(output);
        })
    }
})

