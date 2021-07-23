import * as api from '../api/index.js';

export const getTag = (name) => async (dispatch) => {
	try {
		dispatch({ type: 'START_LOADING' });
		const { data } = await api.getTag(name);
		dispatch({ type: 'GET_TAG', payload: data });
		dispatch({ type: 'END_LOADING' });
	} catch (error) {
		console.log(error);
	}
};

export const fetchTags = (page) => async (dispatch) => {
	try {
		dispatch({ type: 'START_LOADING' });
		const { data } = await api.fetchTags(page);
		dispatch({ type: 'FETCH_TAGS', payload: data });
		dispatch({ type: 'END_LOADING' });
	} catch (error) {
		console.log(error);
	}
};

export const createTag = (form) => async (dispatch) => {
	try {
		dispatch({ type: 'START_LOADING' });
		const { data } = await api.createTag(form);
		dispatch({ type: 'CREATE_TAGS', payload: data });
		dispatch({ type: 'END_LOADING' });
		return data._id;
	} catch (error) {
		console.log(error);
	}
};

export const getRecommendTags = (tag) => async (dispatch) => {
	try {
		dispatch({ type: 'START_LOADING' });
		const { data } = await api.getRecommendTags(tag);
		dispatch({ type: 'GET_RECOMMEND_TAGS', payload: data });
		dispatch({ type: 'END_LOADING' });
	} catch (error) {
		console.log(error.message);
	}
};
