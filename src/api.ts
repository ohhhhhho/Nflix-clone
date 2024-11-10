const API_KEY = "37a725622e9789045be4ffb96373d145"
const BASE_PATH = "https://api.themoviedb.org/3/"

interface IMovie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
}
export interface ISearchResult {
    id: number;
    name?: string;
    title?: string;
    backdrop_path: string;
    poster_path: string;
    vote_average: number;
    overview: string;
    original_title: string;
    release_date?: string; // 영화
    first_air_date?: string; // 시리즈
  }
  
  export interface IGetSearch {
    page: number;
    results: ISearchResult[];
    total_pages: number;
    total_results: number;
    dates: string;
  }
    
export interface IGetMoviesResult {
    dates: {
        maximum: string;
        minimum: string;
    };
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export async function getMovies(){
    return await (await fetch(`${BASE_PATH}movie/now_playing?api_key=${API_KEY}`)).json()
}

export async function getSearchMovie(keyword:string | null) {
    return await(await fetch(`${BASE_PATH}search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1`)).json()
}