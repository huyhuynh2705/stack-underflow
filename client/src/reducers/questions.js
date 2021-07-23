const questionsReducer = (state = { isLoading: true, questions: [] }, action) => {
	switch (action.type) {
		case 'START_LOADING':
			return { ...state, isLoading: true };
		case 'END_LOADING':
			return { ...state, isLoading: false };
		case 'FETCH_QUESTIONS':
		case 'FETCH_UNANSWERED_QUESTIONS':
		case 'FETCH_MY_QUESTIONS':
		case 'FETCH_BY_SEARCH':
			return {
				...state,
				questions: action.payload.data,
				currentPage: action.payload.currentPage,
				numberOfPages: action.payload.numberOfPages,
				numberOfQuestions: action.payload.numberOfQuestions,
			};
		// return { ...state, questions: action.payload };
		case 'CREATE_QUESTION':
			return { ...state, questions: [...state.questions, action.payload] };
		case 'GET_QUESTION':
		case 'UP_VOTE':
		case 'DELETE_COMMENT_QUESTION':
		case 'COMMENT':
			return { ...state, question: action.payload };
		case 'DELETE_QUESTION':
			return { ...state, questions: state.questions.filter((question) => question._id !== action.payload._id) };
		default:
			return state;
	}
};
export default questionsReducer;
