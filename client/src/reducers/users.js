const usersReducer = (state = { isLoading: true, users: [] }, action) => {
	switch (action.type) {
		case 'START_LOADING':
			return { ...state, isLoading: true };
		case 'END_LOADING':
			return { ...state, isLoading: false };
		case 'FETCH_USERS':
			return {
				...state,
				users: action.payload.data,
				currentPage: action.payload.currentPage,
				numberOfPages: action.payload.numberOfPages,
				numberOfUsers: action.payload.numberOfUsers,
			};
		default:
			return state;
	}
};
export default usersReducer;
