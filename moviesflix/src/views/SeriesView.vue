<script>
import CardSerie from "../components/séries/CardSerie.vue";
import SerieApi from "@/api/series";
const serieApi = new SerieApi();

export default {
  components: { CardSerie },
  data() {
    return {
      series: [],
    };
  },
  async created() {
    this.series = await serieApi.buscarTodosAsSeriesPorGenero(this.id);
  },
  methods: {
    getImageUrl(profile_path) {
      return `https://image.tmdb.org/t/p/w500/${profile_path}`;
    },
  },
  watch: {
    async id() {
      this.series = await serieApi.buscarTodosAsSeriesPorGenero(this.id);
    },
  },
};
</script>
<template>
  <h1>{{ id }}</h1>
  <!-- <div class="container"> -->
  <div class="row">
    <div class="col mt-14" v-for="serie of series" :key="serie.id">
      <h3>{{ serie.title }}</h3>
      <p>Nota: {{ serie.vote_average }}</p>
      <img :src="getImageUrl(serie.profile_path)" alt="" />
    </div>
  </div>
  <!-- </div> -->
</template>

<style scooped>
.card-filmes {
  background-color: rgb(0, 0, 0);
  border: rgb(99, 8, 8);
}

.card {
  background-color: rgb(0, 0, 0);
}
h2 {
  background-color: rgb(0, 0, 0);
  margin-bottom: 0;
}
.imagem {
  height: 20px;
}
</style>
