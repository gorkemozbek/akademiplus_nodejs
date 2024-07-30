const fs = require('fs');

const readFileBlocking = () => {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log('File Text: ', data);    
}

const readFileNonBlocking = () => {
    fs.readFile('example.txt', 'utf8', (err, data) => {
        console.log('reading file...');
        if(err) {
            console.error('Error:', err);
            return;
        }
        console.log('File Text: ', data);
    });
}

readFileBlocking();
console.log('process finished');