<template>
  <div class="vmdb-actor">
    <app-connection-aware-image :path="actor.profile_path" alt="actorthumb" />
    <span class="vmdb-actor-name">{{ actor.name }}</span>
    <span class="vmdb-actor-character">{{ actor.character }}</span>
  </div>
</template>

<script>
import AppConnectionAwareImage from "./AppConnectionAwareImage";

export default {
  components: {
    AppConnectionAwareImage
  },
  props: {
    actor: {
      type: Object,
      default() {
        return {
          profile_path: "",
          name: "",
          character: ""
        };
      }
    }
  }
};
</script>

<style>
.vmdb-actor {
  box-sizing: border-box;
}

.vmdb-actor img {
  width: 40%;
  height: auto;
  float: left;
  box-sizing: border-box;
}

.vmdb-actor-name {
  font-family: "Abel", sans-serif;
  font-size: 22px;
  color: #fff;
  float: left;
  margin: 10px 20px;
  width: 40%;
  box-sizing: border-box;
}

.vmdb-actor-character {
  font-family: "Abel", sans-serif;
  font-size: 18px;
  color: #fff;
  float: left;
  margin: 0 20px 10px 20px;
  width: 40%;
  box-sizing: border-box;
}
</style>
