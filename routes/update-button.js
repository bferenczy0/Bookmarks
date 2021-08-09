const express = require('express')
const router = express.Router()

router.post('/update-button/:id', async (req, res) => {

    res.render('update', { id: req.params.id
        })
})

module.exports = router