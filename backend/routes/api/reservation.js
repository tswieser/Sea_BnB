const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth.js');
const { Reservation, Dock } = require('../../db/models')
const { check, validationResult } = require('express-validator')
const router = express.Router();


const reservationValidator = [
    check('start_date')
        .exists({ checkFalsy: true })
        .withMessage("Please enter your check In Date"),
    check('end_date')
        .exists({ checkFalsy: true })
        .withMessage("Please enter your check In Date"),

]


router.get('/', asyncHandler(async (req, res) => {
    const reservations = await Reservation.findAll({
        include: [Dock]
    });
    res.json(reservations)
}))


router.post('/', requireAuth, reservationValidator, asyncHandler(async (req, res, next) => {
    const { start_date, end_date, dock_id, user_id } = req.body;
    const validationErrors = validationResult(req);
    // console.log('=================>', res)
    if (validationErrors.isEmpty()) {
        const stayInfo = await Reservation.create({
            start_date,
            end_date,
            dock_id,
            user_id
        })
        return res.json(stayInfo)
    } else {
        const errors = validationErrors.array().map((error) => {
            console.log(errors)
            return error.msg;
        })
    }
}))


router.delete('/:id', asyncHandler(async (req, res) => {
    const reservationId = parseInt(req.params.id)
    const reservation = await Reservation.findByPk(reservationId);
    if (reservation) {
        await reservation.destroy()
    }
    return res.json(reservationId)
}))


router.put('/:id', asyncHandler(async function (req, res) {
    const { id, start_date, end_date, user_id, dock_id } = req.body
    const oldReservation = await Reservation.findByPk(id)
    const newReservation = await oldReservation.update({ id, start_date, end_date, user_id, dock_id })
    const reservation = await Reservation.findOne({
        where: {
            id: id
        },
        include: [Dock]
    })

    return res.json(reservation)

})
);





module.exports = router
