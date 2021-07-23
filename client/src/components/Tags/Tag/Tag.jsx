import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';

import useStyles from './styles';

const Tag = ({ tag }) => {
	const classes = useStyles();
	const history = useHistory();

	const handleSearchTag = (tag) => {
		// history.push(`/questions/search?tags=${tag?.name}&page=${1}`);
		history.push(`/questions/tagged/${tag?.name}`);
	};

	return (
		<Card className={classes.card}>
			<CardContent className={classes.content}>
				<Button className={classes.tags} variant='contained' disableElevation onClick={() => handleSearchTag(tag)}>
					{tag?.name}
				</Button>
				<Typography className={classes.text} variant='body2'>
					{tag?.content.length <= 140 ? tag?.content : tag?.content.slice(0, 140) + '...'}
				</Typography>
			</CardContent>
			<CardActions>
				<Typography className={classes.text2} variant='body2' align='right'>
					{tag?.questionCount.length} {tag?.questionCount.length > 1 ? 'questions' : 'question'} asked.
				</Typography>
			</CardActions>
		</Card>
	);
};

export default Tag;
