<template>
  <div>
    <app-photo v-if="media[0].type === 'photo'" :media="media" />
    <app-video v-if="media[0].type === 'video'" :media="media" auto-play="" />
    <app-video v-if="media[0].type === 'animated_gif'" gif="" auto-play="" :media="media" />
  </div>
</template>

<script>
import AppPhoto from "./AppPhoto";
import AppVideo from "./AppVideo";

export default {
  components: {
    AppPhoto,
    AppVideo
  },
  props: {
    media: {
      type: Array,
      default() {
        return [{ type: "" }]
      }
    }
  }
}
</script>

<style>

</style>