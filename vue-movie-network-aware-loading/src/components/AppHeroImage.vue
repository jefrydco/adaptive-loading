<template>
  <app-connection-aware-bg-div
    cls="vmdb-heroimage"
    :backdrop-path="backdropPath"
  >
    <div class="vmdb-heroimage-content">
      <div class="vmdb-heroimage-text">
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
      </div>
    </div>
  </app-connection-aware-bg-div>
</template>

<script>
import AppConnectionAwareBgDiv from "@/components/AppConnectionAwareBgDiv";

export default {
  components: {
    AppConnectionAwareBgDiv
  },
  props: {
    backdropPath: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.vmdb-heroimage {
  background-size: 100%, cover !important;
  background-position: center, center !important;
  width: 100%;
  height: 600px;
  position: relative;
  animation: animateHeroimage 1s;
}

@keyframes animateHeroimage {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.vmdb-heroimage-content {
  max-width: 1280px;
  padding: 20px;
  margin: 0 auto;
}

.vmdb-heroimage-text {
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  background: rgba(0, 0, 0, 0);
  color: #fff;
}

.vmdb-heroimage-text h1 {
  font-family: "Abel", sans-serif;
  font-size: 48px;
  color: #fff;
}

.vmdb-heroimage-text p {
  font-family: "Abel", sans-serif;
  font-size: 22px;
  line-height: 26px;
  color: #fff;
}

@media screen and (max-width: 720px) {
  .vmdb-heroimage-text {
    max-width: 100%;
  }

  .vmdb-heroimage-text h1 {
    font-size: 38px;
    color: #fff;
  }

  .vmdb-heroimage-text p {
    font-size: 16px;
    line-height: 20px;
    color: #fff;
  }
}
</style>
