import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
		marginTop: theme.spacing(2),
		marginLeft: theme.spacing(24),
		marginRight: theme.spacing(24),
		[theme.breakpoints.down('md')]: {
			marginLeft: theme.spacing(12),
			marginRight: theme.spacing(12),
		},
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(1),
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			marginTop: theme.spacing(1),
		},
		[theme.breakpoints.down('xs')]: {
			marginLeft: theme.spacing(0.5),
			marginRight: theme.spacing(0.5),
			marginTop: theme.spacing(0),
		},
	},
	editor: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
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
