import axios, { AxiosInstance } from 'axios';
import { MovieDetail } from './types';

class MovieService {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: 'http://www.omdbapi.com/'
    });
  }

  public async getMovieList(token: string, page = 1) {
    const result = await this.http.get('/', {
      params: {
        s: 'Batman',
        page,
        apikey: token
      }
    });

    return {
      result: result.data.Search,
      numberOfResult: result.data.totalResults
    };
  }

  public async getSpecificMovie(token: string, id: string): Promise<MovieDetail> {
    const result = await this.http.get('/', {
      params: {
        i: id,
        apikey: token
      }
    });

    return result.data;
  }
}

const movieService = new MovieService();

export default {
  movieService
};
