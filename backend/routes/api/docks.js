const express = require('express')
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Dock, User, Image, Review } = require('../../db/models')

router.get('/', asyncHandler(async (req, res) => {
    const docks = await Dock.findAll({
        include: [User, Image, Review]
    });
    res.json(docks)
    // console.log(docks)
}))


router.get('/:id', asyncHandler(async (req, res) => {
    const dock = await Dock.findOne({
        where: {
            id: req.params.id
        },
        include: [User, Image, Review]
    });
    res.json(dock)
}))

module.exports = router
