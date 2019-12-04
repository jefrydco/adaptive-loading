<template>
  <div v-if="memoryStatus">
    <p v-if="memoryStatus.unsupported">The Memory Status API is not supported on this platform.</p>
    <div v-else="" class="tags">
      <div v-for="memoryStatusListItem in memoryStatusList" :key="memoryStatusListItem.label" class="tag">
        <div class="tag-value">{{ memoryStatusListItem.value }}</div>
        <div class="tag-label">{{ memoryStatusListItem.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    memoryStatus: {
      type: Object,
      default() {
        return null
      }
    }
  },
  computed: {
    memoryStatusList() {
      if (this.memoryStatus) {
        const {
          totalJSHeapSize,
          usedJSHeapSize,
          jsHeapSizeLimit,
          deviceMemory
        } = this.memoryStatus

        return [
          {
            label: "Total JSHeapSize",
            value: `${(totalJSHeapSize * 1e-6).toFixed(2)} (Mb)`
          },
          {
            label: "Used JSHeapSize",
            value: `${(usedJSHeapSize * 1e-6).toFixed(2)} (Mb)`
          },
          {
            label: "JSHeapSizeLimit",
            value: `${(jsHeapSizeLimit * 1e-9).toFixed(2)} (GB)`
          },
          {
            label: "Device Memory",
            value: `${deviceMemory} (GB)`
          }
        ]
      }
      return []
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

.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.tag {
  width: 20%;
  min-width: 160px;
  padding: 10px;
}

.tag > div {
  overflow: hidden;
  text-overflow: ellipsis;
}

.tag-label {
  margin-bottom: 4px;
  color: #e2e2e2;
  font-size: 14px;
}

.tag-value {
  color: #fff;
  font-size: 16px;
}
</style>