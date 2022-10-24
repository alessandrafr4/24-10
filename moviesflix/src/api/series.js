import axios from "axios";
export default class SerieApi {
  async buscarTodosAsSeriesPorGenero(genero) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=https://api.themoviedb.org/3/tv/{tv_id}?api_key=https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=pt_br&language=pt_br&language=pt-br&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genero}&with_watch_monetization_types=flatrate`
    );
    return data.results;
  }
}
