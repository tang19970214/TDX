<template>
  <div class="chartBar">
    <div class="chartBar__header">
      <el-tooltip effect="dark" :content="title" placement="top">
        <label>{{title}}</label>
      </el-tooltip>
    </div>
    <div class="chartBar__body" id="chartBar">
      <client-only>
        <apexchart type="bar" :width="getChartWidth()" height="340" :options="getChartLabel(labels)" :series="series"></apexchart>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
    series: {
      type: Array,
      required: true,
    },
    ans: {
      type: Array,
    },
  },
  computed: {
    getChartWidth() {
      return () => {
        let getWidth = document.getElementById("chartBar")?.clientWidth || 450;
        return getWidth;
      };
    },
    getChartLabel() {
      return (arr) => {
        const vm = this;
        let newArr = {
          colors: [
            function ({ value, seriesIndex, dataPointIndex, w }) {
              if (!!vm.ans) {
                return vm.ans.includes(dataPointIndex) ? "#F00" : "#26A0FC";
              } else {
                return "#26A0FC";
              }
            },
          ],
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: arr,
          },
        };
        return newArr;
      };
    },
  },
};
</script>

<style lang="scss">
.chartBar {
  width: 100%;
  padding: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  &__header {
    width: 100%;
    height: 55px;
    padding: 4px 16px;
    box-sizing: border-box;
    background: rgb(88, 153, 200);
    color: white;

    label {
      width: 100%;
      display: inline-block;
      overflow: hidden;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
  }

  &__body {
    width: 100%;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
  }
}
</style>