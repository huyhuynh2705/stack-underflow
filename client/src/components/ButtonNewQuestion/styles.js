import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	buttonNewQuestion: {
		background: '#1976d2',
		color: '#ffffff',
		'&:hover': {
			backgroundColor: '#4e94da',
			color: '#FFFFFF',
		},
		[theme.breakpoints.down('xs')]: {
			minWidth: '0px',
			fontSize: '13px',
			textTransform: 'none',
		},
	},
}));
