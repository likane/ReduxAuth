import React from 'react';
import {render} from 'react-dom';
//import App from './components/App';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes'; 
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import {setCurrentUser} from './actions/authActions';

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

if (localStorage.jwtToken) {
	setAuthorizationToken(localStorage.jwtToken);
	store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}
setAuthorizationToken(localStorage.jwtToken);

render(
	<Provider store={store}>
	<Router history={browserHistory} routes={routes} />

	</Provider>, document.getElementById('app'));