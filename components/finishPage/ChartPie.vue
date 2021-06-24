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
        let newArr = {
          pie: {
            size: 200,
            // distributed: true,
          },
          chart: {
            events: {
              animationEnd: function (ctx, event) {
                console.log(ctx, event);
                ctx.toggleDataPointSelection(vm.ans);
              },
            },
          },
          labels: arr,
          colors: [
            "#7D9DDE",
            "#E98068",
            "#FFBE5C",
            "#66BC6B",
            "#990099",
            "#E91E63",
            "#546E7A",
          ],
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