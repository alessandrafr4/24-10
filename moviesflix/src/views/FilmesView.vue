<script>
import CardMovie from "../components/filmes/CardMovie.vue";
import FilmeApi from "@/api/filmes";
const filmeApi = new FilmeApi();

export default {
  props: ["id"],
  components: { CardMovie },
  data() {
    return {
      movies: [],
    };
  },
  async created() {
    this.movies = await filmeApi.buscarTodosOsFilmesPorGenero(this.id);
  },
  methods: {
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500/${poster_path}`;
    },
  },
  watch: {
    async id() {
      this.movies = await filmeApi.buscarTodosOsFilmesPorGenero(this.id);
    },
  },
};
</script>
<template>
  <h1>{{ id }}</h1>
  <!-- <div class="container"> -->
  <div class="row">
    <div class="col mt-14" v-for="movie of movies" :key="movie.id">
      <h3>{{ movie.title }}</h3>
      <p>Nota: {{ movie.vote_average }}</p>
      <img :src="getImageUrl(movie.poster_path)" alt="" />
    </div>
  </div>
  <!-- </div> -->
</template>

<style scooped>
.card-filmes {
  background-color: rgb(0, 0, 0);
}

.card {
  background-color: rgb(0, 0, 0);
  border: rgb(99, 8, 8);
}

h2 {
  background-color: rgb(0, 0, 0);
}
</style>
