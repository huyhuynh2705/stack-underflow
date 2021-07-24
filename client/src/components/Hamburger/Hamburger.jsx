import React, { useState } from 'react';
import { Menu, Button, MenuItem, Hidden, Grid, TextField } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { useHistory } from 'react-router';

import useStyles from './styles';

const Hamburger = () => {
	const classes = useStyles();
	const history = useHistory();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [search, setSearch] = useState('');

	const searchQuestion = (e) => {
		if (search.trim()) {
			history.push(`/questions/search?searchQuery=${search}`);
		} else {
			history.push('/');
		}
	};
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleClickItem = (e, route) => {
		e.preventDefault();
		history.push(route);
	};

	return (
		<div className={classes.hamburger}>
			<Hidden smUp>
				<Grid container>
					<Grid item xs={2}>
						<Button className={classes.button} variant='contained' color='primary' onClick={handleClick} fullWidth>
							<MenuRoundedIcon className={classes.icon} />
						</Button>
						<Menu className={classes.menu} anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
							<MenuItem className={classes.menuItem} onClick={(e) => handleClickItem(e, '/')}>
								Home
							</MenuItem>
							<MenuItem className={classes.menuItem} onClick={(e) => handleClickItem(e, '/questions')}>
								Questions
							</MenuItem>
							<MenuItem className={classes.menuItem} onClick={(e) => handleClickItem(e, '/tags')}>
								Tags
							</MenuItem>
							<MenuItem className={classes.menuItem} onClick={(e) => handleClickItem(e, '/users')}>
								Users
							</MenuItem>
						</Menu>
					</Grid>
					<Grid item xs={10}>
						<div className={classes.search}>
							<TextField
								className={classes.textField}
								margin='dense'
								size='small'
								variant='outlined'
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
							<Button className={classes.button} variant='contained' color='primary' onClick={searchQuestion}>
								Search
							</Button>
						</div>
					</Grid>
				</Grid>
			</Hidden>
		</div>
	);
};

export default Hamburger;
