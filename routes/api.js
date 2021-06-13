
const R = require('ramda')
const express = require('express');

// создаете роутер
const router = express.Router();
const houses = require('../src/node_modules/data/houses')


// GET http://localhost:3000/api/some
router.get('/listing', async(req, res) => {
 
   const arr = [
      { houses,
       housesCount: houses.length}
   ]
//    console.log(res.send(arr))
    res.send(houses)

});
// req.params.id
router.get('/:id' , async(req,res) => {
    
    const id = await R.find(R.propEq('id', Number(req.params.id)), houses)
    console.log(id)
 
    res.send(id)
   
})


  

// POST http://localhost:3000/api/some
router.post('/some', (req, res) => {
    // ...
});

// экспортируете
module.exports = router;