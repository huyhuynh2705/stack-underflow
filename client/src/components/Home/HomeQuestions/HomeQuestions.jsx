import React, { useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ButtonNewQuestion from '../../ButtonNewQuestion/ButtonNewQuestion';
import Questions from '../../Questions/Questions';
import SideBar from '../../SideBar/SideBar';
import Hamburger from '../../Hamburger/Hamburger';

import { getTag } from '../../../actions/tags';

import useStyles from './styles';

const Home = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { tagName } = useParams();
	const { userId } = useParams();
	const tag = useSelector((store) => store.tags.tag);

	const titleRender = (tagName, userId) => {
		if (tagName && !userId) {
			return (
				<Typography className={classes.title} variant='h5'>
					Questions tagged [{tagName}]
				</Typography>
			);
		} else if (!tagName && userId) {
			return (
				<Typography className={classes.title} variant='h5'>
					Questions of user
				</Typography>
			);
		} else {
			return (
				<Typography className={classes.title} variant='h5'>
					All Questions
				</Typography>
			);
		}
	};

	useEffect(() => {
		tagName && dispatch(getTag(tagName));
		// eslint-disable-next-line
	}, [tagName]);

	return (
		<Container maxWidth={false} className={classes.root}>
			<Grid container>
				<Grid item xs={false} sm={3} md={2} lg={2}>
					<div className={classes.sidebar}>
						<SideBar location={1} />
					</div>
				</Grid>
				<Grid item xs={12} sm={9} md={10} lg={10}>
					<div className={classes.container}>
						<Hamburger />
						<Grid container>
							<Grid item xs={6} sm={8} md={9}>
								{titleRender(tagName, userId)}
							</Grid>
							<Grid item xs={6} sm={4} md={3}>
								<div className={classes.button}>
									<ButtonNewQuestion />
								</div>
							</Grid>
							{tagName && (
								<Typography className={classes.content} variant='body2'>
									{tag?.content}
								</Typography>
							)}
						</Grid>
						<Questions />
					</div>
				</Grid>
				<Grid item md={false} lg={2}></Grid>
			</Grid>
		</Container>
	);
};

export default Home;
