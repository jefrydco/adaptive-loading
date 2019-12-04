<template>
  <app-connection-aware-bg-div
    cls="vmdb-movieinfo"
    :backdrop-path="backdropPath"
  >
    <div class="vmdb-movieinfo-content">
      <div class="vmdb-movieinfo-thumb">
        <app-movie-thumb :image="posterPath" :clickable="true" />
      </div>
      <div class="vmdb-movieinfo-text">
        <h1>{{ title }}</h1>
        <h3>PLOT</h3>
        <p>{{ overview }}</p>
        <h3>IMDB RATING</h3>
        <div class="vmdb-rating">
          <meter
            min="0"
            max="100"
            optimum="100"
            low="40"
            high="70"
            :value="voteAverage * 10"
          />
          <p class="vmdb-score">{{ voteAverage }}</p>
        </div>
        <template v-if="directors.length > 1">
          <h3>DIRECTORS</h3>
        </template>
        <template v-else>
          <h3>DIRECTOR</h3>
        </template>
        <p v-for="(director, i) in directors" :key="i" class="vmdb-director">
          {{ director.name }}
        </p>
      </div>
      <font-awesome class="fa-film" icon="film" size="5x" />
    </div>
  </app-connection-aware-bg-div>
</template>

<script>
import AppConnectionAwareBgDiv from "@/components/AppConnectionAwareBgDiv";
import AppMovieThumb from "@/components/AppMovieThumb";

export default {
  components: {
    AppConnectionAwareBgDiv,
    AppMovieThumb
  },
  props: {
    backdropPath: {
      type: String,
      default: ""
    },
    posterPath: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    overview: {
      type: String,
      default: ""
    },
    voteAverage: {
      type: Number,
      default: 0
    },
    directors: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.vmdb-movieinfo {
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  height: 600px;
  padding: 40px 20px;
  box-sizing: border-box;
  animation: animateMovieinfo 1s;
}

@keyframes animateMovieinfo {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.vmdb-movieinfo-content {
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: rgb(0, 0, 0, 0.7);
  position: relative;
}

.vmdb-movieinfo-thumb {
  width: 350px;
  height: 100%;
  overflow: hidden;
  position: absolute;
  left: 0px;
}

.vmdb-movieinfo-text {
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
  width: auto;
  padding: 40px;
  color: #fff;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  left: 360px;
}

.vmdb-movieinfo-text h1 {
  font-family: "Abel", sans-serif;
  font-size: 48px;
  margin: 0;
}

.vmdb-movieinfo-text h3 {
  font-size: 16px;
  line-height: 0;
  margin-top: 30px;
}

.vmdb-movieinfo-text p {
  font-family: "Abel", sans-serif;
  font-size: 18px;
  line-height: 26px;
}

.vmdb-rating {
  width: 250px;
  height: 20px;
  margin-top: 20px;
  position: relative;
}

.vmdb-score {
  position: absolute;
  margin: 0;
  right: 0px;
  top: -3px;
}

.vmdb-director {
  margin: 0;
}

.fa-film {
  position: absolute;
  bottom: 40px;
  right: 40px;
  color: #fff;
}

meter::-webkit-meter-bar {
  background: #fff;
  width: 200px;
}
meter::-webkit-meter-optimum-value {
  background: linear-gradient(to bottom, #16d47b);
}
meter::-webkit-meter-suboptimum-value {
  background: linear-gradient(to bottom, #fbb450);
}
meter::-webkit-meter-even-less-good-value {
  background: linear-gradient(to bottom, #ee5f5b);
}
</style>
