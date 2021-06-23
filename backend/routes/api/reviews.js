const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth, handleValidationErrors } = require('../../utils/auth.js');
const { Review } = require('../../db/models')
const { check, validationResult } = require('express-validator')
const router = express.Router();

const reservationValidator = [
    check('rating')
        .exists({ checkFalsy: true })
        .withMessage("Please enter rating"),
    check('review')
        .exists({ checkFalsy: true })
        .withMessage("Please write your review"),

]

router.post('/', requireAuth, reservationValidator, asyncHandler(async (req, res, next) => {
    const { rating, review, user_id, dock_id } = req.body;
    const validationErrors = validationResult(req);
    if (validationErrors.isEmpty()) {
        const newReview = await Review.create({
            rating,
            review,
            user_id,
            dock_id
        })
        return res.json(newReview)
    } else {
        const errors = validationErrors.array().map((error) => {
            console.log(errors)
            return error.msg;
        })
    }


}))

module.exports = router
