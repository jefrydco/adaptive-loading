<template>
  <div class="app">
    <app-header />
    <app-main-content />
    <app-credit-link href="https://dixiemech.com/gmkdracula/" title="Original Dixie Mesh Website"/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppMainContent from "@/components/AppMainContent";
import AppCreditLink from "@/components/AppCreditLink";

export default {
  name: 'app',
  components: {
    AppHeader,
    AppMainContent,
    AppCreditLink
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

.app {
  text-align: center;
  max-width: 1700px;
  margin: 0 auto;
  min-height: 100vh;
}
</style>
