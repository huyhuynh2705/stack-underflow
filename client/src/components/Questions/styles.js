import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		paddingTop: theme.spacing(1),
		[theme.breakpoints.down('xs')]: {
			paddingTop: theme.spacing(0),
		},
	},
	paper: {
		display: 'flex',
		justifyContent: 'flex-end',
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'flex-start',
		},
	},
	paper2: {
		padding: '15px',
		marginTop: '-2px',
	},
	toggle: {
		background: '#FFFFFF',
		color: '#202020',
		border: '1px solid #717171',
		textTransform: 'none',
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	tab: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '12px',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '10px',
		},
	},
	sideBar: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	title2: {
		marginLeft: theme.spacing(2),
		fontWeight: '500',
		[theme.breakpoints.down('xs')]: {
			marginTop: theme.spacing(0),
			marginLeft: theme.spacing(0),
			fontSize: '15px',
		},
	},
	buttonBack: {
		marginLeft: theme.spacing(2),
		[theme.breakpoints.down('xs')]: {
			marginLeft: theme.spacing(0),
		},
	},
}));
