import React, { useEffect } from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Answer from './Answer/Answer';

import { fetchAnswers } from '../../actions/answers';

const Answers = ({ questionId }) => {
	const dispatch = useDispatch();
	const { answers, isLoading } = useSelector((state) => state.answers);

	useEffect(() => {
		dispatch(fetchAnswers(questionId));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<Typography variant='h6'>
				{answers?.length} {answers?.length > 1 ? 'answers' : 'answer'}
			</Typography>
			{isLoading ? (
				<CircularProgress />
			) : (
				answers?.map((answer) => (
					<div key={answer._id}>
						<Answer answer={answer} />
					</div>
				))
			)}
		</div>
	);
};

export default Answers;
