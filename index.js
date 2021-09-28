import fs from 'fs';

const streamLectura = fs.createReadStream('./ejemplo.txt');

streamLectura.on('data', chunk=>{
    console.log(Buffer.isBuffer(chunk))
    console.log(chunk);
    console.log(chunk.toString());
})
