import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	content: {
		padding: '13px',
		paddingBottom: '0px',
	},
	tags: {
		background: '#e1ecf4',
		padding: '5px',
		display: 'inline-block',
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
