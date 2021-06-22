const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth, handleValidationErrors } = require('../../utils/auth.js');
const { Reservation } = require('../../db/models')
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const router = express.Router();


const reservationValidator = [
    check('start_date')
        .exists({ checkFalsy: true })
        .withMessage("Please enter your check In Date"),
    check('end_date')
        .exists({ checkFalsy: true })
        .withMessage("Please enter your check In Date"),

]


router.post('/', requireAuth, csrfProtection, reservationValidator, asyncHandler(async (req, res, next) => {
    const { start_date, end_date, dock_id, user_id } = req.body;
    const validationErrors = validationResult(req);

    if (validationErrors.isEmpty()) {
        await Reservation.create({
            start_date,
            end_date,
            dock_id,
            user_id
        })
    }



}))






module.exports = router
