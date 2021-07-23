import React from 'react';
import { Button } from '@material-ui/core';

import { Link } from 'react-router-dom';

import useStyles from './styles';

const ButtonNewQuestion = () => {
	const classes = useStyles();

	return (
		<Button className={classes.buttonNewQuestion} component={Link} to='/newquestion' size='medium' variant='contained' fullWidth>
			Ask Question
		</Button>
	);
};

export default ButtonNewQuestion;
