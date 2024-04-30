const fs = require('fs')
const path = require('path')
// fs.mkdir(path.join(__dirname, 'templates'), err => {
//     if (err) throw new Error()
//     console.log('created.....');
// })

fs.mkdir(path.join(__dirname, 'notes'), err => {
    if (err) throw new Error()
    console.log('notes added!');
})

fs.writeFile(path.join(__dirname, 'notes', 'programming notes'), 'notes for programming', err => {
    if (err) throw new Error()
    console.log('file added...');
})

