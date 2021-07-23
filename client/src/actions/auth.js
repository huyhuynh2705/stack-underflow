import * as api from '../api/index.js';

export const signIn = (form, history) => async (dispatch) => {
	try {
		dispatch({ type: 'START_LOADING' });
		const { data } = await api.signIn(form);
		dispatch({ type: 'SIGN_IN', data });
		dispatch({ type: 'END_LOADING' });
		history.goBack();
	} catch (error) {
		console.log(error);
	}
};

export const signInWithGoogle = (form, history) => async (dispatch) => {
	try {
		dispatch({ type: 'START_LOADING' });
		const { data } = await api.signInWithGoogle(form);
		dispatch({ type: 'SIGN_IN', data });
		dispatch({ type: 'END_LOADING' });
		history.push('/');
	} catch (error) {
		console.log(error);
	}
};

export const signUp = (form, history) => async (dispatch) => {
	try {
		dispatch({ type: 'START_LOADING' });
		const { data } = await api.signUp(form);
		dispatch({ type: 'SIGN_UP', data });
		dispatch({ type: 'END_LOADING' });
		history.push('/');
	} catch (error) {
		console.log(error);
	}
};
