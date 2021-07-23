const answerReducer = (state = { isLoading: true, answers: [] }, action) => {
	switch (action.type) {
		case 'START_LOADING_ANSWER':
			return { ...state, isLoading: true };
		case 'END_LOADING_ANSWER':
			return { ...state, isLoading: false };
		case 'FETCH_ANSWER':
			return { ...state, answers: action.payload };
		case 'ADD_ANSWER':
			return { ...state, answers: [...state.answers, action.payload] };
		case 'LIKE':
		case 'COMMENT_ANSWER':
		case 'DELETE_COMMENT_ANSWER':
			return { ...state, answers: state.answers.map((answer) => (answer._id === action.payload._id ? action.payload : answer)) };
		case 'GET_ANSWER':
		case 'FETCH_MY_ANSWER':
			return { ...state, answers: action.payload };
		default:
			return state;
	}
};
export default answerReducer;
