import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FilmesView from "../views/FilmesView.vue";
import SeriesView from "../views/SeriesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/filmes/:id",
      name: "filmes",
      component: FilmesView,
      props: true
    },
    {
      path: "/series",
      name: "series",
      component: SeriesView,
      props: true
    },
  ],
});

export default router;
