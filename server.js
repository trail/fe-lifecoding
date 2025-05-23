const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

const DATA = [
  'apple',
  'apricot',
  'banana',
  'banana1',
  'banana2',
  'banana3',
  'banana4',
  'blueberry',
  'blackberry',
  'cherry',
  'date',
  'dragonfruit',
  'fig',
  'grape',
  'grape1',
  'grape2',
  'grape3',
  'grapefruit',
  'kiwi',
  'lemon',
  'lime',
  'mango',
  'nectarine',
  'orange',
  'papaya',
  'peach',
  'pear',
  'pineapple',
  'plum',
  'raspberry',
  'strawberry',
  'watermelon',
  'watermelon1',
  'watermelon2',
  'watermelon3',
  'watermelon4',
  'watermelon5',
  'watermelon6',
  'watermelon7',
  'watermelon8',
  'watermelon9',
  'watermelon10',
  'watermelon11',
  'watermelon12',
  'watermelon13',
];

app.get('/api/search', (req, res) => {
  const query = (req.query.q || '').toLowerCase();
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;

  // Server side error
  if (query == '500') {
    return res.status(500).json({ error: 'Internal Server Error' });
  }

  // Response delay
  let delay = 300;
  if (query == 'banan') {
    delay = 6000;
  }

  setTimeout(() => {
    if (!query) {
      return res.json({ results: [] });
    }

    const results = DATA.filter((item) => item.includes(query));
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedResults = results.slice(startIndex, endIndex);

    res.json({ results: paginatedResults });
  }, delay);
});

app.listen(port, () => {
  console.log(`🚀 Mock autocomplete API running at http://localhost:${port}`);
});
