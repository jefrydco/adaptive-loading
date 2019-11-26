<template>
  <div class="vmdb-home">
    <div v-if="heroImage">
      <app-hero-image
        :backdrop-path="heroImage.backdrop_path"
        :title="heroImage.original_title"
        :text="heroImage.overview"
      />
      <app-search-bar v-model="searchTerm" />
    </div>
    <div class="vmdb-home-grid">
      <div class="vmdb-home-grid">
        <app-four-col-grid
          :header="searchTerm ? 'Search Result' : 'Popular Movies'"
          :loading="loading"
        >
          <app-four-col-grid-item v-for="(movie, i) in movies" :key="i">
            <app-movie-thumb
              :clickable="true"
              :image="movie.poster_path"
              :movie-id="movie.id"
              :movie-name="movie.original_title"
            />
          </app-four-col-grid-item>
        </app-four-col-grid>
        <app-spinner v-if="loading" />
        <app-load-more-btn
          v-if="currentPage <= totalPages && !loading"
          text="Load More"
          @click="loadMoreItems"
        />
      </div>
    </div>
  </div>
</template>

<script>
import pDebounce from "p-debounce";

import { API_URL, API_KEY } from "../config";

import AppHeroImage from "@/components/AppHeroImage";
import AppSearchBar from "@/components/AppSearchBar";
import AppFourColGrid from "@/components/AppFourColGrid";
import AppFourColGridItem from "@/components/AppFourColGridItem";
import AppMovieThumb from "@/components/AppMovieThumb";
import AppLoadMoreBtn from "@/components/AppLoadMoreBtn";
import AppSpinner from "@/components/AppSpinner";

export default {
  name: "home",
  components: {
    AppHeroImage,
    AppSearchBar,
    AppFourColGrid,
    AppFourColGridItem,
    AppMovieThumb,
    AppLoadMoreBtn,
    AppSpinner
  },
  data() {
    return {
      movies: [],
      heroImage: null,
      loading: false,
      currentPage: 0,
      totalPages: 0,
      searchTerm: ""
    };
  },
  watch: {
    searchTerm: pDebounce(function(searchTerm) {
      this.searchItems(searchTerm);
    }, 500)
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.loading = true;
      const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      this.fetchItems(endpoint);
    },
    searchItems(searchTerm) {
      console.log("[Home searchItems] searchTerm => ", searchTerm);
      let endpoint = "";
      this.movies = [];
      this.searchTerm = searchTerm;

      if (searchTerm === "") {
        endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      } else {
        endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
      }

      this.fetchItems(endpoint, true);
    },
    loadMoreItems() {
      let endpoint = "";
      this.loading = true;

      if (this.searchTerm === "") {
        endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this
          .currentPage + 1}`;
      } else {
        endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${
          this.searchTerm
        }&page=${this.currentPage + 1}`;
      }

      this.fetchItems(endpoint);
    },
    async fetchItems(endpoint, isSearch) {
      const result = await fetch(endpoint);
      const {
        results: movies,
        page,
        total_pages: totalPages
      } = await result.json();

      if (isSearch) {
        this.movies = [...movies];
      } else {
        this.movies = [...this.movies, ...movies];
      }
      this.heroImage = this.movies[0];
      this.currentPage = page;
      this.totalPages = totalPages;
      this.loading = false;
    }
  }
};
</script>

<style>
.vmdb-home {
  margin-bottom: 100px;
}

.vmdb-home-grid {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
