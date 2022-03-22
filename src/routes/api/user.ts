import { Router } from "express";
import UserController from '../../controller/user.controller';
import Validate from "../../validator/validate";
import SignupValidator from "../../validator/signup.validator";

const router: Router = Router();
const userController = new UserController()

router.post("/signup", Validate(SignupValidator), userController.signup);

export default router;
