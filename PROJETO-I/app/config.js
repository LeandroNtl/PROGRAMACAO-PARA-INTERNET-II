
export const apiKey = ""

export const endPoints = {
    "Movies": `https://api.themoviedb.org/3/discover/movie?language=pt-BR&api_key=${apiKey}`,
    "Genres": `https://api.themoviedb.org/3/genre/movie/list?language=pt-BR&api_key=${apiKey}`,
    "PopularMovies": `https://api.themoviedb.org/3/movie/popular?language=pt-BR&api_key=${apiKey}`,
    "TopRatedMovies": `https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&api_key=${apiKey}`,
    "UpcomingMovies": `https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&api_key=${apiKey}`,
}