import React from 'react';
import { connect } from 'react-redux';
import { addFlashMessage} from '../actions/addFlashMessages';

export default function(ComposedComponent) {

class Authenticate extends React.Component {

	componentWillMount() {
		if (!this.props.isAuthenticated) {
			this.props.addFlashMessage({
				type:'error',
				text: 'you need to login to acces this page'
			});
			this.context.router.push('/login');
		}
	}

	componentWillMount(nextProps){
		if(!nextProps.isAuthenticated) {
			this.context.router.push('/');
		}
	}
	
	render() {
		return (

			<ComposedComponent {...this.props} />
			)
	}
}

Authenticate.propTypes = {
	isAuthenticated: React.propTypes.isRequired
}

Authenticate.contextTypes = {
	router: React.PropTypes.object.isRequired
}

function mapStateToProps(state){
	return {
		isAuthenticated: state.auth.isAuthenticated
	}
}

return connect(mapStateToProps, {addFlashMessage})(Authenticate);
}



