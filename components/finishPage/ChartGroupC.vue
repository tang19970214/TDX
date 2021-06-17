<template>
  <div class="chartGroupC">
    <div style="min-width: 1050px">
      <div class="chartGroupC__header">
        <div class="chartGroupC__header--title">
          <label>指標</label>
        </div>
        <div class="chartGroupC__header--ans" v-for="item in 6" :key="item">
          <label>{{item - 1}}</label>
        </div>
      </div>

      <div class="chartGroupC__content">
        <div class="chartGroupC__content--toolBox">
          <div class="toolList">
            <div class="icon">
              <div class="icon__score"></div>
            </div>
            <div class="text">本次分數</div>
          </div>
          <div class="toolList">
            <div class="icon">
              <div class="icon__avg"></div>
            </div>
            <div class="text">產業平均</div>
          </div>
          <div class="toolList">
            <div class="icon">
              <div class="icon__max"></div>
            </div>
            <div class="text">產業高標</div>
          </div>
        </div>

        <div class="chartGroupC__content--chart" v-for="item in data" :key="item.id">
          <div class="title">{{item.title}}</div>
          <div class="ans" v-for="items in item.ans" :key="items" @click="showAns(item, items)"></div>
          <div class="border">
            <div class="border__line" v-for="line in 6" :key="line"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- dialog -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="90%" :append-to-body="true">
      <div class="chartGroupC__dialog" :class="{'chartGroupC__dialog--yourAns': getAns[1].id == item.id}" v-for="item in getAns" :key="item.id">
        <label>Stage {{item.id}}</label>
        <label>{{item.ans}}</label>
      </div>
      <span slot="footer">
        <el-button type="danger" @click="dialogVisible = false" plain>關閉</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      dialogVisible: false,
      dialogTitle: "",
      getAns: [],
    };
  },
  methods: {
    showAns(item, ans) {
      this.getAns = [];
      this.dialogTitle = item.title;
      let getQus = this.$store.state.groupC[item.id];
      if (ans == 1) {
        this.getAns.push(getQus[ans - 1]);
      } else {
        this.getAns.push(getQus[ans - 2], getQus[ans - 1]);
      }

      /* open */
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss">
.chartGroupC {
  width: 100%;
  overflow-x: scroll;

  &__header {
    width: 100%;
    padding: 4px 0;
    box-sizing: border-box;
    background: rgb(88, 153, 200);
    color: white;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: center;

    &--title {
      min-width: 200px;
      max-width: 200px;
      text-align: center;
      margin-right: 50px;

      @media (min-width: 540px) {
        min-width: 300px;
        max-width: 300px;
      }

      @media (min-width: 1280px) {
        min-width: 500px;
        max-width: 500px;
      }
    }

    &--ans {
      min-width: 100px;
      max-width: 100px;
    }
  }

  &__content {
    position: relative;
    width: 100%;
    background: white;

    &--toolBox {
      position: absolute;
      top: 16px;
      right: 16px;
      padding: 8px;
      box-sizing: border-box;
      background: white;
      border: 2px solid #eee;
      border-radius: 8px;
      z-index: 5;

      .toolList {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .icon {
          width: 40px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;

          &__score {
            width: 25px;
            height: 18px;
            background: #b0d8ee;
          }

          &__avg {
            position: relative;
            width: 12px;
            height: 12px;
            background: rgb(249, 73, 75);
            border-radius: 50%;

            &::after {
              content: "";
              position: absolute;
              top: 50%;
              left: -4px;
              width: 20px;
              height: 1px;
              background: rgb(249, 73, 75);
            }
          }

          &__max {
            position: relative;
            width: 12px;
            height: 12px;
            background: rgb(108, 99, 255);
            border-radius: 50%;

            &::after {
              content: "";
              position: absolute;
              top: 50%;
              left: -4px;
              width: 20px;
              height: 1px;
              background: rgb(108, 99, 255);
            }
          }
        }

        .text {
          width: 80px;
          height: 30px;
          color: rgb(114, 169, 208);
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    &--chart {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      padding-bottom: 16px;

      &:first-child {
        padding-top: 16px;
      }

      .title {
        min-width: 200px;
        max-width: 200px;
        margin-right: 50px;
        padding: 8px;
        box-sizing: border-box;
        background: rgb(88, 153, 200);
        color: white;
        font-size: 20px;
        font-weight: bold;

        @media (min-width: 540px) {
          min-width: 300px;
          max-width: 300px;
        }

        @media (min-width: 1280px) {
          min-width: 500px;
          max-width: 500px;
        }
      }

      .ans {
        min-width: 101px;
        max-width: 101px;
        height: 50px;
        background: rgb(176, 216, 238);
        transition: 0.4s;
        transition: 0.4s;
        z-index: 10;
        cursor: pointer;

        &:hover {
          background: rgb(88, 153, 200);
        }
      }

      .border {
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        margin-left: 250px;
        display: flex;
        align-items: center;

        @media (min-width: 540px) {
          margin-left: 350px;
        }

        @media (min-width: 1280px) {
          margin-left: 550px;
        }

        &__line {
          min-width: 100px;
          max-width: 100px;
          height: 100%;
          border-left: 1px solid rgb(176, 216, 238);
        }
      }
    }
  }

  &__dialog {
    width: 100%;
    display: flex;
    align-items: center;

    &:first-child {
      padding-bottom: 16px;
    }

    label {
      color: #5899c8;
      font-size: 20px;

      &:first-child {
        min-width: 75px;
        max-width: 75px;
      }
    }

    &--yourAns {
      font-weight: bold;
    }
  }
}
</style>