import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography, CircularProgress } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { useLocation, useParams, useHistory } from 'react-router-dom';

import Question from './Question/Question';
import ButtonGoBack from '../ButtonGoBack/ButtonGoBack';
import Paginate from '../Paginate/Paginate';

import { fetchQuestions, fetchMyQuestions, fetchUnAnswerQuestions, fetchQuestionsBySearch } from '../../actions/questions';

import useStyles from './styles';

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

const Questions = () => {
	const classes = useStyles();
	const [value, setValue] = useState('newest');
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();
	const { tagName } = useParams();
	const { userId } = useParams();
	const query = useQuery();
	const searchQuery = query.get('searchQuery') || undefined;
	const tab = query.get('tab') || undefined;
	let page = query.get('page') || 1;
	const [tabPagination, setTabPagination] = useState('newest');
	const user = JSON.parse(localStorage.getItem('profile'));
	const { questions, isLoading, numberOfQuestions } = useSelector((state) => state.questions);

	useEffect(() => {
		const noQuery = !tab && !searchQuery && !tagName && !userId;
		if (noQuery) {
			dispatch(fetchQuestions(page));
			return;
		}
		if (tab) {
			if (tab === 'newest ') {
				dispatch(fetchQuestions(page));
			} else if (tab === 'my') {
				dispatch(fetchMyQuestions(user?.result._id, page));
			} else if (tab === 'unanswered') {
				dispatch(fetchUnAnswerQuestions(page));
			}
			return;
		}
		if (tagName) {
			dispatch(fetchQuestionsBySearch({ tags: tagName }, page));
			return;
		}
		if (searchQuery) {
			dispatch(fetchQuestionsBySearch({ search: searchQuery }, page));
			return;
		}
		if (userId) {
			dispatch(fetchMyQuestions(userId, page));
			return;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value, location]);

	useEffect(() => {
		const noQuery = !tab && !searchQuery && !tagName && !userId;
		if (noQuery) {
			dispatch(fetchQuestions(page));
			return;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChange = (e, newValue) => {
		e.preventDefault();
		setValue(newValue);
		page = 1;
		if (newValue === 'newest') {
			setTabPagination('newest');
			dispatch(fetchQuestions(page));
			history.push(`/questions?tab=newest`);
		} else if (newValue === 'unanswered') {
			setTabPagination('unanswered');
			dispatch(fetchUnAnswerQuestions(page));
			history.push(`/questions?tab=unanswered`);
		} else if (newValue === 'my') {
			setTabPagination('my');
			dispatch(fetchMyQuestions(user?.result._id, page));
			history.push(`/questions?tab=my`);
		}
	};

	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item xs={12} sm={3} md={6}>
					<div className={classes.buttonBack}>{searchQuery && <ButtonGoBack history={history} />}</div>
					<Typography className={classes.title2} variant='subtitle1'>
						{numberOfQuestions < 2 ? `${numberOfQuestions} question` : `${numberOfQuestions} questions`}
					</Typography>
				</Grid>
				<Grid item xs={12} sm={9} md={6}>
					{!searchQuery && !tagName && (
						<div className={classes.paper}>
							<ToggleButtonGroup value={value} exclusive onChange={handleChange}>
								<ToggleButton className={classes.toggle} value='newest'>
									Newest
								</ToggleButton>
								<ToggleButton className={classes.toggle} value='unanswered'>
									Unanswered
								</ToggleButton>
								{user && (
									<ToggleButton className={classes.toggle} value='my'>
										My questions
									</ToggleButton>
								)}
							</ToggleButtonGroup>
						</div>
					)}
				</Grid>
			</Grid>
			<hr style={{ height: '0.5px', borderWidth: '0', color: '#C4C4C4', backgroundColor: '#C4C4C4' }} />
			{isLoading ? (
				<CircularProgress />
			) : (
				questions?.map((question) => (
					<div key={question._id}>
						<Question question={question} />
					</div>
				))
			)}
			<Paginate page={page} tab={tabPagination} searchQuery={searchQuery} tagged={tagName} userId={userId} />
		</div>
	);
};

export default Questions;
