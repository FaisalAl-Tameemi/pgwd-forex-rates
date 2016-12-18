'use strict';

// require the needed npm packages
const prettyjson = require('prettyjson');
const parseArgs = require('minimist');

// require the dataUtil for downloading ForEx data
const dataUtil = require('./util/data.util');

// parse the command line arguments
const commands = parseArgs(process.argv);
const task = commands.task || commands.t;

// stop if the task hasn't been specified
if(!task){
	return console.log("\n Please enter a valid command using '--task [TASK_NAME]' \n");
}

// run the code that matches the task specified
switch(task){
	case 'compare':
		console.log('compare command...');
		break;
	case 'list':
		console.log('should list the most frequest 10 rates...');
		break;
	default:
		console.log('\n Command not found :( \n');
		break;
}
