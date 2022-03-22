import Joi from "joi";

const SignupValidator = Joi.object({
  username: Joi.string().required(),
  password: Joi.string()
    .regex(/[a-zA-Z0-9]{6,30}/)
    .required(),
});

export default SignupValidator;
