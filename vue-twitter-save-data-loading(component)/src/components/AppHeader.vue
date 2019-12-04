<template>
  <div v-if="data" class="header">
    <a :href="`https://twitter.com/${data.retweeted_status.user.screen_name}`" class="account-group">
      <img :src="data.retweeted_status.user.profile_image_url" class="avatar" alt="avatar" />
      <strong class="fullname">{{ data.retweeted_status.user.name }}</strong>
      <app-verified-badge v-if="data.retweeted_status.user.verified" />
      <span>&nbsp;</span>
      <span class="username">
        <s class="s">@</s>
        <b class="b">{{ data.retweeted_status.user.screen_name }}</b>
      </span>
    </a>
    <small class="time">
      <a :href="`https://twitter.com/${data.retweeted_status.user.screen_name}/status/${data.retweeted_status.id}`" class="tweet-timestamp">
         • {{ timestamp(data.retweeted_status.created_at) }}
      </a>
    </small>
    <a :href="`https://twitter.com/${data.retweeted_status.user.screen_name}/status/${data.retweeted_status.id}`" title="View on Twitter">
      <div style="float: right; margin-top: -3px">
        <svg id="Logo_FIXED" data-name="Logo — FIXED" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 400 400">
          <path fill='#1da1f2' d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"/>
        </svg>
      </div>
    </a>
  </div>
</template>

<script>
import AppVerifiedBadge from "./AppVerifiedBadge";

export default {
  components: {
    AppVerifiedBadge
  },
  props: {
    data: {
      type: Object,
      default() {
        return null
      }
    }
  },
  computed: {
    timestamp() {
      return time => {
        if (time) {
          let systemDate = new Date(Date.parse(time));
          const userDate = new Date();

          let diff = Math.floor((userDate - systemDate) / 1000);
          if (diff < 59) {return diff + "s";}
          if (diff <= 3540) {return Math.round(diff / 60) + "m";}
          if (diff <= 86400) {return Math.round(diff / 3600) + "h";}
          if (diff < 604800) {return Math.round(diff / 86400) + "d";}
          return systemDate.toString().substring(4, 10);
        }
        return ""
      };
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

.account-group {
  color: #8899a6;
  text-decoration: none
}
.avatar {
  float: left;
  margin-top: 3px;
  margin-left: -58px;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: 0
}
.fullname {
  font-weight: bold;
  color: #14171a;
}
.username {
  direction: ltr;
  unicode-bidi: embed;
  font-size: 14px;
  color: #657786;
}
.s {
  color: #b1bbc3;
  text-decoration: none
}
.b {
  font-weight: normal
}
.time {
  color: #657786
}
.tweet-timestamp {
  font-size: 14px;
  text-decoration: none;
  color: #8899a6
}
</style>