const express = require('express')
const { Bookmarks, Comment } = require('../models');
const router = express.Router()

router.get('/', async (req, res) => {

    const bookmarks = await Bookmarks.findAll({
      include: {
        all: true
      }
    })
    const comment = await Comment.findAll({})
  
    res.render('index.ejs', {bookmarks: bookmarks, comment: comment});
  })

module.exports = router