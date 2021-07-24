import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import { likeAnswer, deleteAnswer } from '../../../actions/answers';
import Comments from '../../Comments/Comments';

import useStyles from './styles';

const Answer = ({ answer }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const user = JSON.parse(localStorage.getItem('profile'));
	const userId = user?.result.googleId || user?.result?._id;
	let dateCreated = moment(answer?.dateCreated);
	const hasLikedAnswer = answer?.likeCount?.find((id) => id === userId);

	const handleLike = () => {
		user ? dispatch(likeAnswer(answer?._id)) : history.push('/auth');
	};

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(deleteAnswer(answer?._id));
	};

	return (
		<div>
			<hr style={{ height: '0.5px', borderWidth: '0', color: '#C4C4C4', backgroundColor: '#C4C4C4' }} />
			<Grid container spacing={1}>
				<Grid item xs={2} sm={2} md={1}>
					<Typography className={classes.title3} variant='h6' align='center'>
						{answer?.likeCount?.length}
					</Typography>
					{hasLikedAnswer ? (
						<Button className={classes.button} size='small' variant='outlined' color='secondary' fullWidth onClick={handleLike}>
							Down
						</Button>
					) : (
						<Button className={classes.button} size='small' variant='outlined' color='primary' fullWidth onClick={handleLike}>
							Up
						</Button>
					)}
					{user?.result?._id === answer?.creatorId && (
						<Button className={classes.button} size='small' variant='outlined' color='secondary' onClick={handleDelete} fullWidth>
							Delete
						</Button>
					)}
				</Grid>
				<Grid item xs={10} sm={10} md={11}>
					<div className={classes.content} dangerouslySetInnerHTML={{ __html: answer?.content }}></div>
					<div className={classes.container}>
						<Typography className={classes.title2} variant='body2' gutterBottom>
							Created by: {answer?.creator}, at {dateCreated.format('LLLL')}
						</Typography>
					</div>
					<div className={classes.comment}>
						<hr style={{ height: '0.5px', borderWidth: '0', color: '#C4C4C4', backgroundColor: '#C4C4C4' }} />
						<Comments data={answer} user={user} type='answer' />
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Answer;
