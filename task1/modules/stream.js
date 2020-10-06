const fs = require("fs");
const caesarShift = require('./caesar-shift');
const streams =  (inputFile, outputFile, shift, actionType) => {

    if(inputFile === undefined) {
        console.log("Please write your text: ");
       return process.stdin.on('readable', function () {
            var buf = process.stdin.read();
            const inTxt = buf.toString()
            console.log(caesarShift(inTxt, shift, actionType));
        });
    };

    const readShort = fs.createReadStream( './' + inputFile, 'utf-8');
    readShort.on('data', function (chunk) {
        console.log('input - ', chunk.toString());
        const writeShort = fs.createWriteStream( './' + outputFile,  { flags: "a" });
        writeShort.write(caesarShift(chunk.toString(), shift, actionType))

        readShort.on('data', function (chunk){
            writeShort.write(chunk)

        })

        const readableStream = fs.createReadStream(outputFile, "utf8");

        readableStream.on("data", function(chunk){
            console.log('output - ', chunk);
        });

    });

}
module.exports = streams;