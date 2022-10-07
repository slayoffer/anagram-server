const express = require('express');

const Home = require('../views/Home');
const Words = require('../views/Words');

const renderTemplate = require('../lib/renderTemplate');

const { Word } = require('../db/models');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  renderTemplate(Home, { title: 'Anagram Finder' }, res);
});

router.post('/words', (req, res) => {
  res.redirect(`/words/${req.body.word}`);
});

router.get('/words/:word', async (req, res) => {
  const { word } = req.params;
  const words = await Word.anagrams(word);
  renderTemplate(Words, { word, title: 'Anagram Finder', words }, res);
});

module.exports = router;
