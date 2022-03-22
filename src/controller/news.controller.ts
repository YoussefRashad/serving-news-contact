import { Response } from "express";
import HttpStatusCodes from "http-status-codes";
import NewsService from '../services/newsService';

export default class NewsController {
  newsService = new NewsService()

  public fetchNews = async (res: Response) => {
    try {
      const news = await this.newsService.fetchNews("")
      return res.status(HttpStatusCodes.OK).send({ news });
    } catch (error) {
      return res
      .status(HttpStatusCodes.BAD_REQUEST)
      .send({ error: error.message });
    }
  }
}
