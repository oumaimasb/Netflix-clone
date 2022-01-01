// key: e43167f1b511910cbc3828ffa092dff2
//base: https://api.themoviedb.org/3
//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
///trending/{media_type}/{time_window}

const API_KEY = "e43167f1b511910cbc3828ffa092dff2";
const API_URL = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `${API_URL}/trending/all/week?api_key=${API_KEY} `,
  fetchNetflixOriginals: `${API_URL}/trending/all/week?api_key=${API_KEY} `,
  fetchTopRated: `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&width_genres=28`,
  fetchComedyMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&width_genres=35`,
  fetchHorrorMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&width_genres=27`,
  fetchRomanceMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&width_genres=10749`,
  fetchDocumentaries: `${API_URL}/discover/movie?api_key=${API_KEY}&width_genres=99`,
};
export default requests;
