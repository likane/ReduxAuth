import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
//import {browserHistory} from 'react-router';

class SignupForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone: '',
			errors: {},
			isLoading: false,
			invalid: false
		}

		this.onChange=this.onChange.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({ [e.target.name]: e.target.value } );
	}

	isValid() {
		const {errors, isValid} = validateInput(this.state);

		if (!isValid) {
			this.setState({errors});
		}

		return isValid;
	}

	checkUserExists(e){
		const field = e.target.name;
		const val = e.target.value;
		if (val !== '') {
			this.props.isUserExists(val).then(res =>{
				let errors = this.state.errors;
				let invalid;
				if(res.data.user) {
					errors[field] = 'There is user with such ' + field;
					invalid = true;
				} else {
					errors[field] = '';
					invalid = false;
				}
				this.setState({ errors, invalid });
			});
		}
	}
	onSubmit(e) {
		e.preventDefault();

		if(this.isValid() {

			this.setState({ errors: {}, isLoading: true});
		
		this.props.userSignupRequest(this.state).then(
			() => {
				this.props.addFlashMessage({
					type:'success',
					text:'you have signed up'
				})
				this.context.router.push('/');
			},
			({data}) => this.setState({errors: data, isLoading: false})
			);
		})
		
	}

	render() {
		return (
			const {errors} = this.state;
			const options = map(timezones, (val, key)=>
				<option key={val} value={val} > {key}</option>
				);
			<form onSubmit={this.onSubmit}>
 				<h1> Join our community</h1>

 				<TextFieldGroup
 					error={errors.username}
 					label="Username"
 					onChange={this.onChange}
 					checkUserExists = {this.checkUserExists}
 					value={this.state.username}
 					field="username"
 				/>
 				<TextFieldGroup
 					error={errors.email}
 					label="Username"
 					onChange={this.onChange}
 					checkUserExists = {this.checkUserExists}
 					value={this.state.email}
 					field="username"
 				/>
 				<TextFieldGroup
 					error={errors.password}
 					label="Username"
 					onChange={this.onChange}
 					value={this.state.password}
 					field="username"
 				/>
 				<TextFieldGroup
 					error={errors.passwordConfirmation}
 					label="Username"
 					onChange={this.onChange}
 					value={this.state.passwordConfirmation}
 					field="username"
 				/>
 				<TextFieldGroup
 					error={errors.username}
 					label="Username"
 					onChange={this.onChange}
 					value={this.state.username}
 					field="username"
 				/>
 					<option value="" disabled> choose your timezone</option>
 					{options}

 					</select>
 				</div> 

 				<div className="form-group">
 					<button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
 					sign up
 					</button>
 				</div>

			</form>

			);
	}
}

SignupForm.propTypes ={
	userSignupRequest: React.propTypes.func.isRequired
	addFlashMessage: React.PropTypes.func.isRequired
}

SignupForm.contextType = {
	router: React.PropTypes.object.isRequired
}

export default SignupForm;