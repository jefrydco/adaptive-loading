<template functional>
  <div class="vmdb-grid">
    <h1>{{ props.header }}</h1>
    <div class="vmdb-grid-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
.vmdb-grid h1 {
  font-family: "Abel", sans-serif;
  font-size: 42px;
}

.vmdb-grid-content {
  display: grid;
  grid-template-columns: auto auto auto auto;
}

@keyframes animateGrid {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media screen and (max-width: 720px) {
  .vmdb-grid-content {
    grid-template-columns: auto auto;
  }

  .vmdb-grid h1 {
    font-size: 22px;
  }
}
</style>
