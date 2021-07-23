import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomeQuestions from './components/Home/HomeQuestions/HomeQuestions';
import HomeTags from './components/Home/HomeTags/HomeTags';
import HomeUsers from './components/Home/HomeUsers/HomeUsers';
import NewQuestion from './components/NewQuestion/NewQuestion';
import Auth from './components/Auth/Auth';
import QuestionDetail from './components/QuestionDetail/QuestionDetail';

const App = () => {
	const user = JSON.parse(localStorage.getItem('profile'));

	return (
		<BrowserRouter>
			<CssBaseline>
				<NavBar />
				<Switch>
					<Route path='/' exact component={() => <Redirect to='/questions' />} />
					<Route path='/home' exact component={() => <Redirect to='/questions' />} />
					<Route path='/auth' exact component={() => (!user ? <Auth /> : <Redirect to='/' />)} />
					<Route path='/questions' exact component={HomeQuestions} />
					<Route path='/tags' exact component={HomeTags} />
					<Route path='/users' exact component={HomeUsers} />
					<Route path='/questions/search' exact component={HomeQuestions} />
					<Route path='/questions/tagged/:tagName' exact component={HomeQuestions} />
					<Route path='/questions/user/:userId' exact component={HomeQuestions} />
					<Route path='/questions/:id' exact component={QuestionDetail} />
					<Route path='/newquestion' exact component={NewQuestion} />
				</Switch>
			</CssBaseline>
		</BrowserRouter>
	);
};

export default App;
