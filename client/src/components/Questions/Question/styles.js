import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		padding: '10px',
	},
	link: {
		textDecoration: 'none',
		color: '#1864bd',
	},
	tags: {
		marginRight: '10px',
		marginBottom: '10px',
		display: 'inline-block',
		padding: '2px 10px',
		minHeight: 0,
		minWidth: 0,
		fontSize: '13px',
		textTransform: 'none',
	},
	button: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '12px',
		},
	},
}));
