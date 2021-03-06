import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		maxWidth: '1400px',
	},
	root2: {
		marginLeft: theme.spacing(2),
		[theme.breakpoints.down('xs')]: {
			marginLeft: theme.spacing(0),
		},
	},
	container: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(2),
	},
	sidebar: {
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	title: {
		marginLeft: theme.spacing(2),
		marginTop: theme.spacing(1),
		[theme.breakpoints.down('xs')]: {
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(1),
			marginLeft: theme.spacing(1),
			fontSize: '20px',
		},
	},
}));
