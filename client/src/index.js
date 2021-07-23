import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

import { reducers } from './reducers';

import App from './App';

const theme = createTheme({
	palette: {
		primary: {
			main: '#2D2D2D',
		},
		secondary: {
			main: '#E33E7F',
		},
	},
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDom.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);
