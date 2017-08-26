import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../server/shared/validations/login';
import { connect } from 'react-redux';
import { login} from '../../actions/login';

class LoginForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			identifier: '',
			password: '',
			errors: {},
			isLoading: false
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	render() {
		const { errors, identifier, password, isLoading} = this.state;
		isValid() {
			const {errors.isValid} = validateInput(this.state);

			if (!isValid) {
				this.setState({ errors });
			}

			return isValid;
		}
		

		onSubmit(e) {
			e.preventDefault();

			 if (this.isValid()) {
			 	this.setState({errors: {}, isLoading: true});
			 	this.props.login(this.state);
			 }
		}

		onChange(e) {
			this.setState({ [e.target.name]: e.target.value});
		}
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Login</h1>

				<TextFieldGroup
					field="identifier"
					label="Username / Email"
					value={identifier}
					errors={error.identifier}
					onChange={this.onChange}
				/>

				<TextFieldGroup
					field="password"
					label="password"
					value={password}
					errors={error.password}
					onChange={this.onChange}
					type="password"
				/>

				<div className="form-group">
					<button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button>
				</div>

			</form>

			);
	}
}

LoginForm.propTypes = {
	login: React.propTypes.func.isRequired
}

export default  connect(null, {login}) (LoginForm);