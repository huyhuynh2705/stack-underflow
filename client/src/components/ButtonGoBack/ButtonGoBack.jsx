import { Button } from '@material-ui/core';
import React from 'react';

import useStyles from './styles';

const ButtonGoBack = ({ history }) => {
	const classes = useStyles();

	const handleGoBack = (e) => {
		e.preventDefault();
		history.goBack();
	};

	return (
		<Button className={classes.button} variant='outlined' color='primary' onClick={handleGoBack}>
			Go Back
		</Button>
	);
};

export default ButtonGoBack;
