// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const MOVIE_DETAILS_BASE_URL = `${API_URL}`;
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=`;
const SEARCH_BASE_URL_TV = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&include_adult=false&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`;
const NOW_PLAYING_MOVIES = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US`;
const UPCOMING_MOVIES = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US`;
const TV_POPULAR_BASE_URL = `${API_URL}tv/top_rated?api_key=${API_KEY}&language=en-US`;

// For login and voting
const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w500';
const IMAGE_BASE_URL_HD = 'http://image.tmdb.org/t/p/original';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  MOVIE_DETAILS_BASE_URL,
  SEARCH_BASE_URL,
  SEARCH_BASE_URL_TV,
  POPULAR_BASE_URL,
  NOW_PLAYING_MOVIES,
  UPCOMING_MOVIES,
  TV_POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  IMAGE_BASE_URL_HD,
  BACKDROP_SIZE,
  POSTER_SIZE,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
};