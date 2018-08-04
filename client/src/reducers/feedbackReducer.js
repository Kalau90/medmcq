import * as types from '../actions/types';

export default function(
	state = { feedback: [], feedbackSingle: {}, votedFor: {} },
	action
) {
	switch (action.type) {
		case types.FETCH_FEEDBACK:
			return { ...state, feedback: action.payload };
		case types.FETCH_FEEDBACK_SPECIFIC:
			return { ...state, feedbackSingle: action.payload };
		case types.VOTE_FEEDBACK:
			//TODO: Gør det til et array indeholdende alle ids
			let { id, val } = action.payload;
			return {
				...state,
				votedFor: { ...state.votedFor, [id]: { id, val } }
			};
		default:
			return state;
	}
}
