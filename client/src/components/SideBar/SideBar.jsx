import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { useHistory } from 'react-router';

import useStyles from './styles';

const SideBar = ({ location }) => {
	const classes = useStyles();
	const history = useHistory();
	const value = location;

	const handleChange = (e, newValue) => {
		switch (newValue) {
			case 0:
				history.push('/');
				break;
			case 1:
				history.push('/questions');
				break;
			case 2:
				history.push('/tags');
				break;
			case 3:
				history.push('/users');
				break;
			default:
				history.push('/');
				break;
		}
	};

	return (
		<>
			<div className={classes.root}>
				<Tabs className={classes.tabs} indicatorColor='primary' orientation='vertical' value={value} onChange={handleChange}>
					<Tab className={classes.tab} label='Home' />
					<Tab className={classes.tab} label='Questions' />
					<Tab className={classes.tab} label='Tags' />
					<Tab className={classes.tab} label='Users' />
				</Tabs>
			</div>
			<hr className={classes.line} />
			<div className={classes.clear} />
		</>
	);
};

export default SideBar;
