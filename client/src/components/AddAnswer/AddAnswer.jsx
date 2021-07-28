import { Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { useDispatch } from 'react-redux';

import useStyles from './styles';

import { addAnswer } from '../../actions/answers';

const AddComment = ({ id }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [content, setContent] = useState('');

	const user = JSON.parse(localStorage.getItem('profile'));

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addAnswer(id, { content: content, creator: user?.result.fullName, creatorId: user?.result._id, voteCount: [] }));
	};

	const handleChangeContent = (value) => {
		setContent(value);
	};

	return (
		<div className={classes.root}>
			<form onSubmit={handleSubmit}>
				<Typography variant='h6'>Your answer</Typography>
				<SunEditor
					setOptions={{
						buttonList: buttonList.complex,
					}}
					onChange={handleChangeContent}
				/>
				{content !== '' ? (
					<Button className={classes.button} variant='contained' color='primary' type='submit'>
						Post answer
					</Button>
				) : (
					<Button className={classes.button} variant='contained' color='primary' disabled type='submit'>
						Post answer
					</Button>
				)}
			</form>
			<div className={classes.clear}></div>
		</div>
	);
};

export default AddComment;
