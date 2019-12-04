<template>
  <model-viewer
    preload
    poster="/vue-dixie-memory-considerate-loading/images/poster-keyboard.webp"
    src="https://ephektz.com/assets/dboard.glb"
    alt="A 3D model of a keyboard"
    background-color="#2b2b2b"
    exposure="0.3"
    ar
    shadow-intensity="1"
    camera-controls
    camera-orbit="0deg 75deg 105%"
    interaction-prompt="auto"
    auto-rotate
    magic-leap
  />
</template>

<script>
import "@google/model-viewer"

export default {
  data() {
    return {}
  }
}
</script>

<style>
/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

model-viewer {
  width: 100%;
  height: 658px;
  --background-color: #2b2b2b;
  --poster-color: #2b2b2b;
  --progress-mask: #2b2b2b;
}

</style>