const processMovie = movie => ({
    title: movie.Title,
    year: movie.Year,
    plot: movie.Plot,
    genre:  movie.Genre,
    actors: movie.Actors,
    director: movie.Director, 
})

export const searchMovie = async (title,year,plot) => {
    let searchString = 'http://www.omdbapi.com/?'
    searchString = searchString.concat(`t=${title}`)
    if (year !== 0) {
        searchString = searchString.concat(`&y=${year}`)
    }
    if (plot !== '') {
        searchString = searchString.concat(`&plot=${plot}`)
    }
    searchString = searchString.concat('&apikey=7fa2f6cb')
    const response = await fetch(searchString)
    const results = await response.json()

    console.log(searchString)

    return processMovie(results)
    
  }