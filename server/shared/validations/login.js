import Validator from 'Validator';
import isEmpty from 'lodash/isEmpty';

export default function valideInput(date) {
	let errors = {};

	if (Validator.isNull(data.identifier)) {
		errors.identifier = 'this field is required';
	}

	if (Validator.isNull(data.password)) {
		errors.password = 'this field is required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
}