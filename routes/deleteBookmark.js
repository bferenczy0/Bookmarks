const express = require('express')
const {Bookmarks} = require('../models');
const methodOverride = require('method-override')
const router = express.Router()
router.use(methodOverride('_method'))

router.delete('/:id', async (req, res) => {

    // Store the data using sequelize
        await Bookmarks.destroy({
            where: {
                id: req.params.id
            }
            })
    
        // POST the bookmark data
        res.redirect('/');
    
    })

module.exports = router