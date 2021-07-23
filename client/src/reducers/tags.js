const tagsReducer = (state = { isLoading: true, tags: [] }, action) => {
	switch (action.type) {
		case 'START_LOADING':
			return { ...state, isLoading: true };
		case 'END_LOADING':
			return { ...state, isLoading: false };
		case 'FETCH_TAGS':
			return {
				...state,
				tags: action.payload.data,
				currentPage: action.payload.currentPage,
				numberOfPages: action.payload.numberOfPages,
			};
		case 'CREATE_TAG':
			return { ...state, tags: [...state.tags, action.payload] };
		case 'GET_RECOMMEND_TAGS':
			return { ...state, recommendTags: action.payload };
		case 'RESET_RECOMMEND_TAGS':
			return { ...state, recommendTags: [] };
		case 'GET_TAG':
			return { ...state, tag: action.payload };
		default:
			return state;
	}
};
export default tagsReducer;
