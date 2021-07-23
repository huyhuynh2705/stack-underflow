import React from 'react';
import { CardActions, CardContent, Typography, Paper } from '@material-ui/core';

import useStyles from './styles';

const RecommendTag = ({ tag }) => {
	const classes = useStyles();

	return (
		<div className={classes.card}>
			<CardContent className={classes.content}>
				<Paper className={classes.tags} elevation={0}>
					<Typography className={classes.text} variant='body2'>
						{tag?.name}
					</Typography>
				</Paper>
				<Typography className={classes.text} variant='body2'>
					{tag?.content?.length <= 150 ? tag?.content : tag?.content?.slice(0, 150) + '...'}
				</Typography>
			</CardContent>
			<CardActions>
				<Typography className={classes.text2} variant='body2' align='right'>
					{tag?.questionCount?.length} {tag?.questionCount?.length > 1 ? 'questions' : 'question'} asked.
				</Typography>
			</CardActions>
		</div>
	);
};

export default RecommendTag;
