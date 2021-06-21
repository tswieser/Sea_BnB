const express = require('express')
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Dock, User, Image, Review } = require('../../db/models')

router.get('/', asyncHandler(async (req, res) => {
    const docks = await Dock.findAll({
        include: [User, Image, Review]
    });
    res.json(docks)
    console.log(docks)
}))

module.exports = router
