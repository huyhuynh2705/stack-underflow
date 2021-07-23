import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
	if (localStorage.getItem('profile')) {
		req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
	}
	return req;
});

export const signIn = (form) => API.post('/auth/signin', form);
export const signInWithGoogle = (form) => API.post('/auth/signingoogle', form);
export const signUp = (form) => API.post('/auth/signup', form);

export const getQuestion = (id) => API.get(`/questions/getquestion/${id}`);
export const fetchQuestions = (page) => API.get(`/questions?page=${page}`);
export const fetchUnAnswerQuestions = (page) => API.get(`/questions/unanswered?page=${page}`);
export const fetchMyQuestions = (id, page) => API.get(`/questions/user/${id}?page=${page}`);

export const fetchQuestionsBySearch = (searchQuery, page) =>
	API.get(`/questions/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}&page=${page}`);

export const createQuestion = (form) => API.post(`/questions`, form);
export const upVoteQuestion = (id) => API.patch(`/questions/${id}/upvote`);
export const commentQuestion = (id, comment) => API.patch(`/questions/${id}/comment`, comment);
export const deleteCommentQuestion = (id, comment) => API.patch(`/questions/${id}/deletecomment`, comment);
export const deleteQuestion = (id) => API.delete(`/questions/${id}/delete`);

export const fetchAnswers = (id) => API.get(`/answers/getanswerof/${id}`);
export const addAnswer = (id, form) => API.post(`/answers/addanswerto/${id}`, form);
export const likeAnswer = (id) => API.patch(`/answers/${id}/like`);
export const commentAnswer = (id, comment) => API.patch(`/answers/${id}/comment`, comment);
export const deleteCommentAnswer = (id, comment) => API.patch(`/answers/${id}/deletecomment`, comment);

export const getTag = (name) => API.get(`/tags/${name}`);
export const fetchTags = (page) => API.get(`/tags?page=${page}`);
export const createTag = (form) => API.post(`/tags`, form);
export const getRecommendTags = (tag) => API.post('/tags/recommend', tag);

export const fetchUsers = (page) => API.get(`/users?page=${page}`);
