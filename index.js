const https = require('https');
const chalk = require('chalk')
const yargs = require('yargs')
const readline = require("readline");
const fs = require('fs');



// Customerie yargs verison
yargs.version('1.1.0')

// Config readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// HTTP requests
rl.question('What is your name? ', function (name) {
    rl.question(`What would you like to do today: (GET/POST/PUT/DELETE)`, function (method) {
        if (method === "GET") {
            rl.question('What is the request url? ', function (url) {
                const output = https.get(`${url}`)
                const writeStream = fs.writeFileSync('output/get_output.txt', JSON.stringify(output));
            })
        } else if (method === "POST") {
            rl.question('What is the request url? ', function (url) {
                rl.question('Paste the json body here: ', function (data) {
                    console.log(chalk.green('Request Success!'));
                    const output = https.post(`${url}`, data)
                    if (err) {
                        console.log(chalk.red('Error!!'));
                    }
                })
            })
        } else if (method === 'PUT') {
            rl.question('What is the request url? ', function (url) {
                rl.question('Paste the json body here: ', function (data) {
                    console.log(chalk.green('Request Success!'));
                    const output = https.put(`${url}`, data)
                    if (err) {
                        console.log(chalk.red('Error!!'));
                    }
                })
            })

        } else if (method === 'DELETE') {
            rl.question('What is the request url? ', function (url) {
                const output = https.put(`${url}`)
                console.log(chalk.delete('Request Success!'));
                if (err) {
                    console.log(chalk.red('Error!!'));
                }
            })
        }
    })
})

