import React, { useEffect } from 'react';
import { Typography, Paper, Grid, Button, CircularProgress, Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getQuestion } from '../../actions/questions';
import { useHistory } from 'react-router-dom';

import moment from 'moment';

import ButtonNewQuestion from '../ButtonNewQuestion/ButtonNewQuestion';
import Answers from '../Answers/Answers';
import AddAnswer from '../AddAnswer/AddAnswer';
import Comments from '../Comments/Comments';
import ButtonGoBack from '../ButtonGoBack/ButtonGoBack';

import { upVoteQuestion, deleteQuestion } from '../../actions/questions';

import useStyles from './styles';

const QuestionDetail = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const { id } = useParams();
	const question = useSelector((store) => store.questions.question);
	const isLoading = useSelector((store) => store.questions.isLoading);
	const user = JSON.parse(localStorage.getItem('profile'));
	const userId = user?.result.googleId || user?.result?._id;
	let dateCreated = moment(question?.dateCreated);
	const hasVotedQuestion = question?.voteCount?.find((id) => id === userId);

	const handleUpVote = () => {
		dispatch(upVoteQuestion(id));
	};

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(deleteQuestion(question?._id));
		history.push('/');
	};

	const handleSearchTag = (tag) => {
		// dispatch(fetchQuestionsBySearch({ tags: tag }, page));
		history.push(`/questions/tagged/${tag}`);
	};

	useEffect(() => {
		dispatch(getQuestion(id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return isLoading ? (
		<div className={classes.root}>
			<Grid container>
				<Grid item xs={6} sm={8} md={9}>
					<ButtonGoBack history={history} />
				</Grid>
				<Grid item xs={6} sm={4} md={3}>
					<ButtonNewQuestion />
				</Grid>
			</Grid>
			<Paper className={classes.paper} elevation={6}>
				<CircularProgress />
			</Paper>
		</div>
	) : (
		<div className={classes.root}>
			<Grid container>
				<Grid item xs={6} sm={8} md={9}>
					<ButtonGoBack history={history} />
				</Grid>
				<Grid item xs={6} sm={4} md={3}>
					<ButtonNewQuestion />
				</Grid>
			</Grid>
			<Paper className={classes.paper} elevation={6}>
				<Grid container spacing={1}>
					<Grid item xs={2} sm={2} md={1}>
						<Typography className={classes.title3} variant='h6' align='center'>
							{question?.voteCount?.length}
						</Typography>
						{hasVotedQuestion ? (
							<Button className={classes.vote} size='small' variant='outlined' color='secondary' fullWidth onClick={handleUpVote}>
								Down
							</Button>
						) : (
							<Button className={classes.vote} size='small' variant='outlined' color='primary' fullWidth onClick={handleUpVote}>
								Up
							</Button>
						)}
						{user?.result?._id === question?.creatorId && (
							<Button className={classes.button} size='small' variant='outlined' color='secondary' onClick={handleDelete} fullWidth>
								Delete
							</Button>
						)}
					</Grid>
					<Grid item xs={10} sm={10} md={11}>
						<Typography className={classes.title} variant='h5' gutterBottom>
							{question?.title}
						</Typography>
						<Typography className={classes.title2} variant='body2' gutterBottom>
							Created by: {question?.creator}, {dateCreated.fromNow()}
						</Typography>
						<div className={classes.content} dangerouslySetInnerHTML={{ __html: question?.content }}></div>
						<div className={classes.tagholder}>
							{question?.tags.map((tag) => (
								<Button
									key={tag}
									className={classes.tags}
									variant='contained'
									disableElevation
									onClick={() => handleSearchTag(tag)}
								>{`#${tag}`}</Button>
							))}
						</div>

						<hr style={{ height: '0.5px', borderWidth: '0', color: '#C4C4C4', backgroundColor: '#C4C4C4' }} />
						<Comments data={question} user={user} type='question' />
					</Grid>
				</Grid>
				<hr style={{ height: '0.5px', borderWidth: '0', color: '#C4C4C4', backgroundColor: '#C4C4C4' }} />
				{user ? (
					<AddAnswer id={question?._id} />
				) : (
					<Typography align='center'>
						<Button
							variant='contained'
							color='primary'
							onClick={() => {
								history.push('/auth');
							}}
						>
							Sign in to write Answers
						</Button>
					</Typography>
				)}
				<Answers questionId={id} />
			</Paper>
		</div>
	);
};

export default QuestionDetail;
