var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/:str', (req, res) => {
  var date = new Date(req.params.str);
  var output = {natural: null, unix: null};
  if(!isNaN(date.getTime())){
    output['natural'] = date.toDateString();
    output['unix'] = date.getTime();
  }
  res.json(output);
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
