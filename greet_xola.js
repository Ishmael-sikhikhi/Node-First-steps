"use strict"
const greet = require('./greet');
// figlet starts
var figlet = require('figlet')
const chalk = require('chalk');


var myData
figlet(greet('Xola'), function (err, data){
    myData =  data;
    if(err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    //import the greet module that is in the current folder
    const styledMessage = chalk.bgGreen.black(data);
    console.log(styledMessage)
})




