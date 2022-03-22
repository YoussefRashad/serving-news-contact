import { Router } from "express";
import UserController from '../../controller/user.controller';
import Validate from "../../validator/validate";
import LoginValidator from "../../validator/login.validator";
import SignupValidator from "../../validator/signup.validator";

const router: Router = Router();
const userController = new UserController()

router.post("/signup", Validate(SignupValidator), userController.signup);
router.post("/login", Validate(LoginValidator), userController.login);

export default router;
