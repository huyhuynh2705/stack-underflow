import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Avatar, TextField, AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import decode from 'jwt-decode';
// import { fetchQuestionsBySearch } from '../../actions/questions';

import useStyles from './styles';

// const useQuery = () => {
// 	return new URLSearchParams(useLocation().search);
// };

const NavBar = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	// const query = useQuery();
	// const searchQuery = query.get('searchQuery');
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
	const [search, setSearch] = useState('');
	const location = useLocation();

	const signOut = () => {
		dispatch({ type: 'SIGN_OUT' });
		window.location.reload();
		setUser(null);
	};

	const searchQuestion = (e) => {
		if (search.trim()) {
			// dispatch(fetchQuestionsBySearch({ search }, 1));
			history.push(`/questions/search?searchQuery=${search}`);
		} else {
			history.push('/');
		}
	};

	useEffect(() => {
		const token = user?.token;

		if (token) {
			const decodedToken = decode(token);

			if (decodedToken.exp * 1000 < new Date().getTime()) signOut();
		}

		setUser(JSON.parse(localStorage.getItem('profile')));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	return (
		<div>
			<AppBar position='fixed'>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						<Link className={classes.link} to={'/'} underline='none' color='initial'>
							STACKUNDERFLOW
						</Link>
					</Typography>
					<div className={classes.search}>
						<TextField
							className={classes.textField}
							margin='dense'
							size='small'
							variant='filled'
							label='Search questions'
							fullWidth
							InputProps={{
								className: classes.input,
							}}
							InputLabelProps={{
								className: classes.inputLabel,
							}}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<Button variant='contained' color='default' onClick={searchQuestion}>
							Search
						</Button>
					</div>
					{user?.result ? (
						<div className={classes.profile}>
							<Avatar className={classes.purple} alt={user?.result.fullName} src={user?.result.imageUrl}>
								{user?.result.imageUrl ? user?.result.imageUrl : user?.result.fullName.charAt(0)}
							</Avatar>
							<Typography className={classes.userName} variant='h6'>
								{user?.result.fullName ? user?.result.fullName : user?.result.name}
							</Typography>
							<Button variant='contained' color='default' onClick={signOut}>
								Logout
							</Button>
						</div>
					) : (
						<Button className={classes.buttonSignIn} component={Link} to='/auth' variant='contained' color='default'>
							Sign In
						</Button>
					)}
				</Toolbar>
			</AppBar>
			<Toolbar />
		</div>
	);
};

export default NavBar;
