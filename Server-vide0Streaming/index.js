const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3004;


const Videos = [
    {
        id :1,
        title: 'Apprendre TypeScript 1',
        time: '3min ',
        autor:'Grafikart'
    },
    {
        id:2,
        title: 'Apprendre TypeScript 2',
        time: '3min ',
        autor:'Grafikart'
    },
    {
        id:3,
        title: 'Apprendre TypeScript 3',
        time: '3min ',
        autor:'Grafikart'
    }
] 

app.get('/videolist', (req, res) => {
    res.status(200).json({Videos});
})

app.get('/:videoId', (req, res) => res.sendFile(`assets/${req.params.videoId}.mp4`,{root:__dirname}));
app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 