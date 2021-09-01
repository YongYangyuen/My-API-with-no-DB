const express = require('express');
const app = express();

app.use(express.json());

// mock data
const jokes = [{
        id: '1001',
        name: 'jokeA',
        like: 1,
        dislike: 0
    },
    {
        id: '1002',
        name: 'jokeB',
        like: 10,
        dislike: 2
    },
    {
        id: '1003',
        name: 'jokeC',
        like: 4,
        dislike: 12
    },
    {
        id: '1004',
        name: 'jokeD',
        like: 0,
        dislike: 20
    }
];

app.get('/', (req, res) => {
    res.json(jokes);
});

app.post('/', (req, res) => {
    const payload = req.body;
    jokes.push(payload);
    res.json(payload);
});

app.get('/:id', (req, res) => {
    const { id } = req.params;
    const result = jokes.find(joke => joke.id === id);
    res.json(result);
});

app.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = jokes.indexOf(jokes.id);
    jokes.splice(index, 1);
    res.json({ id });
});

app.post('/:id/like', (req, res) => {
    const { id } = req.params;
    const result = jokes.find(joke => joke.id === id);
    result.like++;
    res.json(result);
});

app.post('/:id/dislike', (req, res) => {
    const { id } = req.params;
    const result = jokes.find(joke => joke.id === id);
    result.dislike++;
    res.json(result);
});

app.listen(9000, () => {
    console.log('Application is running on port 9000');
});