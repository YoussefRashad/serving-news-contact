import Joi from "joi";

const LoginValidator = Joi.object({
  username: Joi.string().required(),
  password: Joi.string()
    .regex(/[a-zA-Z0-9]{6,30}/)
    .required(),
});

export default LoginValidator;
