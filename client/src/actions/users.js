import * as api from '../api/index.js';

export const fetchUsers = (page) => async (dispatch) => {
	try {
		dispatch({ type: 'START_LOADING' });
		const { data } = await api.fetchUsers(page);
		dispatch({ type: 'FETCH_USERS', payload: data });
		dispatch({ type: 'END_LOADING' });
	} catch (error) {
		console.log(error);
	}
};
