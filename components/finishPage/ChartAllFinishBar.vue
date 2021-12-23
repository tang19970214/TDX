<template>
  <div class="chartBar">
    <div class="chartBar__body" id="chartBar" :style="{'height': `${Number(height)+30}px`}">
      <client-only>
        <apexchart type="bar" :width="getChartWidth()" :height="height" :options="getChartLabel(labels)" :series="series"></apexchart>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: [String, Number],
      default: "150",
    },
    labels: {
      type: Array,
      required: true,
    },
    series: {
      type: Array,
      required: true,
    },
    changeColor: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getChartWidth() {
      return () => {
        let getWidth =
          document.getElementById("chartBar")?.clientWidth - 10 || 450;
        return getWidth;
      };
    },
    getChartLabel() {
      return (arr) => {
        let setColor = ["#007BDF", "#f98104", "#00E396"];

        const vm = this;
        let newArr = {
          colors: [
            function ({ value, seriesIndex, dataPointIndex, w }) {
              if (!vm.changeColor) {
                return setColor[seriesIndex];
              } else {
                // console.log(value, seriesIndex, dataPointIndex, w);
                // return "#26A0FC";
                return setColor[dataPointIndex];
              }
            },
          ],
          plotOptions: {
            bar: {
              borderRadius: !vm.changeColor ? 3 : 5,
              horizontal: true,
              barHeight: !vm.changeColor ? "60px" : "80%",
              dataLabels: {
                position: "top",
              },
            },
          },
          dataLabels: {
            enabled: true,
            offsetX: -6,
          },
          stroke: {
            show: true,
            width: 1,
            colors: ["#fff"],
          },
          xaxis: {
            categories: arr,
          },
          yaxis: {
            labels: {
              style: {
                fontSize: "18px",
              },
            },
          },
          legend: {
            show: false,
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

  &__body {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
  }
}
</style>