<template>
  <div class="chartCloud">
    <div class="chartCloud__header">
      <el-tooltip effect="dark" :content="title" placement="top">
        <label>{{title}}</label>
      </el-tooltip>
    </div>
    <div class="chartCloud__body">
      <vue-word-cloud :words="words" :color="setColor()" :font-size-ratio="0.5" :spacing="2" font-family="Roboto" />
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
    words: {
      type: Array,
      required: true,
    },
    ans: {
      type: Array,
      required: true,
    },
  },
  computed: {
    setColor() {
      return () => {
        const vm = this;
        return ([text, weight]) => {
          return vm.ans.includes(text)
            ? "red"
            : weight > 20
            ? "#7E81FF"
            : weight > 10
            ? "#8AA8FF"
            : "#92C0FF";
        };
      };
    },
  },
};
</script>

<style lang="scss">
.chartCloud {
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
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;

    .wordCloud {
      //   height: 100%;
      z-index: 5;
    }
  }
}
</style>