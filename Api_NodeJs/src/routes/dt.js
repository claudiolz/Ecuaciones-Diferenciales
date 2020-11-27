const { Router } = require('express');
const router = Router();
//const _ = require('undescore');
const time = require("../sample.json");

console.log(time);

router.get('/', (req, res) => {
    res.json(time)
});

router.post('/', (req, res) => {
    const { timeone, timetwo } = req.body;
    if (timeone && timetwo) {
        const NewTimes = {...req.body }
        //console.log(NewTimes);
        time.push(NewTimes);
        res.json(time);
    } else {
        res.send("datos erroneos");
    }
    res.send("receved");
});



module.exports = router;