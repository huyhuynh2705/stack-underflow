import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	paper: {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		borderRadius: '5px',
		height: '100%',
		position: 'relative',
	},
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
		height: '100%',
	},
	link: {
		textDecoration: 'none',
		color: '#1864bd',
	},
}));
