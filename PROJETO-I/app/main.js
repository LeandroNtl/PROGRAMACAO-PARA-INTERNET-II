import { endPoints } from "./config.js"
import { getMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies, showMovies, showPopularMovies, showTopRatedMovies, showUpcomingMovies } from "./movies.js";
import { getGenres, selectGenre } from "./genres.js";

const moviesEndPoint = endPoints.Movies
const genresEndPoint = endPoints.Genres
const popularMoviesEndPoint = endPoints.PopularMovies
const topRatedMoviesEndPoint = endPoints.TopRatedMovies
const upcomingMoviesEndPoint = endPoints.UpcomingMovies

const genreId = document.getElementById("genres") 

getMovies(moviesEndPoint, genreId.value)
    .then(movies => showMovies(movies))
    .catch(error => console.log("Erro ao carregar filmes: " + error))

getGenres(genresEndPoint)
    .then(genres => selectGenre(genres))
    .catch(error => console.log("Erro ao carregar gêneros: " + error))

getPopularMovies(popularMoviesEndPoint)
    .then(popularMovies => showPopularMovies(popularMovies))
    .catch(error => console.log("Erro ao carregar filmes populares: " + error))

getTopRatedMovies(topRatedMoviesEndPoint)
    .then(topRatedMovies => showTopRatedMovies(topRatedMovies))
    .catch(error => console.log("Erro ao carregar filmes mais bem avaliados: " + error))

getUpcomingMovies(upcomingMoviesEndPoint)
    .then(upcomingMovies => showUpcomingMovies(upcomingMovies))
    .catch(error => console.log("Erro ao carregar filmes que serão lançados: " + error))

genreId.addEventListener("change", () => {
    getMovies(moviesEndPoint, genreId.value)
        .then(movies => showMovies(movies))
        .catch(error => console.log("Erro ao carregar filmes: " + error))
})