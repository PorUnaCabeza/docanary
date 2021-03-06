const chalk = require('chalk');

exports.Logger = function() {
	this.info = (...args) => console.log(chalk.magenta(`[docanary]: ${args}`));

	this.success = (...args) => console.log(chalk.green(`[docanary]: ${args}`));

	this.warn = (...args) => console.log(chalk.yellow(`[docanary]: ${args}`));

	this.error = (...args) => console.log(chalk.red(`[docanary]: ${args}`));
};
