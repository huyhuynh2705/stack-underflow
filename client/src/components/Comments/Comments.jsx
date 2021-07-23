import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { commentQuestion, deleteCommentQuestion } from '../../actions/questions';
import { commentAnswer, deleteCommentAnswer } from '../../actions/answers';

import useStyles from './styles';
import { Link } from 'react-router-dom';

const Comments = ({ data, user, type }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [isAdding, setIsAdding] = useState(false);
	const [comment, setComment] = useState('');

	const handleClick = (e) => {
		e.preventDefault();
		setIsAdding(!isAdding);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (type === 'question') {
			dispatch(commentQuestion(data?._id, { comment: `${data?.comment?.length} ${user?.result?.fullName}: ${comment}` }));
		} else {
			dispatch(commentAnswer(data?._id, { comment: `${data?.comment?.length} ${user?.result?.fullName}: ${comment}` }));
		}
		setComment('');
	};

	const handleChange = (e) => {
		e.preventDefault();
		setComment(e.target.value);
	};

	const handleDelete = (e, com) => {
		e.preventDefault();
		if (type === 'question') {
			dispatch(deleteCommentQuestion(data?._id, { comment: com }));
		} else {
			dispatch(deleteCommentAnswer(data?._id, { comment: com }));
		}
	};

	return (
		<div>
			{data?.comment?.length > 3 ? (
				<div className={classes.comment}>
					{data?.comment?.map((com, index) => (
						<div key={index}>
							<Typography variant='body2' style={{ fontSize: '13px' }}>
								{com.slice(com.split(' ')[0].length)}
								<Button className={classes.buttonDelete} onClick={(e) => handleDelete(e, com)}>
									Delete
								</Button>
							</Typography>
							{index !== data?.comment?.length - 1 && (
								<hr style={{ height: '0.5px', borderWidth: '0', color: '#C4C4C4', backgroundColor: '#C4C4C4' }} />
							)}
						</div>
					))}
					<hr style={{ height: '0.5px', borderWidth: '0', color: '#C4C4C4', backgroundColor: '#C4C4C4' }} />
				</div>
			) : (
				<div>
					{data?.comment?.map((com, index) => (
						<div key={index}>
							<Typography variant='body2' style={{ fontSize: '13px' }}>
								{com.slice(com.split(' ')[0].length)}
								<Button className={classes.buttonDelete} onClick={(e) => handleDelete(e, com)}>
									Delete
								</Button>
							</Typography>
							<div style={{ clear: 'both' }} />
							{index !== data?.comment?.length - 1 && (
								<hr style={{ height: '0.5px', borderWidth: '0', color: '#C4C4C4', backgroundColor: '#C4C4C4' }} />
							)}
						</div>
					))}
					{data?.comment?.length !== 0 && <hr style={{ height: '0.5px', borderWidth: '0', color: '#C4C4C4', backgroundColor: '#C4C4C4' }} />}
				</div>
			)}
			{user ? (
				isAdding ? (
					<form onSubmit={handleSubmit}>
						<TextField required value={comment} variant='outlined' color='primary' size='small' fullWidth onChange={handleChange} />
						<Button className={classes.button} color='secondary' variant='contained' onClick={handleClick}>
							Close
						</Button>
						<Button className={classes.button} color='primary' variant='contained' type='submit'>
							Post
						</Button>
						<div className={classes.clear} />
					</form>
				) : (
					<Button className={classes.buttonAdd} color='primary' onClick={handleClick}>
						Add a comment
					</Button>
				)
			) : (
				<Typography variant='body2'>
					<Link className={classes.link} to={'/auth'} underline='none' color='initial'>
						Sign in to add comment.
					</Link>
				</Typography>
			)}
		</div>
	);
};

export default Comments;
