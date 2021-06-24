import { csrfFetch } from './csrf'

const LOAD_REVIEWS = 'review/LOAD_REVIEWS'
const ADD_REVIEW = 'review/ADD_REVIEW'
const REMOVE_REVIEW = 'review/REMOVE_REVIEW'
const UPDATE_REVIEW = 'review/UPDATE_REVIEW'

const loadReviews = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews,
});

const postReview = (review) => ({
    type: ADD_REVIEW,
    review,
});

const remove = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId,
});

const update = (review) => ({
    type: UPDATE_REVIEW,
    review,
});

console.log(postReview)

export const GetReviews = () => async (dispatch) => {
    const response = await fetch('/api/review');
    const reviews = await response.json();
    // console.log('=============>', reviews)
    dispatch(loadReviews(reviews))
}

export const AddReview = (review) => async dispatch => {
    const response = await csrfFetch('/api/review', {
        method: 'POST',
        body: JSON.stringify(review)
    });
    if (response.ok) {
        const details = await response.json();
        dispatch(postReview(details));
        return details;
    }
}

export const deleteReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/review/${reviewId}`, {
        method: 'delete',
    })
    if (response.ok) {
        const review = await response.json();
        dispatch(remove(review.reviewId));
        return review
    }
}

export const updateReview = (review) => async dispatch => {
    const response = await csrfFetch(`/api/review/${review.id}`, {
        method: 'put',
        body: JSON.stringify(review),
    });
    if (response.ok) {
        const newReview = await response.json();
        dispatch(postReview(newReview))
        return newReview
    }
}




const initialState = {};


const reviewReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOAD_REVIEWS:
            const allReviews = {}
            action.reviews.forEach((review) => {
                allReviews[review.id] = review
            });
            return {
                ...state,
                ...allReviews
            };
        case ADD_REVIEW:
            let review = action.review
            return {
                ...state,
                [action.review.id]: {
                    ...review
                }
            }
        case UPDATE_REVIEW:
            review = action.review
            return {
                ...state,
                [action.review.id]: {
                    ...review
                }
            }
        case REMOVE_REVIEW: {
            const newState = { ...state };
            delete newState[action.reviewId];
            return newState;
        }
        default:
            return state;
    }
}

export default reviewReducer;
