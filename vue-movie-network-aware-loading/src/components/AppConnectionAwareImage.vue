<template>
  <vue-adaptive-network>
    <template v-slot="{ effectiveConnectionType }">
      <img :src="imgUrl(effectiveConnectionType)" :alt="alt" />
    </template>
  </vue-adaptive-network>
</template>

<script>
import VueAdaptiveNetwork from "vue-adaptive-components/network";
import { IMAGE_BASE_URL, POSTER_SIZES } from "../config";

export default {
  components: {
    VueAdaptiveNetwork
  },
  data() {
    return {
      posterSize: null
    };
  },
  props: {
    path: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    }
  },
  computed: {
    imgUrl() {
      return effectiveConnectionType => {
        let defaultImgUrl = `/img/icons/android-chrome-192x192.png`;
        if (effectiveConnectionType) {
          let posterSize;

          switch (effectiveConnectionType) {
            case "slow-2g":
              posterSize = "w92";
              break;
            case "2g":
              posterSize = "w154";
              break;
            case "3g":
              posterSize = "w342";
              break;
            case "4g":
              posterSize = "w500";
              break;
            default:
              posterSize = "w500";
              break;
          }

          console.log(
            "[AppConnectionAwareImage] effectiveConnectionType, posterSize => ",
            effectiveConnectionType,
            posterSize
          );

          if (!POSTER_SIZES.has(posterSize)) {
            throw new Error("the backdrop size is not supported");
          }

          if (this.path) {
            defaultImgUrl = `${IMAGE_BASE_URL}${posterSize}${this.path}`;
          }
        }
        return defaultImgUrl;
      };
    }
  }
};
</script>
