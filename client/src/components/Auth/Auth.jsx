import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Icon from './icon';
import { signUp, signIn, signInWithGoogle } from '../../actions/auth';
import useStyles from './styles';
import Input from './Input';

const initialState = { fullName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
	const [form, setForm] = useState(initialState);
	const [isSignup, setIsSignup] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();

	const [showPassword, setShowPassword] = useState(false);
	const handleShowPassword = () => setShowPassword(!showPassword);

	const switchMode = () => {
		setIsSignup((prevIsSignup) => !prevIsSignup);
		setShowPassword(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (isSignup) {
			if (form.password !== form.confirmPassword) {
				alert('Password and confirm password must be the same.');
			} else {
				dispatch(signUp(form, history));
			}
		} else {
			dispatch(signIn(form, history));
		}
	};

	const googleSuccess = async (res) => {
		const result = res?.profileObj;
		try {
			dispatch(signInWithGoogle(result, history));
		} catch (error) {
			console.log(error);
		}
	};

	const googleError = () => console.log('Google Sign In was unsuccessful. Try again later');

	const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

	return (
		<Container component='main' maxWidth='xs'>
			<Paper className={classes.paper} elevation={6}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					{isSignup ? 'Sign up' : 'Sign in'}
				</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{isSignup && (
							<>
								<Input name='fullName' label='Full Name' handleChange={handleChange} required fullWidth />
							</>
						)}
						<Input name='email' label='Email Address' handleChange={handleChange} required type='email' />
						<Input
							name='password'
							label='Password'
							handleChange={handleChange}
							type={showPassword ? 'text' : 'password'}
							handleShowPassword={handleShowPassword}
							required
							fullWidth
						/>
						{isSignup && (
							<Input
								name='confirmPassword'
								label='Repeat Password'
								handleChange={handleChange}
								type={showPassword ? 'text' : 'password'}
								required
								fullWidth
							/>
						)}
					</Grid>
					<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
						{isSignup ? 'Sign Up' : 'Sign In'}
					</Button>
					<GoogleLogin
						clientId='990227093824-5npfhcoamoubthhdh57k3784lfi20aln.apps.googleusercontent.com'
						render={(renderProps) => (
							<Button
								className={classes.googleButton}
								color='primary'
								fullWidth
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
								startIcon={<Icon />}
								variant='contained'
							>
								Google Sign In
							</Button>
						)}
						onSuccess={googleSuccess}
						onFailure={googleError}
						cookiePolicy='single_host_origin'
					/>
					<Grid container justifyContent='flex-end'>
						<Grid item>
							<Button onClick={switchMode}>{isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default Auth;
