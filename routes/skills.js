var express = require('express');
var router = express.Router();
var skillsControl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillsControl.index);

router.get('/:id', skillsControl.show);

module.exports = router;
