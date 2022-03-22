import { Router } from "express";
import auth from "../../middleware/auth";
import NewsController from '../../controller/news.controller';
import validate from "../../validator/validate";
import SearchNews from '../../validator/searchNews.validator';

const router: Router = Router();
const newsController = new NewsController()

router.get("/fetch", auth, newsController.fetchNews);
router.post("/search",  validate(SearchNews), newsController.fetchNews);

export default router;
