import React from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';

const Paginate = ({ page, tab, tagged, searchQuery, userId }) => {
	const classes = useStyles();
	const history = useHistory();
	const { numberOfPages } = useSelector((state) => state.questions);

	const handleClick = (e, page) => {
		e.preventDefault();
		if (searchQuery) {
			history.push(`/questions/search?searchQuery=${searchQuery}&page=${page}`);
			return;
		}
		if (userId) {
			history.push(`/questions/user/${userId}?page=${page}`);
			return;
		}
		if (tagged) {
			history.push(`/questions/tagged/${tagged}?page=${page}`);
			return;
		} else {
			history.push(`/questions?tab=${tab}&page=${page}`);
			return;
		}
	};

	return (
		<div className={classes.root}>
			<Pagination
				count={numberOfPages}
				page={Number(page) || 1}
				color='primary'
				renderItem={(item) => <PaginationItem {...item} onClick={(e) => handleClick(e, item.page)} />}
			/>
		</div>
	);
};

export default Paginate;
