const fs = require('fs');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, async (error) => {
    if (!error)
        console.log(
            "Server listening on port " + PORT
        );
    else console.log("Error occured, server didn't start", error);
});

app.get('/api/saveTimestamp', (req, res) => {
    fs.writeFile('current date-time.txt', Date.now().toString(), (err) => {
        if (err) res.json({
            status: false,
            message: `Error: ${err}`
        }).status(500);
        console.log('Saved!');
        res.json({
            status: true,
            message: 'File Saved Successfully!'
        });
    })
})

app.get('/api/getLocalFiles', (req, res) => {
    var files = [];
    fs.readdir('/home/aditya/Projects/Web/node1/', (err, files) => {
        files.forEach(file => {
            files.push(file);
        });
        if (err) res.json({
            status: false,
            message: `Error: ${err}`
        }).status(500);
        console.log('Saved!');
        res.json({
            status: true,
            message: 'Got all files in the directory',
            data: files
        });
    });

})