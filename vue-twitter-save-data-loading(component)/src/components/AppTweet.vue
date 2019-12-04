<template>
  <div v-if="tweet" class="tweet">
    <app-context v-if="isRT" :data="data" />
    <div class="content">
      <app-header :data="data" />
      <a
        class="link"
        :href="
          `https://twitter.com/${data.retweeted_status.user.screen_name}/status/${tweet.id}`
        "
      >
        <app-text :data="data" />
      </a>
      <app-media
        v-if="data.retweeted_status.extended_entities && data.retweeted_status.extended_entities.media"
        :media="data.retweeted_status.extended_entities.media"
      />
      <app-footer :data="data"/>
    </div>
  </div>
</template>

<script>
import AppContext from "./AppContext"
import AppHeader from "./AppHeader"
import AppText from "./AppText";
import AppMedia from "./AppMedia";
import AppFooter from "./AppFooter";
import { IMAGE_TYPE } from "../config";

export default {
  components: {
    AppContext,
    AppHeader,
    AppText,
    AppMedia,
    AppFooter
  },
  props: {
    tweet: {
      type: Object,
      default() {
        return null
      }
    },
    saveData: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    data() {
      if (this.tweet) {
        let data = this.tweet

        const mediaType = data.retweeted_status.extended_entities.media[0].type

        if (mediaType === 'photo') {
          const entitiesMediaFilename =
            data.retweeted_status.entities.media[0].media_url_filename
          const extendedEntitiesMediaFilename =
            data.retweeted_status.extended_entities.media[0].media_url_filename
          const avatarFilename = data.user.profile_image_url_filename
          const retweetedStatusAvatarFilename =
            data.retweeted_status.user.profile_image_url_filename

          const AdaptivePhotosDir = `./assets/photos/${
            !this.saveData ? IMAGE_TYPE.HEAVY : IMAGE_TYPE.LIGHT
          }/`

          const entitiesMediaURL = AdaptivePhotosDir + entitiesMediaFilename
          const extendedEntitiesMediaURL =
            AdaptivePhotosDir + extendedEntitiesMediaFilename
          const avatarURL = AdaptivePhotosDir + avatarFilename
          const retweetedStatusAvatarURL =
            AdaptivePhotosDir + retweetedStatusAvatarFilename

          data.retweeted_status.entities.media[0].media_url = entitiesMediaURL
          data.retweeted_status.extended_entities.media[0].media_url = extendedEntitiesMediaURL
          data.user.profile_image_url = avatarURL
          data.retweeted_status.user.profile_image_url = retweetedStatusAvatarURL
        } else if (mediaType === 'video') {
          data.retweeted_status.extended_entities.media[0].additional_media_info.saveData = this.saveData
        }

        //Support for extended tweets
        if ('full_text' in data) {
          data.text = data.full_text

          if ('quoted_status' in data) {
            data.quoted_status.text = data.quoted_status.full_text
          }

          if ('retweeted_status' in data) {
            data.retweeted_status.text = data.retweeted_status.full_text

            if ('quoted_status' in data.retweeted_status) {
              data.retweeted_status.quoted_status.text =
                data.retweeted_status.quoted_status.full_text
            }
          }
        }

        if ('extended_tweet' in data) {
          data.text = data.extended_tweet.full_text
          data.entities = data.extended_tweet.entities
          data.extended_entities = data.extended_tweet.extended_entities
          data.display_text_range = data.extended_tweet.display_text_range
        }
        if ('quoted_status' in data) {
          if ('extended_tweet' in data.quoted_status) {
            data.quoted_status.text =
              data.quoted_status.extended_tweet.full_text
            data.quoted_status.entities =
              data.quoted_status.extended_tweet.entities
            data.quoted_status.extended_entities =
              data.quoted_status.extended_tweet.extended_entities
            data.quoted_status.display_text_range =
              data.quoted_status.extended_tweet.display_text_range
          }
        }
        if ('retweeted_status' in data) {
          if ('extended_tweet' in data.retweeted_status) {
            data.retweeted_status.text =
              data.retweeted_status.extended_tweet.full_text
            data.retweeted_status.entities =
              data.retweeted_status.extended_tweet.entities
            data.retweeted_status.extended_entities =
              data.retweeted_status.extended_tweet.extended_entities
            data.retweeted_status.display_text_range =
              data.retweeted_status.extended_tweet.display_text_range
          }
          if (data.retweeted_status.is_quote_status) {
            if ('extended_tweet' in data.retweeted_status.quoted_status) {
              data.retweeted_status.quoted_status.text =
                data.retweeted_status.quoted_status.extended_tweet.full_text
              data.retweeted_status.quoted_status.entities =
                data.retweeted_status.quoted_status.extended_tweet.entities
              data.retweeted_status.quoted_status.extended_entities =
                data.retweeted_status.quoted_status.extended_tweet.extended_entities
              data.retweeted_status.quoted_status.display_text_range =
                data.retweeted_status.quoted_status.extended_tweet.display_text_range
            }
          }
        }

        return data
      }
      return null
    },
    isRT() {
      let isRT = false
      if (this.tweet) {
        let data = this.tweet

        if (data.retweeted_status) {
          isRT = true
        }
      }
      return isRT
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

.tweet {
  background-color: #ffffff;
  min-height: 51px;
  max-width: 588px;
  min-width: 350px;
  border-bottom: 1px solid #e6ecf0;
  color: #14171a;
  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif';
  font-size: 14px;
  line-height: 20px;
  list-style-image: none;
  list-style-position: outisde;
  list-style-type: none;
  padding: 9px 12px;
  position: relative;
  text-align: start;
  margin-top: 8px;
}
.tweet .content {
  margin-left: 58px;
}
.link {
  text-decoration: none
}
</style>
