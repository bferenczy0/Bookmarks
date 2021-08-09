const express = require('express')
const {Bookmarks} = require('../models');
const methodOverride = require('method-override')
const router = express.Router()
router.use(methodOverride('_method'))

router.put('/:id', async (req,res) => {

    await Bookmarks.update({
        url: req.body.update},{
        where: {
            id: req.params.id
        }
    })

    res.redirect('/')
})

module.exports = router