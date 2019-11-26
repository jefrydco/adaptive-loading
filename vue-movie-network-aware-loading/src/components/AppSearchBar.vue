<template>
  <div class="vmdb-searchbar">
    <div class="vmdb-searchbar-content">
      <font-awesome class="vmdb-fa-search" icon="search" size="2x" />
      <input
        class="vmdb-searchbar-input"
        type="text"
        placeholder="Search"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.vmdb-searchbar {
  width: 100%;
  height: 105px;
  background: #1c1c1c;
  position: relative;
  padding: 25px 20px 0px 20px;
  box-sizing: border-box;
  color: #fff;
}

.vmdb-searchbar-content {
  max-width: 1280px;
  width: 100%;
  height: 55px;
  background: #353535;
  margin: 0 auto;
  border-radius: 40px;
  position: relative;
  color: #fff;
}

.vmdb-fa-search {
  position: absolute;
  left: 20px;
  top: 12px;
  color: #fff;
}

.vmdb-searchbar-input {
  font-family: "Abel", sans-serif;
  font-size: 38px;
  position: absolute;
  left: 70px;
  top: 7px;
  border: 0;
  background: transparent;
  height: 40px;
  color: #fff;
}

.vmdb-searchbar-input:focus {
  outline: none;
}

@media screen and (max-width: 720px) {
  .vmdb-searchbar-input {
    font-size: 28px;
    color: #fff;
  }
}
</style>
