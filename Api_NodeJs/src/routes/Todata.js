const { Router } = require('express');
const router = Router();


const mHeu = require('../mHeun/TodataRandom');



router.get("/", (req, res) => {
    res.json(mHeu.MetodoHeun());
});

module.exports = router;