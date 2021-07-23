import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	content: {
		padding: '13px',
		paddingBottom: '0px',
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
	text: {
		fontSize: '13px',
	},
	text2: {
		fontSize: '13px',
		color: '#848d95',
		textDecoration: 'none',
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		borderRadius: '5px',
		height: '100%',
		position: 'relative',
	},
}));
