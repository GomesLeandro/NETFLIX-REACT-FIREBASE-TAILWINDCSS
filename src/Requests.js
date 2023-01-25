const key = '65acaff68f0de4fb74095acf48b99fb2'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=pt-BR&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=1`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&query=horror&page=1&include_adult=false`,   
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=pt-BR&page=1`,
};
export default requests