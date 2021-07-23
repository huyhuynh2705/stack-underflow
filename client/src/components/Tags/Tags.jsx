import React, { useEffect } from 'react';
import { CircularProgress, Grid, Grow } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import Tag from './Tag/Tag';

import { fetchTags } from '../../actions/tags';

import useStyles from './styles';

const Tags = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { tags, isLoading } = useSelector((store) => store.tags);

	useEffect(() => {
		dispatch(fetchTags(1));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return isLoading ? (
		<CircularProgress />
	) : (
		<Grow in>
			<div className={classes.root}>
				<Grid container spacing={1}>
					{tags.map((tag) => (
						<Grid key={tag._id} item xs={12} sm={6} md={4} lg={3}>
							<Tag tag={tag} />
						</Grid>
					))}
				</Grid>
			</div>
		</Grow>
	);
};

export default Tags;
