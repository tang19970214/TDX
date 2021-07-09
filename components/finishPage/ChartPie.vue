<template>
  <div class="chartPie">
    <div class="chartPie__header">
      <el-tooltip effect="dark" :content="title" placement="top">
        <label>{{title}}</label>
      </el-tooltip>
    </div>
    <div class="chartPie__body" id="chartPie">
      <client-only>
        <apexchart type="pie" :width="getChartWidth()" height="350" :labels="labels" :options="getChartLabel(labels)" :series="series"></apexchart>
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
      type: Number,
    },
  },
  computed: {
    getChartWidth() {
      return () => {
        let getWidth = document.getElementById("chartPie")?.clientWidth || 450;
        return getWidth;
      };
    },
    getChartLabel() {
      return (arr) => {
        const vm = this;
        let setColor = [
          "#007BDF",
          "#008CFF",
          "#2DA0F8",
          "#4DADFB",
          "#6DB9F8",
          "#91CBFB",
          "#A9D4F7",
        ];
        let newArr = {
          pie: {
            size: 200,
            // distributed: true,
          },
          chart: {
            events: {
              animationEnd: function (ctx, event) {
                if (vm.ans !== 0) {
                  ctx.toggleDataPointSelection(vm.ans - 1);
                }
              },
            },
          },
          colors: [
            function ({ value, seriesIndex }) {
              if (vm.ans !== 0 && vm.ans - 1 == seriesIndex) {
                return "#F00";
              } else {
                return setColor[seriesIndex];
              }
            },
          ],
          dataLabels: {
            enabled: true,
            style: {
              fontSize: "16px",
              fontFamily: "Comic Sans MS",
            },
          },
          labels: arr,
          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        };
        return newArr;
      };
    },
  },
};
</script>

<style lang="scss">
.chartPie {
  width: 100%;
  padding: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  &__header {
    width: 100%;
    padding: 4px 16px;
    box-sizing: border-box;
    background: rgb(88, 153, 200);
    color: white;

    label {
      width: 100%;
      display: inline-block;
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