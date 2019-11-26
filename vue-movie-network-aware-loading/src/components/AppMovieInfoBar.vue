<template>
  <div class="vmdb-movieinfobar">
    <div class="vmdb-movieinfobar-content">
      <div class="vmdb-movieinfobar-content-col">
        <font-awesome class="fa-time" icon="clock" size="2x" />
        <span class="vmdb-movieinfobar-info"
          >Running Time: {{ calcTime(time) }}</span
        >
      </div>
      <div class="vmdb-movieinfobar-content-col">
        <font-awesome class="fa-budget" icon="money-bill" size="2x" />
        <span class="vmdb-movieinfobar-info"
          >Budget: {{ convertMoney(budget) }}</span
        >
      </div>
      <div class="vmdb-movieinfobar-content-col">
        <font-awesome class="fa-revenue" icon="ticket-alt" size="2x" />
        <span class="vmdb-movieinfobar-info"
          >Revenue: {{ convertMoney(revenue) }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { calcTime, convertMoney } from "@/utils";

export default {
  props: {
    time: {
      type: Number,
      default: 0
    },
    budget: {
      type: Number,
      default: 0
    },
    revenue: {
      type: Number,
      default: 0
    }
  },
  methods: {
    calcTime,
    convertMoney
  }
};
</script>

<style>
.vmdb-movieinfobar {
  width: 100%;
  height: 105px;
  background: #1c1c1c;
  position: relative;
  padding: 25px 20px 0px 20px;
  box-sizing: border-box;
  font-family: "Abel", sans-serif;
  font-size: 22px;
}

.vmdb-movieinfobar-content {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  color: #fff;
}

.vmdb-movieinfobar-content-col {
  float: left;
  width: 33.33%;
  box-sizing: border-box;
  padding: 10px 20px 0 0;
}

.vmdb-movieinfobar-info {
  padding: 5px 0 0 10px;
  float: left;
}

.fa-time,
.fa-revenue {
  float: left;
  margin-top: -4px;
}

.fa-budget {
  float: left;
  margin-top: -3px;
}
</style>
