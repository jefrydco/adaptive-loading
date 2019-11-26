<template>
  <div>
    <div v-if="movie">
      <app-navigation :title="movie.title" />
      <app-movie-info
        :backdrop-path="movie.backdrop_path"
        :poster-path="movie.poster_path"
        :title="movie.title"
        :overview="movie.overview"
        :vote-average="movie.vote_average"
        :directors="directors"
      />
      <app-movie-info-bar
        :time="movie.runtime"
        :budget="movie.budget"
        :revenue="movie.revenue"
      />
    </div>
    <div v-if="actors">
      <div class="vmdb-moviegrid">
        <app-four-col-grid header="Actors">
          <app-four-col-grid-item v-for="(actor, i) in actors" :key="i">
            <app-actor :actor="actor" />
          </app-four-col-grid-item>
        </app-four-col-grid>
      </div>
    </div>
    <h1 v-if="!actors && !loading">No Movie Found!</h1>
    <app-spinner v-if="loading" />
  </div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";
import AppMovieInfo from "@/components/AppMovieInfo";
import AppMovieInfoBar from "@/components/AppMovieInfoBar";
import AppFourColGrid from "@/components/AppFourColGrid";
import AppFourColGridItem from "@/components/AppFourColGridItem";
import AppActor from "@/components/AppActor";
import AppSpinner from "@/components/AppSpinner";
import { API_URL, API_KEY } from "../config";
import { isExists } from "../utils";

export default {
  components: {
    AppNavigation,
    AppMovieInfo,
    AppMovieInfoBar,
    AppFourColGrid,
    AppFourColGridItem,
    AppActor,
    AppSpinner
  },
  data() {
    return {
      movie: null,
      actors: [],
      directors: [],
      loading: false
    };
  },
  watch: {
    movie(movie) {
      if (movie) {
        if (!this.checkInLocalStorage(this.$route.params.movieId)) {
          this.fetchMovieCreditData();
        }
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    checkInLocalStorage(movieId) {
      const movieInLocalStorage = localStorage.getItem(`${movieId}`);
      return movieInLocalStorage ? true : false;
    },
    init() {
      const { movieId } = this.$route.params;
      if (localStorage.getItem(`${movieId}`)) {
        const state = JSON.parse(localStorage.getItem(`${movieId}`));
        const { movie, actors, directors, loading } = state;
        this.movie = movie;
        this.actors = actors;
        this.directors = directors;
        this.loading = loading;
      } else {
        this.loading = true;
        const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
        this.fetchMovieData(endpoint);
      }
    },
    async fetchMovieData(endpoint) {
      const result = await fetch(endpoint);
      const movie = await result.json();
      if (movie.status_code) {
        this.loading = false;
      } else {
        this.movie = movie;
      }
    },
    async fetchMovieCreditData() {
      const { movieId } = this.$route.params;
      const endpointCredit = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
      const result = await fetch(endpointCredit);
      const { crew, cast } = await result.json();
      if (isExists(crew) && isExists(cast)) {
        const directors = crew.filter(({ job }) => job === "Director");
        this.actors = cast;
        this.directors = directors;
        this.loading = false;
        localStorage.setItem(
          `${movieId}`,
          JSON.stringify({
            movie: this.movie,
            actors: cast,
            directors: directors,
            loading: this.loading
          })
        );
      }
    }
  }
};
</script>

<style>
.vmdb-movieinfobar {
  width: 100%;
  height: 105px;
  background: #1c1c1c;
  position: relative;
  padding: 25px 20px 0px 20px;
  box-sizing: border-box;
  font-family: "Abel", sans-serif;
  font-size: 22px;
}

.vmdb-movieinfobar-content {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  color: #fff;
}

.vmdb-movieinfobar-content-col {
  float: left;
  width: 33.33%;
  box-sizing: border-box;
  padding: 10px 20px 0 0;
}

.vmdb-movieinfobar-info {
  padding: 5px 0 0 10px;
  float: left;
}

.fa-time,
.fa-revenue {
  float: left;
  margin-top: -4px;
}

.fa-budget {
  float: left;
  margin-top: -3px;
}
</style>
