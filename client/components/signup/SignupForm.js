import React from 'react';
import timezones from '../../data/timezones';

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
		console.log(this.state);
	}

	render() {
		return (
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
 						name="Username"
 						className="form-control"
 					/>
 				</div>

 				<div className="form-group">
 					<label className="control-label">password</label>
 					<input
 						value={this.state.password}
 						onChange={this.onChange}
 						type="text"
 						name="Username"
 						className="form-control"
 					/>
 				</div>

 				<div className="form-group">
 					<label className="control-label">password confirmation</label>
 					<input
 						value={this.state.passwordConfirmation}
 						onChange={this.onChange}
 						type="text"
 						name="Username"
 						className="form-control"
 					/>
 				</div>

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
 					<button className="btn btn-primary btn-lg">
 					sign up
 					</button>
 				</div>

			</form>

			);
	}
}

export default SignupForm;