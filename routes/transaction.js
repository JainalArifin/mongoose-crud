const express = require('express')
const router = express.Router()
const transactionController = require('../controllers/transactionController')

router.get('/', transactionController.all)
router.post('/', transactionController.create)
router.put('/:id', transactionController.update)
router.delete('/:id', transactionController.delete)

module.exports = router
