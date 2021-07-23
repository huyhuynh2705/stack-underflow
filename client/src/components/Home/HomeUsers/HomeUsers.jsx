import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import Users from '../../Users/Users';
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
						<SideBar location={3} />
					</div>
				</Grid>
				<Grid item xs={12} sm={9} md={10} lg={10}>
					<div className={classes.container}>
						<Hamburger />
						<Grid container>
							<Grid item xs={6} sm={8} md={9}>
								<Typography className={classes.title} variant='h5'>
									Users
								</Typography>
							</Grid>
						</Grid>
						<Users />
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};

export default HomeTags;
