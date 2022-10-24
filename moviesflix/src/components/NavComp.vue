<script>
import GeneroApi from "../api/genero";
const generoApi = new GeneroApi();

export default {
  data() {
    return {
      generos: [],
    };
  },
  async created() {
    this.generos = await generoApi.buscarTodosOsGeneros();
  },
  methods: {
    buscarFilmeDir(id) {
      return `/filmes/${id}`;
    },
    buscarSerieDir(id) {
      return `/series/${id}`;
    },
  },
};
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid p-3">
      <a class="navbar-brand p-1">MegaFlix</a>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item p-1">
            <RouterLink to="/" class="nav-link links">Home</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <RouterLink
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              to="/series"
              >Filmes</RouterLink
            >
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li v-for="genero of generos" :key="genero.id">
                <router-link
                  class="dropdown-item"
                  :to="buscarFilmeDir(genero.id)"
                  >{{ genero.name }}</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <RouterLink
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              to="/series"
              >Séries</RouterLink
            >
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li v-for="genero of generos" :key="genero.id">
                <router-link
                  class="dropdown-item"
                  :to="buscarSerieDir(genero.id)"
                  >{{ genero.name }}</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Pesquisar"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Pesquisar</button>
      </form>
      <button type="button" class="btn btn-primary position-relative">
        Notificações
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
        </span>
      </button>
    </div>
  </nav>
</template>
<style scoped>
input {
  background-color: rgb(255, 255, 255);
  color: black;
  border: black;
}

button {
  background-color: rgb(247, 247, 247);
  color: black;
  border: black;
}

.btn-outline-success {
  margin-right: 7px;
}
</style>
