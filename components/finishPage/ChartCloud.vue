<template>
  <div class="chartCloud">
    <div class="chartCloud__header">
      <el-tooltip effect="dark" :content="title" placement="top">
        <label>{{title}}</label>
      </el-tooltip>
    </div>
    <div class="chartCloud__body">
      <vue-word-cloud :words="words" :color="setColor()" font-family="Baloo Bhaijaan">
        <template slot-scope="{text, weight, word}">
          <div :title="weight" style="cursor: pointer;" @click="onWordClick(text, weight, word)">
            {{ text }}
          </div>
        </template>
      </vue-word-cloud>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    group: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    words: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      myColors: ["#1f77b4"],
    };
  },
  computed: {
    setColor() {
      return () => {
        // B, C, D 先判斷題組，再判斷所選答案
        return ([text, weight]) =>
          weight > 20 ? "#7E81FF" : weight > 10 ? "#8AA8FF" : "#92C0FF";
      };
    },
  },
  methods: {
    onWordClick(text, weight, word) {
      console.log(text, weight, word);
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  &__body {
    width: 100%;
    height: 210px;
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