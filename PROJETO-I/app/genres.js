export async function getGenres(genresEndPoint) {
    try {

        const response = await fetch(genresEndPoint);
        const data = await response.json();
        const genres = data.genres;
        return genres;

    } catch (error) {
        throw error;
    }
}

export function selectGenre(genres) {
    const select = document.getElementById("genres");
    const genresHTML = genres.map(genre => {
        return `
            <option value="${genre.id}">${genre.name}</option>
        `
    });

    const defaultOption = `<option value="0" selected>Todos</option>`;
    select.innerHTML = genresHTML.join("") + defaultOption;
}