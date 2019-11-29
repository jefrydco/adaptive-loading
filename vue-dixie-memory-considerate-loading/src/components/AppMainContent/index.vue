<template>
  <div class="main-content">
    <div style="padding: 10px"></div>
    <vue-adaptive-memory>
      <template v-slot="{ memoryStatus }">
        <app-manual-console
          :manual-enabled="manualEnabled"
          :is-three-box-on="isThreeBoxOn"
          @switchChange="onSwitchChange"
          @checkboxChange="onCheckboxChange"
        />
        <app-two-box v-if="!threeBoxAllowed(memoryStatus)" />
        <app-three-box v-else="" />
        <app-memory-status :memory-status="memoryStatus" />
      </template>
    </vue-adaptive-memory>
  </div>
</template>

<script>
import VueAdaptiveMemory from "vue-adaptive-components/memory";
import AppManualConsole from "./AppManualConsole";
import AppMemoryStatus from "./AppMemoryStatus";

import { DEVICE_MEMORY_LIMIT } from "../../config";

export default {
  components: {
    VueAdaptiveMemory,
    AppManualConsole,
    AppMemoryStatus,
    AppThreeBox: () => import(/* webpackChunkName: "heavy-three-box" */ "./AppThreeBox"),
    AppTwoBox: () => import(/* webpackChunkName: "light-two-box" */ "./AppTwoBox")
  },
  data() {
    return {
      manualEnabled: false,
      isThreeBoxOn: true
    }
  },
  computed: {
    threeBoxAllowed() {
      return ({ deviceMemory, unsupported }) => {
        if (deviceMemory !== null && typeof deviceMemory !== "undefined") {
          console.log('[MainContent] deviceMemory, unsupported => ', deviceMemory, unsupported);

          let threeBoxAllowed;
          if (this.manualEnabled) {
            threeBoxAllowed = this.isThreeBoxOn
          } else {
            threeBoxAllowed = !(deviceMemory < DEVICE_MEMORY_LIMIT)
          }
          return threeBoxAllowed
        }
        return true
      }
    }
  },
  methods: {
    onSwitchChange(value) {
      this.isThreeBoxOn = value
    },
    onCheckboxChange(value) {
      this.manualEnabled = value
    }
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

.main-content {
  position: relative;
  padding: 80px 0;
  background: linear-gradient(0deg, rgba(43,43,43,0) 0%, rgba(43,43,43,1) 10%, rgba(43,43,43,1) 90%, rgba(43,43,43,0) 100%);
}
</style>