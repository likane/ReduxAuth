import express from 'express';
import validateInput from '../shared/validations/signup';


let router = express.Router();


router.post('/', (req, res) => {

	SetTimeout(() => {



	const {errors, isValid } =validateInpute(req.body);

	if (!isValid) {
		res.status(400).json(errors);
	}

}, 5000);
});

export default router;