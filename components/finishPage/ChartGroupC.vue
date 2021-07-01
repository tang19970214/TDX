<template>
  <div class="chartGroupC">
    <div style="min-width: 900px">
      <div class="chartGroupC__header">
        <div class="chartGroupC__header--title">
          <label>指標</label>
        </div>
        <div class="chartGroupC__header--ans" v-for="item in 6" :key="item">
          <label>{{item - 1}}</label>
        </div>
      </div>

      <div class="chartGroupC__content">
        <!-- 說明欄 -->
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

        <!-- 題目與答案 -->
        <div class="chartGroupC__content--chart" v-for="item in data" :key="item.id">
          <el-tooltip effect="dark" :content="item.title" placement="top-start">
            <div class="title">{{item.shortTitle}}</div>
          </el-tooltip>
          <div class="ans" v-for="items in item.ans" :key="items" @click="showAns(item, items)"></div>
          <!-- 產業平均線 -->
          <el-tooltip effect="dark" :content="String(item.avg)" placement="top">
            <div class="lineAvg" :style="{'margin-left': (item.avg * 101) + 'px'}"></div>
          </el-tooltip>
          <!-- 產業高標線 -->
          <el-tooltip effect="dark" :content="String(item.max)" placement="top">
            <div class="lineMax" :style="{'margin-left': (item.max * 101) + 'px'}"></div>
          </el-tooltip>
          <!--  -->
          <div class="border">
            <div class="border__line" v-for="line in 6" :key="line" @click="showAns(item, line)"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- dialog -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" :append-to-body="true" v-if="getAns.length > 0">
      <div class="chartGroupC__dialog" :class="{'chartGroupC__dialog--yourAns': chooseAns == getAns[0].id}">
        <label>Stage {{getAns[0].id}}</label>
        <label>{{getAns[0].text}}</label>
      </div>

      <div class="chartGroupC__progress">
        <img src="@/assets/images/stagearrow.png" alt="升級所需條件" width="40px" height="70px" @click="openProgress = !openProgress" v-if="getAns.length > 1">
        <div class="chartGroupC__progress--content">
          <!-- 升級條件 -->
          <div class="progress" v-if="openProgress">
            <div class="progress__flex" v-if="getAns[0].desc.split('\n')">
              <strong v-for="(t, i) in getAns[0].desc.split('\n')" :key="i">{{t}}</strong>
            </div>
            <div v-else>
              <strong>{{getAns[0].desc}}</strong>
            </div>
          </div>
          <div class="chartGroupC__dialog" :class="{'chartGroupC__dialog--yourAns': chooseAns == getAns[1].id}" v-if="getAns.length > 1">
            <label>Stage {{getAns[1].id}}</label>
            <label>{{getAns[1].text}}</label>
          </div>
        </div>
      </div>
      <span slot="footer">
        <el-button type="danger" @click="closeDialog()" plain>關閉</el-button>
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
    groupCApi: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      dialogVisible: false,
      dialogTitle: "",
      chooseAns: "",
      getAns: [],
      openProgress: false,
    };
  },
  computed: {
    setDistance() {
      return (ans) => {
        return ans * 100;
      };
    },
    setTop() {
      return (i) => {
        let setScreenWidth = document.body.clientWidth;
        if (i == 0) {
          return setScreenWidth > 1280 ? 30 : setScreenWidth > 540 ? 42 : 69;
        } else if (i == 1) {
          return setScreenWidth > 1280 ? 115 : setScreenWidth > 540 ? 155 : 220;
        } else if (i == 2) {
          return setScreenWidth > 1280 ? 200 : setScreenWidth > 540 ? 278 : 383;
        } else if (i == 3) {
          return setScreenWidth > 1280 ? 285 : setScreenWidth > 540 ? 403 : 560;
        } else if (i == 4) {
          return setScreenWidth > 1280 ? 370 : setScreenWidth > 540 ? 500 : 698;
        } else if (i == 5) {
          return setScreenWidth > 1280 ? 455 : setScreenWidth > 540 ? 598 : 835;
        } else if (i == 6) {
          return setScreenWidth > 1280
            ? 552
            : setScreenWidth > 540
            ? 722
            : 1013;
        } else if (i == 7) {
          return setScreenWidth > 1280
            ? 649
            : setScreenWidth > 540
            ? 848
            : 1190;
        } else if (i == 8) {
          return setScreenWidth > 1280
            ? 734
            : setScreenWidth > 540
            ? 972
            : 1355;
        } else if (i == 9) {
          return setScreenWidth > 1280
            ? 819
            : setScreenWidth > 540
            ? 1097
            : 1520;
        } else if (i == 10) {
          return setScreenWidth > 1280
            ? 894
            : setScreenWidth > 540
            ? 1195
            : 1655;
        } else if (i == 11) {
          return setScreenWidth > 1280
            ? 969
            : setScreenWidth > 540
            ? 1293
            : 1780;
        } else if (i == 12) {
          return setScreenWidth > 1280
            ? 1082
            : setScreenWidth > 540
            ? 1443
            : 1985;
        } else if (i == 13) {
          return setScreenWidth > 1280
            ? 1183
            : setScreenWidth > 540
            ? 1582
            : 2176;
        } else if (i == 14) {
          return setScreenWidth > 1280
            ? 1260
            : setScreenWidth > 540
            ? 1665
            : 2285;
        } else if (i == 15) {
          return setScreenWidth > 1280
            ? 1345
            : setScreenWidth > 540
            ? 1763
            : 2410;
        }
      };
    },
  },
  methods: {
    showAns(item, ans) {
      let getAllAns = this.groupCApi.filter((res) => res.id == item.qus)[0]
        ?.ans;
      this.chooseAns = item.ans;
      this.getAns = [];
      this.dialogTitle = item.title;
      if (ans == 1) {
        this.getAns.push(getAllAns[ans - 1]);
      } else {
        this.getAns.push(getAllAns[ans - 2], getAllAns[ans - 1]);
      }
      /* open */
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
      this.openProgress = false;
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
      min-width: 150px;
      max-width: 150px;
      text-align: center;
      margin-right: 50px;
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
          }

          &__max {
            position: relative;
            width: 12px;
            height: 12px;
            background: rgb(108, 99, 255);
            border-radius: 50%;
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
        min-width: 150px;
        max-width: 150px;
        height: 50px;
        padding: 8px;
        display: flex;
        align-items: center;
        margin-right: 50px;
        box-sizing: border-box;
        background: rgb(88, 153, 200);
        color: white;
        font-size: 20px;
        font-weight: bold;
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

      .lineAvg {
        position: absolute;
        left: 195px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgb(249, 73, 75);
        z-index: 50;
      }

      .lineMax {
        position: absolute;
        left: 195px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgb(108, 99, 255);
        z-index: 50;
      }

      .border {
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        margin-left: 200px;
        display: flex;
        align-items: center;

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
    align-items: flex-start;

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

  &__progress {
    width: 100%;
    display: flex;

    img {
      margin-right: 16px;
      cursor: pointer;
    }

    &--content {
      width: 100%;
      padding-top: 20px;

      .progress {
        width: 100%;
        font-size: 16px;
        letter-spacing: 2px;
        margin-bottom: 20px;

        &__flex {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
}
</style>