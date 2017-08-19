import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';

class SignupForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone: ''
		}

		this.onChange=this.onChange.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({ [e.target.name]: e.target.value } );
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.userSignupRequest(this.state);
	}

	render() {
		return (
			const options = map(timezones, (val, key)=>
				<option key={val} value={val} > {key}</option>
				);
			<form onSubmit={this.onSubmit}>
 				<h1> Join our community</h1>

 				<div className="form-group">
 					<label className="control-label">Username</label>
 					<input
 						value={this.state.username}
 						onChange={this.onChange}
 						type="text"
 						name="Username"
 						className="form-control"
 					/>
 				</div>

 				<div className="form-group">
 					<label className="control-label">email</label>
 					<input
 						value={this.state.email}
 						onChange={this.onChange}
 						type="text"
 						name="email"
 						className="form-control"
 					/>
 				</div>

 				<div className="form-group">
 					<label className="control-label">password</label>
 					<input
 						value={this.state.password}
 						onChange={this.onChange}
 						type="text"
 						name="password"
 						className="form-control"
 					/>
 				</div>

 				<div className="form-group">
 					<label className="control-label">password confirmation</label>
 					<input
 						value={this.state.passwordConfirmation}
 						onChange={this.onChange}
 						type="text"
 						name="passwordConfirmation"
 						className="form-control"
 					/>
 				</div>

 				 

 				<div className="form-group">
 					<label className="control-label">timezone</label>
 					<select
 						value={this.state.timezone}
 						onChange={this.onChange}
 						type="text"
 						name="timezone"
 						className="form-control"
 					>
 					<option value="" disabled> choose your timezone</option>
 					{options}

 					</select>
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

SignupForm.propTypes ={
	userSignupRequest: React.propTypes.func.isRequired
}

export default SignupForm;