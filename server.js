const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

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
];

app.get('/api/search', (req, res) => {
  const query = (req.query.q || '').toLowerCase();

  // Server side error
  if (query == '500') {
    return res.status(500).json({ error: 'Internal Server Error' });
  }

  // Response delay
  let delay = 300;
  if (query == 'banan') {
    delay = 3000;
  }

  setTimeout(() => {
    if (!query) {
      return res.json({ results: [] });
    }

    const results = DATA.filter((item) => item.includes(query));
    res.json({ results });
  }, delay);
});

app.listen(port, () => {
  console.log(`🚀 Mock autocomplete API running at http://localhost:${port}`);
});
