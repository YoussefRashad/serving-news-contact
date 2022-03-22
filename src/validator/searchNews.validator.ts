import Joi from "joi";

const SearchValidate = Joi.object({
  query: Joi.string().required()
});

export default SearchValidate;