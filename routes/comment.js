const express = require('express')
const {Comment} = require('../models');
const router = express.Router()

router.post('/:id/comments', async (req, res) => {
    await Comment.create({
      text: req.body.text,
      BookmarkId: req.params.id
    })
  
    res.redirect('/')
  })

module.exports = router