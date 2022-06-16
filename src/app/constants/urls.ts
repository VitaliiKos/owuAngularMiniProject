import {environment} from '../../environments/environment';

export const {API} = environment;
export const userKey = '38ede48569562a4c614b6d0235a79df7';

export const urls = {
  movieImages: 'https://image.tmdb.org/t/p/original/',
  actorImages: 'https://image.tmdb.org/t/p/original',
  genres: `${API}/genre/movie/list?api_key=${userKey}&language=en-US`,
  movieByGenre: `${API}/discover/movie?api_key=${userKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate`,
  movies: `${API}/discover/movie?api_key=${userKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate`,
  getMovieById: `${API}/movie/`,
  getToken:`${API}/authentication/token/new?api_key=${userKey}`,
  userPermission:`https://www.themoviedb.org/authenticate/`,
  sessionWithUser:`${API}/authentication/token/validate_with_login?api_key=${userKey}`,
  films: `${API}/discover/movie?&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate`,
  delSession:`${API}/authentication/session?api_key=${userKey}`


}
