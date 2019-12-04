<template>
  <div class="tweet-page">
    <vue-adaptive-save-data>
      <template v-slot="{ saveData, unsupported }">
        <app-navbar
          :save-data="overriddenSaveData(saveData, unsupported)"
          :test-save-data-enabled="testSaveDataEnabled"
          @checkboxChange="onCheckboxChange"
          @toggleChange="onToggleChange"
        />
        <app-list-tweet :tweets="tweets" :save-data="overriddenSaveData(saveData)" />
      </template>
    </vue-adaptive-save-data>
  </div>
</template>

<script>
import VueAdaptiveSaveData from "vue-adaptive-components/save-data";

import AppNavbar from "@/components/AppNavbar";
import AppListTweet from "@/components/AppListTweet";

import tweets from "@/data/tweets"

export default {
  name: "app",
  components: {
    VueAdaptiveSaveData,
    AppNavbar,
    AppListTweet
  },
  data() {
    return {
      tweets,
      testSaveData: false,
      testSaveDataEnabled: false
    };
  },
  computed: {
    overriddenSaveData() {
      return (saveData, unsupported) => {
        if (saveData !== null && typeof saveData !== 'undefined') {
          let overriddenSaveData;
          console.log('[App] testSaveDataEnabled, testSaveData, saveData => ', this.testSaveDataEnabled, this.testSaveData, saveData);
          if (this.testSaveDataEnabled) {
            overriddenSaveData = this.testSaveData;
          } else {
            console.log(`[App] navigator.connection.saveData is ${unsupported ? 'unsupported' : 'supported'}`);
            overriddenSaveData = saveData;
          }
          return overriddenSaveData;
        }
        return false
      };
    }
  },
  methods: {
    onCheckboxChange(value) {
      this.testSaveDataEnabled = value;
    },
    onToggleChange(value) {
      this.testSaveData = value;
    }
  }
};
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

.App {
  text-align: center;
}

.tweet-page {
  height: calc(100vh - 51px);
  max-width: 600px;
  margin: 0 auto;
}

.tweet-stream {
  width: 100%;
  height: unset !important;
  border: 1px solid rgb(225, 232, 237);
  margin-top: 8px;
}
</style>
