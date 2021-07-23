import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import Tags from '../../Tags/Tags';
import SideBar from '../../SideBar/SideBar';
import Hamburger from '../../Hamburger/Hamburger';

import useStyles from './styles';

const HomeTags = () => {
	const classes = useStyles();
	return (
		<Container maxWidth={false} className={classes.root}>
			<Grid container spacing={1}>
				<Grid item xs={false} sm={3} md={2} lg={2}>
					<div className={classes.sidebar}>
						<SideBar location={2} />
					</div>
				</Grid>
				<Grid item xs={12} sm={9} md={10} lg={10}>
					<div className={classes.container}>
						<Hamburger />
						<Grid container>
							<Grid item xs={6} sm={8} md={9}>
								<Typography className={classes.title} variant='h5'>
									Tags
								</Typography>
							</Grid>
							<Grid item xs={6} sm={4} md={3}></Grid>
							<Typography className={classes.content} variant='body2'>
								A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier
								for others to find and answer your question.
							</Typography>
						</Grid>
						<Tags />
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};

export default HomeTags;
