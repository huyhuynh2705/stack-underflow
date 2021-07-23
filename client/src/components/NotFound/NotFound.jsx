import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const NotFound = () => (
	<div style={{ marginTop: '20px' }}>
		<Typography variant='h4' align='center'>
			Not Found
		</Typography>
		<Typography variant='h6' align='center'>
			<Link to='/' style={{ textDecoration: 'none' }}>
				Back to homepage
			</Link>
		</Typography>
	</div>
);

export default NotFound;
