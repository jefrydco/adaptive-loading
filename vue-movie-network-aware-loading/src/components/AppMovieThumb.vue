<template>
  <div class="vmdb-moviethumb">
    <router-link v-if="clickable" :to="`/${movieId}`">
      <app-connection-aware-image :path="image" alt="moviethumb" />
    </router-link>
    <app-connection-aware-image v-else="" :path="image" alt="moviethumb" />
  </div>
</template>

<script>
import AppConnectionAwareImage from "@/components/AppConnectionAwareImage";

export default {
  components: {
    AppConnectionAwareImage
  },
  props: {
    clickable: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      default: ""
    },
    movieId: {
      type: Number,
      default: 0
    },
    movieName: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.vmdb-moviethumb img {
  width: 500px;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  transition: all 0.3s;
  box-sizing: border-box;
}

.clickable {
  cursor: pointer;
}

.clickable:hover {
  opacity: 0.8;
}
</style>
