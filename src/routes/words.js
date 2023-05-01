const router = require('express').Router();
const WordModel = require('../models/word');

async function getWords() {
  try {
    const words = await WordModel.find();
    const wordList = words.map((word) => word.word);
    return wordList;
  } catch (error) {
    console.error(error);
    return [];
  }
}

router.get('/words', async (req, res) => {
  try {
    const words = await getWords();
    res.send(words);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
