import data from './data.json' assert { type: 'json' };

const spanAverage = document.getElementsByClassName('average')[0];
const spanReaction = document.getElementById('result-reaction');
const spanMemory = document.getElementById('result-memory');
const spanVerbal = document.getElementById('result-verbal');
const spanVisual = document.getElementById('result-visual');

spanReaction.textContent = data[0].score;
spanMemory.textContent = data[1].score;
spanVerbal.textContent = data[2].score;
spanVisual.textContent = data[3].score;

const scores = [ data[0].score, data[1].score, data[2].score, data[3].score ];

const average = Math.floor(scores.reduce((a,b) => a + b) / scores.length);
spanAverage.textContent = average;