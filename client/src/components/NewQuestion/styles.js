import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		padding: '15px',
		marginTop: theme.spacing(2),
		marginLeft: theme.spacing(4),
		marginRight: theme.spacing(4),
		[theme.breakpoints.down('sm')]: {
			marginLeft: theme.spacing(0.5),
			marginRight: theme.spacing(0.5),
			marginTop: theme.spacing(0.5),
		},
	},
	title: {
		marginTop: '10px',
	},
	buttonPost: {
		marginTop: '10px',
	},
	buttonBack: {
		marginTop: '10px',
	},
}));
