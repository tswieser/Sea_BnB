import { csrfFetch } from './csrf'

const ADD_REVIEW = 'review/ADD_REVIEW'

const postReview = (reservation) => ({
    type: ADD_REVIEW,
    reservation,
});

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

const initialState = {};


const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REVIEW:
            let review = action.review
            return {
                ...state,
                [action.review.id]: {
                    ...review
                }
            }

        default:
            return state;
    }
}

export default reviewReducer;
