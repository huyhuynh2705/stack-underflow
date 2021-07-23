import React from 'react';
import { Avatar, Grid, Paper, Typography } from '@material-ui/core';
import moment from 'moment';

import useStyles from './styles';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
	const classes = useStyles();
	const date = moment(user?.dateCreated);

	return (
		<Paper className={classes.paper}>
			<Grid container>
				<Grid item xs={4}>
					<div className={classes.container}>
						<Avatar className={classes.avatar} alt={user?.fullName} src={user?.imageUrl}>
							{user?.imageUrl ? user?.imageUrl : user?.fullName.charAt(0)}
						</Avatar>
					</div>
				</Grid>
				<Grid item xs={8}>
					<Typography variant='body2'>
						<Link className={classes.link} to={`/questions/user/${user?._id}`} color='initial'>
							{user?.fullName}
						</Link>
					</Typography>
					<Typography variant='caption'>joined {date.fromNow()}</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default User;
