import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(4),
		marginLeft: theme.spacing(16),
		marginRight: theme.spacing(16),
		[theme.breakpoints.down('sm')]: {
			marginLeft: theme.spacing(8),
			marginRight: theme.spacing(8),
		},
		[theme.breakpoints.down('xs')]: {
			marginLeft: theme.spacing(0.5),
			marginRight: theme.spacing(0.5),
		},
	},
	paper: {
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		[theme.breakpoints.down('xs')]: {
			paddingLeft: theme.spacing(1),
			paddingRight: theme.spacing(1),
		},
	},
	title: {
		paddingTop: theme.spacing(1),
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		[theme.breakpoints.down('xs')]: {
			paddingLeft: theme.spacing(1),
			fontSize: '20px',
		},
	},
	title2: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		[theme.breakpoints.down('xs')]: {
			paddingLeft: theme.spacing(1),
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
	content: {
		overflowX: 'auto',
		maxHeight: theme.spacing(128),
		marginLeft: theme.spacing(2),
		[theme.breakpoints.down('xs')]: {
			marginLeft: theme.spacing(0),
		},
	},
	vote: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		[theme.breakpoints.down('xs')]: {
			display: 'inline-block',
			padding: '1px',
			minHeight: 0,
			minWidth: 0,
			fontSize: '13px',
			marginLeft: theme.spacing(0),
			marginRight: theme.spacing(0),
		},
	},
	tagholder: {
		margin: theme.spacing(2),
	},
	tags: {
		marginRight: '10px',
		display: 'inline-block',
		padding: '2px 5px',
		minHeight: 0,
		minWidth: 0,
		fontSize: '13px',
		textTransform: 'none',
	},
	link: {
		color: '#1864bd',
		textDecoration: 'none',
	},
	button: {
		marginTop: theme.spacing(2),
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
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
}));
