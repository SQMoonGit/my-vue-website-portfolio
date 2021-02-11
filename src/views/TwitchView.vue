<template>
  <div>
    Twitch View text

    <p>Add some cards and fancy stuff here</p>

    <v-btn
      id="github-button"
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com"
    >
    </v-btn>

    <!-- <v-card>
      <GChart
        type="ColumnChart"
        :data="chartData"
        :options="chartOptions"
      ></GChart>
    </v-card> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
// import { GChart } from "vue-google-charts";

// @Component({
//   components: { GChart }
// })
export default class TwitchView extends Vue {
  private chartData = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350]
  ];

  public chartOptions = {
    // chart: {
    title: "Company Performance",
    is3D: true,
    height: 800
    // }
  };
}
</script>

<style lang="scss">
#github-button {
  background-image: url(../assets/githubCat.svg);
  background-color: royalblue;
  height: 120px;
  width: 140px;
  box-shadow: none;
}
</style>
