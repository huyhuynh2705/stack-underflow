import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(2),
		[theme.breakpoints.down('xs')]: {
			marginTop: theme.spacing(0),
		},
	},
}));
