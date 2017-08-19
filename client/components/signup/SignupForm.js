import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import classnames from 'classnames'

class SignupForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone: ''
			erros: {},
			isLoading: false
		}

		this.onChange=this.onChange.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({ [e.target.name]: e.target.value } );
	}

	onSubmit(e) {
		this.setState({ errors: {}, isLoading: true});
		e.preventDefault();
		this.props.userSignupRequest(this.state).then(
			() => {},
			({data}) => this.setState({errors: data, isLoading: false})
			);
	}

	render() {
		return (
			const {errors} = this.state;
			const options = map(timezones, (val, key)=>
				<option key={val} value={val} > {key}</option>
				);
			<form onSubmit={this.onSubmit}>
 				<h1> Join our community</h1>

 				<div className={classnames("form-group", {'has-error': errors.username })}>
 					<label className="control-label">Username</label>
 					<input
 						value={this.state.username}
 						onChange={this.onChange}
 						type="text"
 						name="Username"
 						className="form-control"
 					/>

 					{errors.username && <span className="help-block">{errors.username}</span>}
 				</div>

 				<div className={classnames("form-group", {'has-error': errors.email})}>
 					<label className="control-label">email</label>
 					<input
 						value={this.state.email}
 						onChange={this.onChange}
 						type="text"
 						name="email"
 						className="form-control"
 					/>
 				</div>

 				<div className={classnames("form-group", {'has-error': errors.password })}>
 					<label className="control-label">password</label>
 					<input
 						value={this.state.password}
 						onChange={this.onChange}
 						type="text"
 						name="password"
 						className="form-control"
 					/>
 				</div>

 				<div className={classnames("form-group", {'has-error': errors.passwordConfirmation })}>
 					<label className="control-label">password confirmation</label>
 					<input
 						value={this.state.passwordConfirmation}
 						onChange={this.onChange}
 						type="text"
 						name="passwordConfirmation"
 						className="form-control"
 					/>
 				</div>

 				 

 				<div className={classnames("form-group", {'has-error': errors.timezone })}>
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
 					<button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
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