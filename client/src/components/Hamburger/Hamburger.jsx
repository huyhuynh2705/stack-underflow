import React from 'react';
import { Menu, Button, MenuItem, Hidden } from '@material-ui/core';
import { useHistory } from 'react-router';

import useStyles from './styles';

const Hamburger = () => {
	const classes = useStyles();
	const history = useHistory();
	const [anchorEl, setAnchorEl] = React.useState(null);

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
				<Button variant='contained' color='primary' onClick={handleClick} fullWidth>
					Open Menu
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
			</Hidden>
		</div>
	);
};

export default Hamburger;
