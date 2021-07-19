const greet = require('./greet');
// figlet starts
var figlet = require('figlet')

figlet(greet('Xola'), function (err, data){
    if(err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
})

const chalk = require('chalk');
//import the greet module that is in the current folder


const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)