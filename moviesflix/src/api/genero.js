import axios from 'axios'
export default class GeneroApi {
    async buscarTodosOsGeneros() {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=3d6ff8fd9d66e9265c8452f1b4cad17b&language=pt_br`);
        return data.genres;
    };
}