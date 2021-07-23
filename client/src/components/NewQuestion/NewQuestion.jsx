import React, { useState, useEffect } from 'react';
import { Paper, Typography, TextField, Button, CircularProgress, Grid, CardActionArea } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

import ButtonGoBack from '../ButtonGoBack/ButtonGoBack';
import RecommendTag from './RecommendTag/RecommendTag';

import { createQuestion } from '../../actions/questions';
import { getRecommendTags } from '../../actions/tags';

import useStyles from './styles';

const initial = { title: '', content: '', creator: '', tags: [] };

const NewQuestion = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const user = JSON.parse(localStorage.getItem('profile'));
	const [form, setForm] = useState(initial);
	const [content, setContent] = useState('');
	const [errors, setError] = useState({ titleError: '', bodyError: '', tagError: '' });
	const tags = useSelector((store) => store.tags.recommendTags);
	const [tagsArray, setTagsArray] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		let error = validate(form, content);
		if (error.titleError !== '' || error.bodyError !== '' || error.tagError !== '') {
			setError(error);
		} else {
			const id = await dispatch(createQuestion({ ...form, creator: user?.result.fullName, content: content }));
			history.push(`/questions/${id}`);
		}
	};

	const validate = (form, content) => {
		let errors = { titleError: '', bodyError: '', tagError: '' };
		if (form.title?.length <= 20) errors.titleError = 'Title must be at least 20 characters!';
		if (content?.length < 20) errors.bodyError = 'Body must be at least 20 characters!';
		if (form.tags?.length === 0) errors.tagError = 'Tags must be at least 1 tag!';
		return errors;
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleChangeContent = (value) => {
		setContent(value);
	};

	const handleAddChip = (e, tag) => {
		e.preventDefault();
		setForm({ ...form, tags: [...form.tags, tag] });
		dispatch({ type: 'RESET_RECOMMEND_TAGS' });
	};

	const handleDeleteChip = (chipToDelete) => {
		setForm({ ...form, tags: form.tags.filter((tag) => tag !== chipToDelete) });
	};

	const handleChangeChip = (e) => {
		if (e.target.value !== '') {
			let tagToSearch = e.target.value;
			dispatch(getRecommendTags({ tag: tagToSearch }));
		} else {
			setTagsArray([]);
		}
	};

	useEffect(() => {
		dispatch({ type: 'RESET_RECOMMEND_TAGS' });
		if (!user) {
			history.push('/auth');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (tags) {
			let array = [];
			for (const tag of tags) {
				if (!form.tags.includes(tag.name)) array.push(tag);
			}
			setTagsArray(array);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tags]);

	return (
		<div>
			{!user ? (
				<Paper className={classes.root}>
					<CircularProgress />
				</Paper>
			) : (
				<Paper className={classes.root}>
					<form onSubmit={handleSubmit}>
						<Typography variant='h4'>Ask a question.</Typography>
						<Typography className={classes.title} variant='h6'>
							Title
						</Typography>
						<Typography variant='body2'>Be specific and imagine you’re asking a question to another person</Typography>
						<TextField error={errors.titleError !== ''} name='title' required variant='outlined' size='small' fullWidth onChange={handleChange} />
						{errors?.titleError !== '' && (
							<Typography variant='caption' color='secondary'>
								{errors?.titleError}
							</Typography>
						)}
						<Typography className={classes.title} variant='h6'>
							Body
						</Typography>
						<Typography variant='body2'>Include all the information someone would need to answer your question</Typography>
						<SunEditor
							required
							setOptions={{
								height: 200,
								buttonList: buttonList.formatting,
							}}
							onChange={handleChangeContent}
						/>
						{errors?.bodyError !== '' && (
							<Typography variant='caption' color='secondary'>
								{errors?.bodyError}
							</Typography>
						)}
						<Typography className={classes.title} variant='h6'>
							Tags
						</Typography>
						<Typography variant='body2' gutterBottom>
							Add tags to describe what your question is about
						</Typography>
						<ChipInput
							name='tags'
							size='small'
							variant='outlined'
							label='Ex: nodejs react (Hit Enter on each tag.)'
							fullWidth
							value={form.tags}
							onAdd={() => {}}
							onUpdateInput={(e) => handleChangeChip(e)}
							onDelete={(chip) => handleDeleteChip(chip)}
						/>
						{errors?.tagError !== '' && (
							<Typography variant='caption' color='secondary'>
								{errors?.tagError}
							</Typography>
						)}
						{tagsArray?.length !== 0 && (
							<Paper className={classes.paper2}>
								<Grid container spacing={1}>
									{tagsArray?.map((tag) => (
										<Grid key={tagsArray.indexOf(tag)} item xs={12} sm={4} md={3}>
											<CardActionArea onClick={(e) => handleAddChip(e, tag.name)}>
												<RecommendTag tag={tag} />
											</CardActionArea>
										</Grid>
									))}
								</Grid>
							</Paper>
						)}
						<Grid container>
							<Grid item xs={6} sm={3}>
								<div className={classes.buttonBack}>
									<ButtonGoBack history={history} />
								</div>
							</Grid>
							<Grid item xs={false} sm={5}></Grid>
							<Grid item xs={6} sm={4}>
								<Button className={classes.buttonPost} variant='contained' color='primary' type='submit' fullWidth>
									Post question
								</Button>
							</Grid>
						</Grid>
					</form>
				</Paper>
			)}
		</div>
	);
};

export default NewQuestion;
