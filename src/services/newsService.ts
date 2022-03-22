import Messages from "../config/Messages";
import NewsAPI from "newsapi";
import config from '../config/default';


export default class NewsService {
  newsapi = new NewsAPI(config.news_api_key);

  public async fetchNews(title: string | undefined) {
    return this.newsapi.v2.everything({
      q: title ?? 'bitcoin',
      sources: 'bbc-news,the-verge',
      domains: 'bbc.co.uk, techcrunch.com',
      language: 'en',
      sortBy: 'relevancy',
      page: 2
    })
  }
}
