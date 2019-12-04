<template functional>
  <div class="vmdb-header">
    <div class="vmdb-header-content">
      <router-link to="/">
        <img
          src="@/assets/images/vueMovie_logo.png"
          alt="vmdb-logo"
          class="vmdb-logo"
        />
      </router-link>
      <img
        src="@/assets/images/tmdb_logo.png"
        alt="tmdb-logo"
        class="vmdb-tmdb-logo"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.vmdb-header {
  width: 100%;
  height: auto;
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;
}

.vmdb-header-content {
  max-width: 1280px;
  min-height: 120px;
  height: auto;
  padding: 20px 0px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
}

.vmdb-logo {
  width: 300px;
  margin-top: 20px;
  float: left;
}

.vmdb-tmdb-logo {
  width: 122px;
  margin-top: 25px;
  float: right;
}

@media screen and (max-width: 500px) {
  .vmdb-header-content {
    max-width: 1280px;
    min-height: 0px;
  }

  .vmdb-tmdb-logo {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }

  .vmdb-logo {
    width: 150px;
    margin-top: 5px;
  }
}
</style>
