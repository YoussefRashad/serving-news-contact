import { Router } from "express";
import auth from "../../middleware/auth";
import NewsController from '../../controller/news.controller';

const router: Router = Router();
const newsController = new NewsController()

router.get("/fetch", auth, newsController.fetchNews);

export default router;
