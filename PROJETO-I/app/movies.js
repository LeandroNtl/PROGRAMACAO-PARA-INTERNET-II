export async function getMovies(moviesEndPoint, genreId) {
    try {

        const response = await fetch(moviesEndPoint);
        const data = await response.json();
        const movies = data.results;

        if (genreId != 0) {
            return movies.filter(movie => movie.genre_ids.includes(parseInt(genreId)));
        } else {
            return movies;
        }   

    } catch (error) {
        throw error;
    }
}

export async function getPopularMovies(popularMoviesEndPoint) {
    try {

        const response = await fetch(popularMoviesEndPoint);
        const data = await response.json();
        const popularMovies = data.results;
        return popularMovies;

    } catch (error) {
        throw error;
    }
}

export async function getTopRatedMovies(topRatedMoviesEndPoint) {
    try {

        const response = await fetch(topRatedMoviesEndPoint);
        const data = await response.json();
        const topRatedMovies = data.results;
        return topRatedMovies;

    } catch (error) {
        throw error;
    }
}

export async function getUpcomingMovies(upcomingMoviesEndPoint) {
    try {

        const response = await fetch(upcomingMoviesEndPoint);
        const data = await response.json();
        const upcomingMovies = data.results;
        return upcomingMovies;

    } catch (error) {
        throw error;
    }
}

export function showMovies(movies) {
    const divMovies = document.getElementById("movies");
    const moviesHTML = movies.map(movie => {
        return `
            <div class="col" style="margin-bottom: 20px;">
                <div class="card" style="width: 18rem; height: 100%;">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text" style="height: 100px; overflow: auto;">${movie.overview}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Lançamento: ${movie.release_date}</li>
                        <li class="list-group-item">Avaliação: ${movie.vote_average}</li>
                    </ul>
                </div>
            </div>
        `
    });
    divMovies.innerHTML = moviesHTML.join("");
}

export function showPopularMovies(popularMovies) {
    const divPopularMovies = document.getElementById("slider");
    const mostPopularMovies = popularMovies.shift();
    const popularMoviesHTML = popularMovies.map(popularMovie => {
        return `
            <div class="carousel-item">
            <img src="https://image.tmdb.org/t/p/w500${popularMovie.backdrop_path}" class="d-block w-100" alt="${popularMovie.title}">
            </div>
        `
    });

    const actualActive = `<div class="carousel-item active">
    <img src="https://image.tmdb.org/t/p/w500${mostPopularMovies.backdrop_path}" class="d-block w-100" alt="${mostPopularMovies.title}">
    </div>`;

    divPopularMovies.innerHTML = popularMoviesHTML.join("") + actualActive;
}

export function showTopRatedMovies(topRatedMovies) {
    const divTopRatedMovies = document.getElementById("topratedmovies");
    const topRatedMoviesHTML = topRatedMovies.map(topRatedMovie => {
        return `
            <div class="col" style="margin-bottom: 20px;">
                <div class="card" style="width: 18rem; height: 100%;">
                    <img src="https://image.tmdb.org/t/p/w500${topRatedMovie.poster_path}" class="card-img-top" alt="${topRatedMovie.title}">
                    <div class="card-body">
                        <h5 class="card-title">${topRatedMovie.title}</h5>
                        <p class="card-text" style="height: 100px; overflow: auto;">${topRatedMovie.overview}</p>
                    </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Lançamento: ${topRatedMovie.release_date}</li>
                    <li class="list-group-item">Avaliação: ${topRatedMovie.vote_average}</li>
                </ul>
                </div>
            </div>
        `
    });
    divTopRatedMovies.innerHTML = topRatedMoviesHTML.join("");
}

export function showUpcomingMovies(upcomingMovies) {
    const divUpcomingMovies = document.getElementById("upcomingmovies");
    const upcomingMoviesHTML = upcomingMovies.map(upcomingMovie => {
        return `
            <div class="col" style="margin-bottom: 20px;">
                <div class="card" style="width: 18rem; height: 100%;">
                    <img src="https://image.tmdb.org/t/p/w500${upcomingMovie.poster_path}" class="card-img-top" alt="${upcomingMovie.title}">
                    <div class="card-body">
                        <h5 class="card-title">${upcomingMovie.title}</h5>
                        <p class="card-text" style="height: 100px; overflow: auto;">${upcomingMovie.overview}</p>
                    </div>
                <div class="list-group list-group-flush">
                    <li class="list-group-item">Lançamento: ${upcomingMovie.release_date}</li>
                    <li class="list-group-item">Avaliação: ${upcomingMovie.vote_average}</li>
                </div>
                </div>
            </div>
        `
    });
    divUpcomingMovies.innerHTML = upcomingMoviesHTML.join("");
}