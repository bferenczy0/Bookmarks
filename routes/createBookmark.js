const express = require('express')
const {Bookmarks, Tags} = require('../models');
const router = express.Router()

router.post('/', async (req, res) => {
    
    // Modify the create method to check 
    // if the url already exists and if so tell the user 
    
    // Store the data using sequelize
    await Bookmarks.create(
        {
          url:  req.body.url
        })

    await Tags.create(
        {
            name: req.body.addTag
        })

    res.redirect('/');
    // POST the bookmark data
   
})

module.exports = router