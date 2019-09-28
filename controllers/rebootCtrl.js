const express = require('express');
const router = express.Router();
const reboot = require('../data/reboot')


// index //
router.get('/', (req, res) => {
    return res.status(401).send("suck it");
});

// show //
router.get('/:id', (req, res) => {
    if (!reboot[req.params.id]) return res.status(400).send('That\'s not a thing')
    return res.status(200).json(reboot[req.params.id]);
});

// create //
router.post('/', (req, res) => {
    if (req.body.name && req.body.isCompleted) {
        reboot.push({
            name: req.body.name,
            isCompleted: req.body.isCompleted
        })
        return res.status(200).json(reboot);
    } else if (req.body.name) {
        reboot.push({
            name: req.body.name,
            isCompleted: req.body.isCompleted
        })
        return res.status(200).json(reboot);
    } else {
        res.status(400).send('Please send completed info')
    }
})

// update // how can we validate these better???? //
router.put('/:id', (req, res) => {
    if (!req.body.name) return res.status(400).send('Please send name');
    reboot[req.params.id].name = req.body.name;
    reboot[req.params.id].isCompleted = req.body.isCompleted;
    return res.status(200).json(reboot);
})

// delete //
router.delete('/:id', (req, res) => {
    reboot.splice(req.params.id, 1)
    return res.status(200).json(reboot);
})

module.exports = router;