#!/usr/bin/env node
var color = require('cli-color');
var application = require('../index.js');

/**
 * Get input file argument
 */
var fileName = process.argv[2];

/**
 * Run the simulation
 */
app.runSimulation(fileName, function(err, robot) {
  // If error, let the user know
  if (err) {
    console.log(color.white.bgRed('ERROR:') + ' ' + color.red(err.message));
    return false;
  }

  // If no valid place commands were given, let the user know
  if (!robot.isPlaced) {
    console.log(color.yellow('Your robot was never placed on the table :('));
  }

  // Finis!
  console.log(color.white('-------------------------------------'));
  console.log(color.blue('Success! Your simulation is at an end'));
  console.log(color.white('-------------------------------------'));
});
