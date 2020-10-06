 const program = require('commander')
 const streams = require('./modules/stream');

 program
     .option('-d, --debug', 'output extra debugging')

     .option('-s, --shift <type>', 'a shift')
     .option('-i, --input <input>', 'an input file')
     .option('-o, --output <output>', 'an output file')
     .option('-a, --actions <action>', 'an action encode/decode')
 program.parse(process.argv);

 if (program.debug) console.log(program.opts());

 if(isNaN(program.shift)){
  console.error('Error! Uncorrect shift value!')
  process.exit(1)
 }
 if(program.actions !== 'encode' && program.actions !== 'decode' ){
  console.error('Error! Uncorrect action value!')
  process.exit(1)
 }

  streams(program.input, program.output, program.shift, program.actions)



