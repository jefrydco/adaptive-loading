<template functional>
  <div class="vmdb-grid-element" v-bind="$attrs">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style>
.vmdb-grid-element {
  margin: 0 40px 40px 0;
  background: #353535;
  max-height: 430px;
  animation: animateGrid 0.5s;
  overflow: hidden;
}

/* For a 4-column grid */
.vmdb-grid-element:nth-child(4n + 4) {
  margin-right: 0;
}

@media screen and (max-width: 720px) {
  .vmdb-grid-element:nth-child(2n + 2) {
    margin-right: 0;
  }
}
</style>
