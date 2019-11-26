<template>
  <vue-adaptive-network>
    <template v-slot="{ effectiveConnectionType }">
      <div :class="$attrs.cls" :style="bgUrl(effectiveConnectionType)">
        <slot />
      </div>
    </template>
  </vue-adaptive-network>
</template>

<script>
import VueAdaptiveNetwork from "vue-adaptive-components/network";
import { IMAGE_BASE_URL, BACKDROP_SIZES } from "../config";

export default {
  components: {
    VueAdaptiveNetwork
  },
  props: {
    backdropPath: {
      type: String,
      default: ""
    }
  },
  computed: {
    bgUrl() {
      return effectiveConnectionType => {
        let defaultBgUrl = {
          background: "#000"
        };

        if (effectiveConnectionType) {
          let backdropSize;

          switch (effectiveConnectionType) {
            case "slow-2g":
              backdropSize = "w300";
              break;
            case "2g":
              backdropSize = "w300";
              break;
            case "3g":
              backdropSize = "w780";
              break;
            case "4g":
              backdropSize = "w1280";
              break;
            default:
              backdropSize = "w1280";
              break;
          }

          console.log(
            "[AppConnectionAwareBgDiv] effectiveConnectionType, backdropSize => ",
            effectiveConnectionType,
            backdropSize
          );

          if (!BACKDROP_SIZES.has(backdropSize)) {
            throw new Error("the backdrop size is not supported");
          }

          const bgUrl = `${IMAGE_BASE_URL}${backdropSize}${this.backdropPath}`;

          if (this.backdropPath) {
            defaultBgUrl = {
              background: `linear-gradient(to bottom, rgba(0,0,0,0) 39%, rgba(0,0,0,0) 41%, rgba(0,0,0,0.65) 100%), url('${bgUrl}'), #1c1c1c`
            };
          }
        }
        return defaultBgUrl;
      };
    }
  }
};
</script>

<style></style>
