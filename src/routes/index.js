const router = require('express').Router();
const path = require('path');

router.get('/', async (req, res) => {
  try {
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
