import { combineReducers } from 'redux';

import questions from './questions';
import auth from './auth';
import answers from './answers';
import tags from './tags';
import users from './users';

export const reducers = combineReducers({ questions, auth, answers, tags, users });
