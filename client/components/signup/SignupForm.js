import React from 'react';

class SignupForm extends React.Component {
	render() {
		return (
			<form>
 				<h1> Join our community</h1>

 				<div className="form-group">
 					<label className="control-label">Username</label>
 					<input
 						type="text"
 						name="Username"
 						className="form-control"
 					/>
 				</div>

 				<div className="form-group">
 					<button className="btn btn-primary btn-lg">
 					sign up
 					</button>
 				</div>

			</form>

			);
	}
}

export default SignupForm;