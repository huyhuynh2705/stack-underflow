import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		// borderRight: `1px solid ${theme.palette.divider}`,
		float: 'left',
		height: '90vh',
		width: '100%',
	},
	tabs: {
		paddingTop: theme.spacing(4),
	},
	tab: {
		textTransform: 'none',
		'&.Mui-selected': {
			backgroundColor: '#dcdcdc',
		},
	},
	line: {
		width: '0.5px',
		height: '100vh',
		marginTop: '-5px',
		position: 'fixed',
		display: 'inline-block',
		borderWidth: '0',
		color: '#C4C4C4',
		backgroundColor: '#C4C4C4',
	},
	clear: {
		clear: 'both',
	},
	hamburger: {
		display: 'none',
		[theme.breakpoints.down('xs')]: {
			display: 'block',
		},
	},
}));
