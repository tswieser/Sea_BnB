const express = require('express')
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Dock, User, Image } = require('../../db/models')

router.get('/', asyncHandler(async (req, res) => {
    const docks = await Dock.findAll({
        include: [User, Image]
    });
    res.json(docks)
    console.log(docks)
}))

module.exports = router
