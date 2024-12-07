import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

console.log(
    chalk.red('R') +
    chalk.rgb(255, 165, 0)('A') +
    chalk.yellow('I') +
    chalk.green('N') +
    chalk.blue('B') +
    chalk.magenta('O') +
    chalk.cyan('W') 
  );

  console.log(chalk.bgRed.bold('WARNING') + ' Be careful, the following content is very colorful');

  console.log(
    chalk.blue.bold('Never gonna ') +
    chalk.yellow.underline('give you up,')
  );
  console.log(
    chalk.rgb(126, 237, 224).inverse('Never gonna ') +
    chalk.rgb(126, 237, 224).italic('let you down,')
  );
  console.log(
    chalk.rgb(218, 154, 252)('Never gonna ') +
    chalk.red.bgWhite('run around') +
    chalk.rgb(165, 252, 111).bold(' and desert you!')
  );

  console.log(chalk.dim('It is working))'));