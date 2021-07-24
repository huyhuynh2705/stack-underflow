import React from 'react';
import { Typography, Button, Grid, Grow } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

// import { fetchQuestionsBySearch } from '../../../actions/questions';

import useStyles from './styles';

function convertToPlain(html) {
	// Create a new div element
	var tempDivElement = document.createElement('div');

	// Set the HTML content with the given value
	tempDivElement.innerHTML = html;

	// Retrieve the text property of the element
	return tempDivElement.textContent || tempDivElement.innerText || '';
}

const Question = ({ question }) => {
	const classes = useStyles();
	const history = useHistory();

	const handleSearchTag = (tag) => {
		// dispatch(fetchQuestionsBySearch({ tags: tag }, page));
		history.push(`/questions/tagged/${tag}`);
	};

	return (
		<Grow in>
			<div>
				<Grid container spacing={1}>
					<Grid item xs={2} sm={1}>
						<Typography variant='body1' align='center'>
							{question?.voteCount?.length}
						</Typography>
						<Typography className={classes.text} variant='body2' align='center'>
							{question?.voteCount?.length <= 1 ? 'Vote' : 'Votes'}
						</Typography>
						<hr style={{ height: '0.5px', borderWidth: '0', color: '#C4C4C4', backgroundColor: '#C4C4C4' }} />
						<Typography variant='body1' align='center'>
							{question?.answer?.length}
						</Typography>
						<Typography className={classes.text} variant='body2' align='center'>
							{question?.voteCount?.length <= 1 ? 'Answer' : 'Answers'}
						</Typography>
					</Grid>
					<Grid item xs={10} sm={11}>
						<div className={classes.root}>
							<Typography variant='body1'>
								<Link className={classes.link} to={`/questions/${question?._id}`} underline='none' color='initial'>
									{question?.title.length <= 150 ? question?.title : question?.title.slice(0, 150) + '...'}
								</Link>
							</Typography>
							<Typography variant='body2' gutterBottom>
								{convertToPlain(question?.content).length <= 200
									? convertToPlain(question?.content)
									: convertToPlain(question?.content).slice(0, 200) + '...'}
							</Typography>
							<Grid container spacing={1}>
								<Grid item xs={12} sm={8}>
									{question?.tags.map((tag) => (
										<Button
											key={tag}
											className={classes.tags}
											variant='contained'
											disableElevation
											onClick={() => handleSearchTag(tag)}
										>{`#${tag}`}</Button>
									))}
								</Grid>
								<Grid item xs={12} sm={4}>
									<Typography variant='body2' align='right'>
										Created by: {question?.creator}
									</Typography>
								</Grid>
							</Grid>
						</div>
					</Grid>
				</Grid>
				<hr style={{ height: '0.5px', borderWidth: '0', color: '#C4C4C4', backgroundColor: '#C4C4C4' }} />
			</div>
		</Grow>
	);
};

export default Question;
