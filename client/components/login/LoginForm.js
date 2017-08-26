import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

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

		onSubmit(e) {
			e.preventDefault();
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

export default LoginForm;