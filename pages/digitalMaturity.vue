<template>
  <div class="digitalMaturity" v-if="groupCList.length > 0">
    <div class="digitalMaturity__header">
      <PageTitle title="數位成熟度" />
    </div>

    <!-- TODO: 依產業分開兩表 -->

    <!-- 數位成熟度架構 -->
    <div class="digitalMaturity__mature">
      <div class="digitalMaturity__mature--title">
        <strong>數位成熟度架構</strong>
      </div>

      <div class="digitalMaturity__mature--titleImg">
        <p>數位成熟度</p>
      </div>

      <div class="digitalMaturity__mature--introduce">
        <div class="introduceBlock" v-for="item in matureList" :key="item.id">
          <div class="introduceBlock__mainTitle" :style="{ backgroundColor: item.bgColor }">
            {{ item.title }}
          </div>

          <div class="introduceBlock__subTitle">
            <div class="introduceBlock__subTitle--title" v-for="items in item.subTitle" :key="items.id">
              <div class="subTitle" :style="{ backgroundColor: item.supBgColor }">{{ items.title }}</div>
              <div class="context" v-for="text in items.child" :key="text.id">{{ text.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ============================A1.高層共識============================ -->
    <div class="digitalMaturity__form">
      <el-form class="form" ref="form" :model="ruleForm" :rules="rules" label-position="top">
        <div v-for="(item, idx) in groupCList" :key="idx">
          <div class="digitalMaturity__showHeader">
            <strong>{{ item.group }}</strong>
            <p v-if="!!item.groupDesc">{{ item.groupDesc }}</p>
          </div>

          <!-- 16 q16 -->
          <div class="form__question" v-for="items in item.questions" :key="items.num">
            <p class="form__question--no">{{ items.num }}.</p>

            <el-form-item class="form__question--body" :label="items.que" :prop="`q${items.num}`">
              <div class="introduceText" v-if="!!items.queDesc">{{ items.queDesc }}</div>
              <el-radio-group v-model="ruleForm[`q${items.num}`]">
                <el-radio v-for="ans in items.options" :key="ans.id" :label="ans.value">{{ ans.label }}</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
        </div>
      </el-form>

      <!-- next step -->
      <div class="digitalMaturity__form--btn">
        <button class="goNext" @click="enter()">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";

export default {
  head: {
    title: "數位成熟度 - 台灣產業數位轉型量表TDX",
  },
  components: { PageTitle },
  data() {
    return {
      groupCList: [],
      matureList: [
        /* 人(People) */
        {
          id: 1,
          title: "人(People)",
          bgColor: "#d6d254",
          supBgColor: "#f0ed90",
          subTitle: [
            {
              id: 11,
              title: "高層共識",
              child: [
                { id: 111, title: "數轉願景" },
                { id: 112, title: "數轉策略" },
                { id: 113, title: "數位文化" },
              ],
            },
            {
              id: 12,
              title: "組織能力",
              child: [
                { id: 121, title: "技能應用" },
                { id: 122, title: "培訓計畫" },
                { id: 123, title: "專責部門" },
              ],
            },
          ],
        },
        /* 流程(Process) */
        {
          id: 2,
          title: "流程(Process)",
          bgColor: "#39c734",
          supBgColor: "#6dcf96",
          subTitle: [
            {
              id: 21,
              title: "內部流程",
              child: [
                { id: 211, title: "跨層級整合" },
                { id: 212, title: "作業流程整合" },
              ],
            },
            {
              id: 22,
              title: "外部流程",
              child: [
                { id: 221, title: "供應商互動" },
                { id: 222, title: "客戶體驗" },
              ],
            },
          ],
        },
        /* 技術(Technology) */
        {
          id: 3,
          title: "技術(Technology)",
          bgColor: "#346ac7",
          supBgColor: "#6d72cf",
          subTitle: [
            {
              id: 31,
              title: "基礎架構",
              child: [
                { id: 311, title: "資料安全" },
                { id: 312, title: "系統整合" },
                { id: 313, title: "技術應用" },
              ],
            },
            {
              id: 32,
              title: "數據價值",
              child: [
                { id: 321, title: "資料蒐集" },
                { id: 322, title: "資料分析" },
                { id: 323, title: "資料應用" },
              ],
            },
          ],
        },
      ],
      ruleForm: {
        q16: "", // cA11
        q17: "", // cA13
        q18: "", // cA13
        q19: "", // cA21
        q20: "", // cA23
        q21: "", // cA23
        q22: "", // cB11
        q23: "", // cB12
        q24: "", // cB21
        q25: "", // cB22
        q26: "", // cC11
        q27: "", // cC12
        q28: "", // cC13
        q29: "", // cC21
        q30: "", // cC22
        q31: "", // cC23
      },
      rules: {
        q16: [{ required: true, message: "請選擇", trigger: "change" }],
        q17: [{ required: true, message: "請選擇", trigger: "change" }],
        q18: [{ required: true, message: "請選擇", trigger: "change" }],
        q19: [{ required: true, message: "請選擇", trigger: "change" }],
        q20: [{ required: true, message: "請選擇", trigger: "change" }],
        q21: [{ required: true, message: "請選擇", trigger: "change" }],
        q22: [{ required: true, message: "請選擇", trigger: "change" }],
        q23: [{ required: true, message: "請選擇", trigger: "change" }],
        q24: [{ required: true, message: "請選擇", trigger: "change" }],
        q25: [{ required: true, message: "請選擇", trigger: "change" }],
        q26: [{ required: true, message: "請選擇", trigger: "change" }],
        q27: [{ required: true, message: "請選擇", trigger: "change" }],
        q28: [{ required: true, message: "請選擇", trigger: "change" }],
        q29: [{ required: true, message: "請選擇", trigger: "change" }],
        q30: [{ required: true, message: "請選擇", trigger: "change" }],
        q31: [{ required: true, message: "請選擇", trigger: "change" }],
      },
    };
  },
  methods: {
    getList() {
      this.$axios
        .get(`https://dtrl.tw/sys/api/QuestionC/Load?TypeId=${this.$store.state.formInfo.q6}`)
        // .get(`http://tdx.yummydesign.com.tw/sys/api/QuestionC/Load?TypeId=${this.$store.state.formInfo.q6}`)
        .then((res) => {
          const { code, data } = res.data;
          if (code === 200) {
            this.groupCList = data;
          }
        });
    },
    enter() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          let chartObj = Object.assign(this.$store.state.chartInfo, this.ruleForm);
          this.$store.dispatch("setChartInfo", chartObj);

          let newObj = Object.assign(this.$store.state.formInfo, this.ruleForm);
          this.$store.dispatch("setFormInfo", newObj);
          this.$router.push({ name: "digitalPerformancePage" });
        } else {
          this.$nextTick(() => {
            let isError = document.getElementsByClassName("is-error");
            isError.forEach((el) => {
              el.classList.remove("bg-error");
              el.classList.add("bg-error");
              el.childNodes[1]?.childNodes[0]?.classList?.remove("focusRing");
              el.childNodes[1]?.childNodes[0]?.classList?.add("focusRing");
            });

            isError[0].scrollIntoView({
              block: "center",
              behavior: "smooth",
            });
          });
          return;
        }
      });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="scss">
.digitalMaturity {
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
    padding: 16px;
    @media (min-width: 991) {
      padding: 24px;
    }
  }

  &__mature {
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;

    &--title {
      width: 100%;
      text-align: left;
      line-height: 1.2;
      white-space: pre-wrap;
      overflow-wrap: break-word;
      color: rgb(92, 136, 201);
      font-size: 28px;
    }

    &--titleImg {
      width: 100%;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: linear-gradient(90deg, #d6d254, #39c734, #346ac7);
      color: #fff;
      font-size: 1.5em;
      border-radius: 50%;
      margin: 8px 0px 16px 0px;
    }

    &--introduce {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      .introduceBlock {
        width: 30%;

        &__mainTitle {
          width: 100%;
          text-align: center;
          color: #111;
          border-radius: 4px;
          line-height: 2em;
          margin-bottom: 8px;
        }

        &__subTitle {
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;

          &--title {
            width: 48%;

            .subTitle {
              width: 100%;
              border-radius: 4px;
              line-height: 2em;
              text-align: center;
              margin-bottom: 8px;
            }

            .context {
              width: 100%;
              background-color: #888;
              color: #fff;
              border-radius: 4px;
              line-height: 2em;
              text-align: center;
              margin-bottom: 8px;
            }
          }
        }
      }
    }
  }

  &__showHeader {
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    background: #a6d1ea;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 16px;

    strong {
      // margin: 32px 0px 0px;
      line-height: 1.2;
      white-space: pre-wrap;
      overflow-wrap: break-word;
      color: rgb(92, 136, 201);
      font-size: 24px;
    }

    p {
      margin: 0;
      letter-spacing: 1px;
      line-height: 1.8;
      white-space: pre-wrap;
      overflow-wrap: break-word;
      font-size: 14px;
      color: rgb(255, 255, 255);
      font-weight: 400;
    }
  }

  &__form {
    width: 100%;
    background: white;
    border-radius: 8px;
    padding: 8px;
    box-sizing: border-box;
    box-shadow: rgb(54 89 140 / 24%) 0px 4px 12px;

    &--subTitle {
      width: 100%;
      text-align: center;

      strong {
        line-height: 1.2;
        white-space: pre-wrap;
        overflow-wrap: break-word;
        color: rgb(92, 136, 201);
        font-size: 28px;
        font-weight: 700;
      }
    }

    &--btn {
      width: 100%;
      margin-top: 20px;

      .goNext {
        width: 100%;
        height: 44px;
        border: none;
        border-radius: 0.5rem;
        background: rgb(88, 153, 200);
        color: white;
        font-weight: 700;
        transition-duration: 300ms;
        cursor: pointer;

        &:hover {
          background: rgb(50, 118, 167);
        }
      }
    }
  }
}
</style>