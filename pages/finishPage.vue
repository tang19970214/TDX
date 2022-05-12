<template>
  <div class="finishPage">
    <div class="finishPage__header">
      <img src="@/assets/images/finishPage.svg" alt="完成" />

      <div class="finishPage__header--tab">
        <strong :class="{ active: item.id == defaultTab }" v-for="item in tabList" :key="item.id" @click="defaultTab = item.id">{{ item.title }}</strong>
      </div>

      <!-- <div class="finishPage__header--subTitle" v-if="!getIndustry()">
        <div class="successSend">
          <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px;">
            <path d="M25.1814 4.57018C24.5642 3.95273 23.8315 3.46292 23.025 3.12874C22.2184 2.79456 21.354 2.62256 20.481 2.62256C19.608 2.62256 18.7435 2.79456 17.937 3.12874C17.1305 3.46292 16.3977 3.95273 15.7806 4.57018L14.4997 5.85101L13.2189 4.57018C11.9723 3.32355 10.2815 2.6232 8.51849 2.6232C6.75549 2.6232 5.0647 3.32355 3.81807 4.57018C2.57144 5.81681 1.87109 7.5076 1.87109 9.2706C1.87109 11.0336 2.57144 12.7244 3.81807 13.971L5.0989 15.2518L14.4997 24.6527L23.9006 15.2518L25.1814 13.971C25.7989 13.3539 26.2887 12.6211 26.6228 11.8146C26.957 11.0081 27.129 10.1436 27.129 9.2706C27.129 8.39759 26.957 7.53314 26.6228 6.72663C26.2887 5.92011 25.7989 5.18734 25.1814 4.57018V4.57018Z" stroke="#36598C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <strong>成功送出</strong>
        </div>
        <label>{{$store.state.explanationNote.thankPage}}</label>
      </div> -->

      <div class="finishPage__header--subTitle" v-if="defaultTab > 1">
        <div class="desc mt-23" v-if="defaultTab === 2">
          <p>圖表中，各題結果的數字是透過前期調查所取得資料。</p>
          <p>紅色圖例代表您這次選擇的選項，若在圖中沒有紅色，代表這個選項在整體調查樣本中還沒有被選取。</p>
        </div>

        <div class="desc" v-if="defaultTab === 3">
          <p>點選分數長條圖中的每個級距，可以看到每個等級分別代表什麼喔！</p>
          <p>另外點選裡面的箭頭還可以看到自己可以如何前往下一個階段。</p>
        </div>

        <div class="desc" v-if="defaultTab === 4">
          <p>圖表中，各題結果的數字是透過前期調查所取得資料。</p>
          <p>紅色圖例代表您這次選擇的選項，若在圖中沒有紅色，代表這個選項在整體調查樣本中還沒有被選取。</p>
        </div>
      </div>
    </div>

    <!-- <div v-if="getIndustry()"> -->
    <!-- 大家都有 -->
    <el-row v-if="defaultTab == 1">
      <AllFinishPage />
    </el-row>
    <!-- 數位投入 B -->
    <el-row v-if="defaultTab == 2">
      <el-col :span="24" v-for="item in groupBList" :key="item.id">
        <ChartPie :title="item.title" :shortTitle="item.shortTitle" :labels="item.labels" :series="item.series" :ans="item.ans" v-if="item.type == 'pie'" />
        <ChartBar :title="item.title" :shortTitle="item.shortTitle" :labels="item.labels" :series="item.series" :ans="item.ans" v-if="item.type == 'bar'" />
        <!-- <ChartCloud :title="item.title" :words="item.words" :ans="item.ans" v-if="item.type == 'cloud'" /> -->
      </el-col>
    </el-row>
    <!-- 數位成熟度 C -->
    <el-row v-if="defaultTab == 3">
      <el-col :span="24">
        <ChartGroupC :data="groupCList" :groupCApi="groupCApi" />
      </el-col>
    </el-row>
    <!-- 數位成效 D -->
    <el-row v-if="defaultTab == 4">
      <el-col :span="24" v-for="item in groupDList" :key="item.id">
        <ChartPie :title="item.title" :shortTitle="item.shortTitle" :labels="item.labels" :series="item.series" :ans="item.ans" v-if="item.type == 'pie'" />
        <ChartBar :title="item.title" :shortTitle="item.shortTitle" :labels="item.labels" :series="item.series" :ans="item.ans" v-if="item.type == 'bar'" />
      </el-col>
    </el-row>
    <!-- </div> -->
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import ChartPie from "../components/finishPage/ChartPie.vue";
import ChartCloud from "../components/finishPage/ChartCloud.vue";
import ChartBar from "../components/finishPage/ChartBar.vue";
import ChartGroupC from "../components/finishPage/ChartGroupC.vue";
import AllFinishPage from "../components/finishPage/AllFinishPage.vue";

import chartList_textile from "../static/chartList_textile.json";
import chartList_metal from "../static/chartList_metal.json";

const tabList = [
  { id: 1, title: "量表結果摘要" },
  { id: 2, title: "數位投入" },
  { id: 3, title: "數位成熟度" },
  { id: 4, title: "數位成效" },
];

export default {
  head: {
    title: "分析結果 - 台灣產業數位轉型量表TDX",
  },
  components: {
    PageTitle,
    ChartPie,
    ChartCloud,
    ChartBar,
    ChartGroupC,
    AllFinishPage,
  },
  data() {
    return {
      groupCApi: [],
      // =========
      groupBList: [],
      groupCList: [],
      groupDList: [],
      // =========
      defaultTab: 1,
      tabList: [],
    };
  },
  computed: {
    getIndustry() {
      return () => {
        if (this.$store.state?.formInfo?.q6 == "紡織業" || this.$store.state?.formInfo?.q6 == "螺絲、螺帽及鉚釘製造業") {
          return true;
        } else {
          this.tabList = this.tabList.filter((i) => i.id === 4);
          return false;
        }
      };
    },
  },
  methods: {
    async getGroupCList() {
      await this.$axios
        .get("https://dtrl.tw/sys/api/QuestionGroupC/Load")
        // .get("http://tdx.yummydesign.com.tw/sys/api/QuestionGroupC/Load")
        .then((res) => {
          this.groupCApi = res.data.data;
        });
    },
    getChartList() {
      if (this.$store.state.formInfo.q6 == "紡織業") {
        this.groupBList = chartList_textile.groupB;
        this.groupCList = chartList_textile.groupC;
        this.groupDList = chartList_textile.groupD;
      } else if (this.$store.state.formInfo.q6 == "螺絲、螺帽及鉚釘製造業") {
        this.groupBList = chartList_metal.groupB;
        this.groupCList = chartList_metal.groupC;
        this.groupDList = chartList_metal.groupD;
      }

      this.groupCList.forEach((res, idx) => {
        res.qus = this.groupCApi[idx].id;
        res.title = this.groupCApi[idx].que;
        res.shortTitle = this.groupCApi[idx].shortQue;
      });

      if (this.groupBList.length > 0) {
        // TODO:json檔須先改選項及比例，原始檔在windows那台電腦，做完後再往下做（2021/10/21）

        // TODO:到時候有q8,q10,q14,q15時要開啟（2021/10/21）
        // const q7Ans = this.$store.state.chartInfo.q7;
        // TODO:
        // const 18Ans = this.$store.state.chartInfo.q8;
        this.groupBList[0].ans = this.$store.state.chartInfo.q7;
        // TODO:到時候有q8,q10,q14,q15時要開啟（2021/10/21）
        // this.groupBList[1].ans =
        //   q7Ans == 1 ? 0 : this.$store.state.chartInfo.q8;
        // TODO:

        // FIXME:到時候有q8,q10,q14,q15時要刪除（2021/10/21）
        this.groupBList[1].ans = this.$store.state.chartInfo.q9 || 0;
        this.groupBList[2].ans = this.$store.state.chartInfo.q11 || 0;
        this.groupBList[3].ans = this.$store.state.chartInfo.q12 || 0;
        this.groupBList[4].ans = this.$store.state.chartInfo.q13 || 0;
        //FIXME:

        // TODO:到時候有q8,q10,q14,q15時要開啟（2021/10/21）
        // if (!!this.groupBList[1].ans) {
        //   this.groupBList[2].ans = this.$store.state.chartInfo.q9 || 0;
        //   this.groupBList[3].ans = this.$store.state.chartInfo.q10 || 0;
        //   this.groupBList[4].ans = this.$store.state.chartInfo.q11 || 0;
        //   this.groupBList[5].ans = this.$store.state.chartInfo.q12 || 0;
        //   this.groupBList[6].ans = this.$store.state.chartInfo.q13 || 0;
        // }
        // this.groupBList[7].ans = this.$store.state.chartInfo.q14?.map(
        //   (i) => i - 1
        // );
        // this.groupBList[8].ans = this.$store.state.chartInfo.q15?.map(
        //   (i) => i - 1
        // );
        // TODO:
      }
      if (this.groupCList.length > 0) {
        this.groupCList[0].ans = this.$store.state.chartInfo.q16;
        this.groupCList[1].ans = this.$store.state.chartInfo.q17;
        this.groupCList[2].ans = this.$store.state.chartInfo.q18;
        this.groupCList[3].ans = this.$store.state.chartInfo.q19;
        this.groupCList[4].ans = this.$store.state.chartInfo.q20;
        this.groupCList[5].ans = this.$store.state.chartInfo.q21;
        this.groupCList[6].ans = this.$store.state.chartInfo.q22;
        this.groupCList[7].ans = this.$store.state.chartInfo.q23;
        this.groupCList[8].ans = this.$store.state.chartInfo.q24;
        this.groupCList[9].ans = this.$store.state.chartInfo.q25;
        this.groupCList[10].ans = this.$store.state.chartInfo.q26;
        this.groupCList[11].ans = this.$store.state.chartInfo.q27;
        this.groupCList[12].ans = this.$store.state.chartInfo.q28;
        this.groupCList[13].ans = this.$store.state.chartInfo.q29;
        this.groupCList[14].ans = this.$store.state.chartInfo.q30;
        this.groupCList[15].ans = this.$store.state.chartInfo.q31;
      }
      if (this.groupDList.length > 0) {
        const d2Ans = this.$store.state.chartInfo.q33;
        this.groupDList[1].ans = this.$store.state.chartInfo.q33;
        this.groupDList[2].ans = d2Ans == 3 ? 0 : this.$store.state.chartInfo.q34;
        this.groupDList[3].ans = d2Ans == 3 ? 0 : this.$store.state.chartInfo.q35;
        this.groupDList[5].ans = d2Ans == 3 ? 0 : this.$store.state.chartInfo.q37;
        this.groupDList[6].ans = d2Ans == 3 ? 0 : this.$store.state.chartInfo.q38;
        this.groupDList[7].ans = d2Ans == 3 ? 0 : this.$store.state.chartInfo.q39;
        // 複選
        this.groupDList[0].ans = this.$store.state.chartInfo.q32?.map((i) => i - 1);
        this.groupDList[4].ans = this.$store.state.chartInfo.q36?.map((i) => i - 1);
      }
    },
  },
  async mounted() {
    if (this.$store.state?.formInfo?.q6 == "紡織業" || this.$store.state?.formInfo?.q6 == "螺絲、螺帽及鉚釘製造業") {
      this.tabList = [...tabList];
    } else {
      // return true;
      this.tabList = [...tabList].filter((i) => i.id === 1);
    }

    await this.getGroupCList();
    this.getChartList();
  },
};
</script>

<style lang="scss">
.finishPage {
  position: relative;
  width: 100%;
  max-width: 976px;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 16px;
  z-index: 10;

  @media (min-width: 768px) {
    padding: 24px;
  }

  @media (min-width: 1024px) {
    padding: 32px;
  }

  &__header {
    width: 100%;
    padding: 16px;
    margin-bottom: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 991) {
      padding: 24px;
    }

    &--tab {
      width: 100%;
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      overflow-x: auto;

      @media (min-width: 769px) {
        justify-content: center;
      }

      strong {
        padding: 13px 8px 0 8px;
        line-height: 1.5;
        white-space: nowrap;
        overflow-wrap: break-word;
        color: #5899c8;
        font-size: 24px;
        transition: 0.5s;
        cursor: pointer;

        @media (min-width: 769px) {
          white-space: pre-wrap;
        }

        &:hover {
          padding-top: 0;
          font-size: 36px;
        }
      }

      .active {
        padding-top: 0;
        color: rgb(54, 89, 140);
        font-size: 36px;
      }
    }

    &--subTitle {
      margin-top: 20px;
      font-size: 20px;
      color: rgb(54, 89, 140);
      // line-height: 1.2;
      white-space: pre-wrap;
      overflow-wrap: break-word;

      .desc {
        display: flex;
        flex-direction: column;

        &.mt-23 {
          margin-top: 23px;
        }

        p {
          letter-spacing: 1px;
          line-height: 1.8;
          white-space: pre-wrap;
          overflow-wrap: break-word;
          font-size: 14px;
          color: rgb(82, 101, 151);
          font-weight: 700;
        }
      }

      .successSend {
        width: 100%;
        display: flex;
        align-items: center;

        strong {
          margin: 24px 0px 16px;
          line-height: 1.2;
          white-space: pre-wrap;
          overflow-wrap: break-word;
          color: rgb(54, 89, 140);
          font-size: 36px;
        }
      }
    }
  }
}
</style>