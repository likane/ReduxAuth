import Validator from 'validator'

function validateInput(data) {
	let errors = {};

	if (Validator.isNull(data.username)) {
		errors.username = 'username is required';
	}
	if (Validator.isNull(data.email)) {
		errors.email = 'Email is required';
	}
	if (!Validator.isEmail(data.email)){
		errors.email = 'Email is invalid';
	}
	if (Validator.isNull(data.password)) {
		errors.password = 'password is required';
	}
	if (Validator.isNull(data.passwordConfirmation)) {
		errors.passwordConfirmation = 'password is required';
	}
	if (!Validator.equals(data.password, data.passwordConfirmation)){
		errors.passwordConfirmation = "passwords must match";
	}
	if (Validator.isNull(data.timezone)) {
		errors.timezone = 'timezone is required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
}
 