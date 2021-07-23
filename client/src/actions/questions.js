import * as api from '../api/index.js';

export const getQuestion = (id) => async (dispatch) => {
	try {
		dispatch({ type: 'START_LOADING' });
		const { data } = await api.getQuestion(id);
		dispatch({ type: 'GET_QUESTION', payload: data });
		dispatch({ type: 'END_LOADING' });
	} catch (error) {}
};

export const fetchQuestions = (page) => async (dispatch) => {
	try {
		dispatch({ type: 'START_LOADING' });
		const { data } = await api.fetchQuestions(page);
		dispatch({ type: 'FETCH_QUESTIONS', payload: data });
		dispatch({ type: 'END_LOADING' });
	} catch (error) {
		console.log(error);
	}
};

export const fetchUnAnswerQuestions = (page) => async (dispatch) => {
	try {
		dispatch({ type: 'START_LOADING' });
		const { data } = await api.fetchUnAnswerQuestions(page);
		dispatch({ type: 'FETCH_UNANSWERED_QUESTIONS', payload: data });
		dispatch({ type: 'END_LOADING' });
	} catch (error) {
		console.log(error);
	}
};

export const fetchMyQuestions = (id, page) => async (dispatch) => {
	try {
		dispatch({ type: 'START_LOADING' });
		const { data } = await api.fetchMyQuestions(id, page);
		dispatch({ type: 'FETCH_MY_QUESTIONS', payload: data });
		dispatch({ type: 'END_LOADING' });
	} catch (error) {
		console.log(error);
	}
};

export const fetchQuestionsBySearch = (searchQuery, page) => async (dispatch) => {
	try {
		dispatch({ type: 'START_LOADING' });
		const { data } = await api.fetchQuestionsBySearch(searchQuery, page);
		dispatch({ type: 'FETCH_BY_SEARCH', payload: data });
		dispatch({ type: 'END_LOADING' });
	} catch (error) {
		console.log(error);
	}
};

export const createQuestion = (form) => async (dispatch) => {
	try {
		dispatch({ type: 'START_LOADING' });
		const { data } = await api.createQuestion(form);
		console.log(data);
		dispatch({ type: 'CREATE_QUESTIONS', payload: data });
		dispatch({ type: 'END_LOADING' });
		return data._id;
	} catch (error) {
		console.log(error);
	}
};

export const upVoteQuestion = (id) => async (dispatch) => {
	try {
		const { data } = await api.upVoteQuestion(id);
		dispatch({ type: 'UP_VOTE', payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const commentQuestion = (id, comment) => async (dispatch) => {
	try {
		const { data } = await api.commentQuestion(id, comment);
		dispatch({ type: 'COMMENT', payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deleteCommentQuestion = (id, comment) => async (dispatch) => {
	try {
		const { data } = await api.deleteCommentQuestion(id, comment);
		dispatch({ type: 'DELETE_COMMENT_QUESTION', payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deleteQuestion = (id) => async (dispatch) => {
	try {
		dispatch({ type: 'START_LOADING' });
		const { data } = await api.deleteQuestion(id);
		dispatch({ type: 'DELETE_QUESTION', payload: data });
		dispatch({ type: 'END_LOADING' });
	} catch (error) {
		console.log(error);
	}
};
