import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	hamburger: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		[theme.breakpoints.down('xs')]: {
			marginBottom: theme.spacing(0),
		},
	},
	menu: {
		marginTop: theme.spacing(6),
	},
	menuItem: {
		width: '100vh',
	},
	button: {
		minWidth: '0px',
		fontSize: '13px',
		textTransform: 'none',
	},
	icon: {
		margin: '0px',
		padding: '0px',
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
		height: '36px',
		paddingBottom: theme.spacing(1),
	},
	search: {
		// width: theme.spacing(32),
		width: '100%',
		marginTop: '-5px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	inputLabel: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '14px',
		},
	},
}));
