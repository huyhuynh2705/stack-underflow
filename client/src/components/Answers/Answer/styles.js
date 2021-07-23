import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		marginLeft: theme.spacing(1),
	},
	content: {
		overflowX: 'auto',
		maxHeight: theme.spacing(64),
		marginLeft: theme.spacing(4),
		[theme.breakpoints.down('xs')]: {
			marginLeft: theme.spacing(0),
		},
	},
	comment: {
		marginLeft: theme.spacing(2),
	},
	button: {
		marginTop: theme.spacing(2),
		[theme.breakpoints.down('xs')]: {
			marginLeft: theme.spacing(0),
			marginRight: theme.spacing(0),
			display: 'inline-block',
			padding: '1px',
			minHeight: 0,
			minWidth: 0,
			fontSize: '12px',
		},
	},
	title3: {
		paddingLeft: theme.spacing(2),
		paddingTop: theme.spacing(0.5),
		paddingBottom: theme.spacing(0.5),
		[theme.breakpoints.down('xs')]: {
			paddingLeft: theme.spacing(0),
		},
	},
}));
