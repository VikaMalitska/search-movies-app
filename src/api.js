export const getTrendingMoviesFetch = () => 
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=43d51e0d199eab5d93143f2c5071d8e1', {
        method: "Get"
    })
        .then(response => {if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response)
            }
                return Promise.reject(new Error(response.statusText))
            })
        .then(response => response.json()).then(response => {let res = response.results; return res});


export const getMovieRecommendationsFetch = (id) => 
    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=43d51e0d199eab5d93143f2c5071d8e1&language=en-US&page=1`, {
        method: "Get"
    })
        // .then(response => {if (response.status >= 200 && response.status < 300) {
        //         return Promise.resolve(response)
        //     }
        //         return Promise.reject(new Error(response.statusText))
        //     })
        // .then(response => response.json()).then(response => {let res = response.results; return res});

export const getMovieQueryFetch = (query) => 
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=43d51e0d199eab5d93143f2c5071d8e1&language=en-US&query=${query}&page=1&include_adult=false`, {
            method: "Get"
    })   
    .then(response => {if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    }
        return Promise.reject(new Error(response.statusText))
    })
    .then(response => response.json()).then(response => {let res = response.results; return res});     