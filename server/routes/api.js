const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

router.get('/list', (req, res) => {
  let listItems = [{id: 1, name: 'some name'}, {id: 2, name: 'name2'}, {id: 3, name: 'name3'}];
    res.send(listItems);
});

module.exports = router;
