<template>
  <div class="toggle">
    <label>{{ label }}</label>
    <toggle-button
      :value="value"
      :height="24"
      :labels="{ checked: '✔', unchecked: '✖' }"
      :disabled="disabled"
      @change="onChange"
    />
  </div>
</template>

<script>
import { ToggleButton } from "vue-js-toggle-button";

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    }
  },
  components: {
    ToggleButton
  },
  methods: {
    onChange({ value }) {
      this.$emit('change', value)
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

.toggle {
  display: flex;
  align-items: center;
  padding: 8px;

  cursor: not-allowed;
}

.toggle > label {
  margin-right: 8px;
}
</style>