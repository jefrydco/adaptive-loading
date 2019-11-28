<template>
  <div class="navbar">
    <a href="/">
      <strong>HOME</strong>
    </a>
    <div class="client-save-data">
      <app-checkbox
        :value="testSaveDataEnabled"
        label="Testing Save-Data"
        @change="onCheckboxChange"
      />
      <app-toggle
        :value="saveData"
        :disabled="!testSaveDataEnabled"
        label="Save Data on/off"
        @change="onToggleChange"
      />
    </div>
  </div>
</template>

<script>
import AppCheckbox from "./AppCheckbox";
import AppToggle from "./AppToggle";

export default {
  props: {
    saveData: {
      type: Boolean,
      default: false
    },
    testSaveDataEnabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    AppCheckbox,
    AppToggle
  },
  methods: {
    onCheckboxChange(value) {
      this.$emit('checkboxChange', value)
    },
    onToggleChange(value) {
      this.$emit('toggleChange', value)
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

.navbar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(225, 232, 237);
}

.navbar a {
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 16px;
}

.client-save-data {
  display: flex;
  align-items: center;
  flex-direction: column;
}

@media screen and (min-width: 600px) {
  .navbar {
    flex-direction: row;
  }

  .client-save-data {
    flex-direction: row;
  }
}
</style>
