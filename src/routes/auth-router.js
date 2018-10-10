const express = require('express');
// const authController = require('../controllers/auth-controller');

const router = express.Router();

router.get('/register', (req, res) => {
    res.status(200).send('het werk');
});

module.exports = router;
