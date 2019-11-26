<template>
  <div class="vmdb-loadmorebtn" @click="$emit('click', $event)">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.vmdb-loadmorebtn {
  background: #16d47b;
  width: 100%;
  min-height: 50px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
}

.vmdb-loadmorebtn p {
  font-family: "Abel", sans-serif;
  font-size: 42px;
  padding: 20px;
}

.vmdb-loadmorebtn:hover {
  opacity: 0.8;
}
</style>
