import * as api from '../api/index.js';

export const fetchAnswers = (id) => async (dispatch) => {
	try {
		dispatch({ type: 'START_LOADING_ANSWER' });
		const { data } = await api.fetchAnswers(id);
		dispatch({ type: 'GET_ANSWER', payload: data });
		dispatch({ type: 'END_LOADING_ANSWER' });
	} catch (error) {
		console.log(error);
	}
};

export const addAnswer = (id, form) => async (dispatch) => {
	try {
		dispatch({ type: 'START_LOADING_ANSWER' });
		const { data } = await api.addAnswer(id, form);
		dispatch({ type: 'ADD_ANSWER', payload: data });
		dispatch({ type: 'END_LOADING_ANSWER' });
	} catch (error) {
		console.log(error);
	}
};

export const likeAnswer = (id) => async (dispatch) => {
	try {
		const { data } = await api.likeAnswer(id);
		dispatch({ type: 'LIKE', payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const commentAnswer = (id, comment) => async (dispatch) => {
	try {
		const { data } = await api.commentAnswer(id, comment);
		dispatch({ type: 'COMMENT_ANSWER', payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deleteCommentAnswer = (id, comment) => async (dispatch) => {
	try {
		const { data } = await api.deleteCommentAnswer(id, comment);
		dispatch({ type: 'DELETE_COMMENT_ANSWER', payload: data });
	} catch (error) {
		console.log(error);
	}
};
