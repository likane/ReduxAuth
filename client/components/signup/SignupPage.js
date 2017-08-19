import React from 'react';
import SignupForm from 'SignupForm';

import {connect} from 'react-redux';
import {userSignupRequest} from '../../actions/signupActions';


class SignupPage extends React.Component {
	render() {
		return (
			const {userSignupRequest} = this.props;
			<div className="row">
				<div className="col-md-4 col-md-offset-4">
					<SignupForm userSignupRequest={userSignupRequest}/>
				</div>
			</div>

			
			);
	}
}

SignupPage.propTypes ={
	userSignupRequest: React.propTypes.func.isRequired
}


export default connect((state) => { null, {userSignupRequest}) SignupPage;