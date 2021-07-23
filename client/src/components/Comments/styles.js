import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	button: {
		marginTop: theme.spacing(1),
		marginRight: theme.spacing(2),
		float: 'right',
		width: theme.spacing(10),
	},
	clear: {
		clear: 'both',
	},
	comment: {
		height: theme.spacing(10),
		overflowY: 'auto',
	},
	link: {
		color: '#1864bd',
		textDecoration: 'none',
	},
	buttonAdd: {
		display: 'inline-block',
		padding: '5px',
		fontSize: '13px',
		marginTop: '0px',
	},
	buttonDelete: {
		display: 'inline-block',
		float: 'right',
		padding: '2px 10px',
		fontSize: '13px',
		marginBottom: '-5px',
		marginTop: '-5px',
	},
}));
