import React, { useEffect } from 'react';
import { CircularProgress, Grid, Grow } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import User from './User/User';

import { fetchUsers } from '../../actions/users';

import useStyles from './styles';

const Users = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { users, isLoading } = useSelector((store) => store.users);

	useEffect(() => {
		dispatch(fetchUsers(1));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return isLoading ? (
		<CircularProgress />
	) : (
		<Grow in>
			<div className={classes.root}>
				<Grid container spacing={1}>
					{users?.map((user) => (
						<Grid key={users.indexOf(user)} item xs={12} sm={6} md={4} lg={3}>
							<User user={user}></User>
						</Grid>
					))}
				</Grid>
			</div>
		</Grow>
	);
};

export default Users;
