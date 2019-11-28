<template>
  <div>
    <div v-if="!internalSaveData" class="adaptive-media">
      <video :src="videoSrc" :controls="!gif" :autoplay="gif || autoPlay" :loop="gif" class="video">
        Your browser does not support the <code>video</code> element. 
      </video>
    </div>
    <app-photo v-else="" :media="media">
      <button class="play-button" @click="playHandler">
        <img src="@/assets/play.webp" alt="blue play icon" width="100%">
      </button>
    </app-photo>
  </div>
</template>

<script>
import AppPhoto from "./AppPhoto";

export default {
  props: {
    media: {
      type: Array,
      default() {
        return [{type: "", media_url: "", sizes: {}}]
      }
    },
    gif: {
      type: Boolean,
      default: false
    },
    autoPlay: {
      type: Boolean,
      default: false
    }
  },
  components: {
    AppPhoto
  },
  data() {
    return {
      internalSaveData: false
    }
  },
  computed: {
    saveData() {
      return this.media[0].additional_media_info.saveData;
    },
    videoSrc() {
      let videoSrc = ""
      this.media[0].video_info.variants.forEach(variant => {
        if (variant.url.includes(".mp4")) {
          videoSrc = variant.url
        }
      })
      return videoSrc
    }
  },
  watch: {
    saveData: {
      handler(saveData) {
        this.internalSaveData = saveData
      },
      immediate: true
    }
  },
  methods: {
    playHandler() {
      this.internalSaveData && (this.internalSaveData = false)
    }
  }
}
</script>

<style>
/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

.video {
  max-height: 246.75px !important;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
  border: none;
  cursor: pointer;
  background-color: transparent;
}

@media only screen and (min-width: 600px) {
  .video {
    max-height: 374.75px !important;
  }
}

.adaptive-media {
  display: inline-block;
  max-height: 508px;
  max-width: 508px;
  margin: 10px 0 0 0;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 5px;
  vertical-align: top;
  text-align: center;
  width: 100%
}
.adaptive-media-badge {
  background: rgba(0, 0, 0, .3);
  border-radius: 3px;
  bottom: 52px;
  left: 80px;
  box-sizing: border-box;
  color: #fff;
  height: 20px;
  line-height: 20px;
  font-weight: 700;
  padding: 0 5px;
  position: absolute;
  z-index: 1;
}
.video {
  width: 100%;
  vertical-align: bottom;
  max-height: 508px;
  object-fit: contain;
  background: #000000;
}
</style>