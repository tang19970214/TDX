<template>
  <div class="finishPage">
    <div class="finishPage__header">
      <img src="@/assets/images/finishPage.svg" alt="">

      <div class="finishPage__header--tab">
        <strong :class="{'active': item.id == defaultTab}" v-for="item in tabList" :key="item.id" @click="defaultTab = item.id">{{item.title}}</strong>
      </div>

      <div class="finishPage__header--subTitle">
        <strong v-if="getIndustry()">針對外部流程分為供應商互動、與客戶的互動</strong>
        <strong v-else>{{$store.state.explanationNote.thankPage}}</strong>
      </div>
    </div>

    <div v-if="getIndustry()">
      <!-- 數位投入 B -->
      <el-row v-if="defaultTab == 1">
        <el-col :span="24" :md="12" v-for="item in groupBList" :key="item.id">
          <ChartPie :title="item.title" :labels="item.labels" :series="item.series" v-if="item.type == 'pie'" />
          <ChartCloud group="b" :title="item.title" :words="item.words" v-if="item.type == 'cloud'" />
        </el-col>
      </el-row>
      <!-- 數位成熟度 C -->
      <el-row v-if="defaultTab == 2">
        <el-col :span="24">
          <ChartGroupC :data="groupCList" />
        </el-col>
      </el-row>
      <!-- 數位成效 D -->
      <el-row v-if="defaultTab == 3">
        <el-col :span="24" :md="12" v-for="item in groupDList" :key="item.id">
          <ChartBar :title="item.title" :labels="item.labels" :series="item.series" v-if="item.type == 'bar'" />
          <ChartPie :title="item.title" :labels="item.labels" :series="item.series" v-if="item.type == 'pie'" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import ChartPie from "../components/finishPage/ChartPie.vue";
import ChartCloud from "../components/finishPage/ChartCloud.vue";
import ChartBar from "../components/finishPage/ChartBar.vue";
import ChartGroupC from "../components/finishPage/ChartGroupC.vue";

import chartList_textile from "../static/chartList_textile.json";

export default {
  components: {
    PageTitle,
    ChartPie,
    ChartCloud,
    ChartBar,
    ChartGroupC,
  },
  data() {
    return {
      groupBList: [],
      groupCList: [],
      groupDList: [],
      // =========
      defaultTab: 1,
      tabList: [
        { id: 1, title: "數位投入" },
        { id: 2, title: "數位成熟度" },
        { id: 3, title: "數位成效" },
      ],
    };
  },
  computed: {
    getIndustry() {
      return () => {
        if (
          this.$store.state?.formInfo?.a6 == "紡織業" ||
          this.$store.state?.formInfo?.a6 == "扣件及金屬製品製造業"
        ) {
          return true;
        } else {
          return false;
        }
      };
    },
  },
  methods: {
    getChartList() {
      if (
        this.$store.state.formInfo.a6 == "紡織業" ||
        this.$store.state.formInfo.a6 == "扣件及金屬製品製造業"
      ) {
        this.groupBList = chartList_textile.groupB;
        this.groupCList = chartList_textile.groupC;
        this.groupDList = chartList_textile.groupD;
        this.groupCList[0].ans = this.$store.state.formInfo.cA11;
        this.groupCList[1].ans = this.$store.state.formInfo.cA12;
        this.groupCList[2].ans = this.$store.state.formInfo.cA13;
        this.groupCList[3].ans = this.$store.state.formInfo.cA21;
        this.groupCList[4].ans = this.$store.state.formInfo.cA22;
        this.groupCList[5].ans = this.$store.state.formInfo.cA23;
        this.groupCList[6].ans = this.$store.state.formInfo.cB11;
        this.groupCList[7].ans = this.$store.state.formInfo.cB12;
        this.groupCList[8].ans = this.$store.state.formInfo.cB21;
        this.groupCList[9].ans = this.$store.state.formInfo.cB22;
        this.groupCList[10].ans = this.$store.state.formInfo.cC11;
        this.groupCList[11].ans = this.$store.state.formInfo.cC12;
        this.groupCList[12].ans = this.$store.state.formInfo.cC13;
        this.groupCList[13].ans = this.$store.state.formInfo.cC21;
        this.groupCList[14].ans = this.$store.state.formInfo.cC22;
        this.groupCList[15].ans = this.$store.state.formInfo.cC23;
      }
    },
  },
  mounted() {
    this.getChartList();
  },
};
</script>

<style lang="scss">
.finishPage {
  position: relative;
  width: 100%;
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
      margin-top: 20px;
      display: flex;
      align-items: center;

      strong {
        padding: 13px 8px 0 8px;
        line-height: 1.2;
        white-space: pre-wrap;
        overflow-wrap: break-word;
        color: #5899c8;
        font-size: 24px;
        transition: 0.5s;
        cursor: pointer;

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
      line-height: 1.2;
      white-space: pre-wrap;
      overflow-wrap: break-word;
    }
  }
}
</style>