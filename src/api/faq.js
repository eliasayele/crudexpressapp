const express = require('express');

const router  = express.router();

//read all
router.get('/',(req,res,next) =>{
  res.json({
    message:'Hello read all',
  });
});

//Read one 
router.post('/',(req,res,next) =>{
  res.json({
    message:'Hello read one',
  });
});



//Create one 
router.post('/',(req,res,next) =>{
  res.json({
    message:'Hello create one',
  });
});


//update one
router.put('/',(req,res,next) =>{
  res.json({
    message:'Hello update one',
  });
});


//delete one
router.delete('/',(req,res,next) =>{
  res.json({
    message:'Hello delete one',
  });
});

module.exports = router;