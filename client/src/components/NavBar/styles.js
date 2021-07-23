import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
	title: {
		fontWeight: '500',
		[theme.breakpoints.down('xs')]: {
			flexGrow: 1,
		},
	},
	link: {
		color: '#ffffff',
		textDecoration: 'none',
	},
	userName: {
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	profile: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '300px',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			width: 'auto',
		},
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: '#4e94da',
		[theme.breakpoints.down('sm')]: {
			marginRight: theme.spacing(1),
		},
	},
	textField: {
		backgroundColor: '#FFFFFF',
		borderRadius: '5px',
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		fontWeight: 500,
		marginTop: '5px',
	},
	input: {
		color: '#000000',
		height: theme.spacing(5),
		paddingBottom: theme.spacing(1),
	},
	search: {
		flexGrow: 2,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.down('sm')]: {
			marginRight: theme.spacing(1),
		},
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	inputLabel: {
		height: theme.spacing(3),
		top: '-5px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '14px',
		},
	},
	buttonSignIn: {
		width: theme.spacing(14),
	},
}));
