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

router.get('/', asyncHandler(async (req, res) => {
    const reviews = await Review.findAll();
    res.json(reviews)
}))


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
}));



// router.put('/:id', asyncHandler, (async (req, res) => {
//     console.log('===========> here')
//     const { rating, review } = req.body
//     const id = parseInt(req.params.id);
//     const foundReview = await Review.findByPk(id);

//     if (foundReview) {
//         await foundReview.update({ rating, review });
//         return res.json({ rating, review })
//     } else {
//         console.log('Review not found')
//     }

// }));


router.put('/:id', asyncHandler(async function (req, res) {
    const { id, rating, review, user_id, dock_id } = req.body
    const oldReview = await Review.findByPk(id)
    const newReview = await oldReview.update({ id, rating, review, user_id, dock_id })
    return res.json(newReview)
    // console.log('=====================> here')
    // const id = await Review.update(req.body);
    // const review = await Review.one(id);
    // return res.json(review);
})
);






router.delete('/:id', asyncHandler(async (req, res) => {
    const reviewId = parseInt(req.params.id)
    const review = await Review.findByPk(reviewId);

    if (review) {
        await review.destroy()
    }
    return res.json(reviewId)
}))

module.exports = router
