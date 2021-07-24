<template>
  <div class="digitalMaturity" v-if="groupCList.length > 0">
    <div class="digitalMaturity__header">
      <PageTitle title="數位成熟度" />
    </div>

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
          <div class="introduceBlock__mainTitle" :style="{backgroundColor: item.bgColor}">
            {{item.title}}
          </div>

          <div class="introduceBlock__subTitle">
            <div class="introduceBlock__subTitle--title" v-for="items in item.subTitle" :key="items.id">
              <div class="subTitle" :style="{backgroundColor: item.supBgColor}">{{items.title}}</div>
              <div class="context" v-for="text in items.child" :key="text.id">{{text.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ============================A1.高層共識============================ -->
    <div class="digitalMaturity__showHeader">
      <strong>{{getHeader($store.state.explanationNote.groupCNote1).title}}</strong>
      <p>{{getHeader($store.state.explanationNote.groupCNote1).text}}</p>
    </div>
    <div class="digitalMaturity__form">
      <el-form class="form" ref="formCA1" :model="ruleForm" :rules="rules" label-position="top">
        <!-- 16 cA11 -->
        <div class="form__question">
          <p class="form__question--no">16.</p>
          <el-form-item class="form__question--body" :label="groupCList[0].que" prop="cA11">
            <div class="introduceText">{{groupCList[0].note}}</div>
            <el-radio-group v-model="ruleForm.cA11">
              <el-radio v-for="item in groupCList[0].ans" :key="item.id" :label="item.id">{{item.text}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 17 cA12 -->
        <div class="form__question">
          <p class="form__question--no">17.</p>
          <el-form-item class="form__question--body" :label="groupCList[1].que" prop="cA12">
            <div class="introduceText">{{groupCList[1].note}}</div>
            <el-radio-group v-model="ruleForm.cA12">
              <el-radio v-for="item in groupCList[1].ans" :key="item.id" :label="item.id">{{item.text}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 18 cA13 -->
        <div class="form__question">
          <p class="form__question--no">18.</p>
          <el-form-item class="form__question--body" :label="groupCList[2].que" prop="cA13">
            <div class="introduceText">{{groupCList[2].note}}</div>
            <el-radio-group v-model="ruleForm.cA13">
              <el-radio v-for="item in groupCList[2].ans" :key="item.id" :label="item.id">{{item.text}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
      </el-form>
    </div>

    <!-- ============================A2.組織能力============================ -->
    <div class="digitalMaturity__showHeader">
      <strong>{{getHeader($store.state.explanationNote.groupCNote2).title}}</strong>
      <p>{{getHeader($store.state.explanationNote.groupCNote2).text}}</p>
    </div>
    <div class="digitalMaturity__form">
      <el-form class="form" ref="formCA2" :model="ruleForm" :rules="rules" label-position="top">
        <!-- 19 cA21 -->
        <div class="form__question">
          <p class="form__question--no">19.</p>
          <el-form-item class="form__question--body" :label="groupCList[3].que" prop="cA21">
            <div class="introduceText">{{groupCList[3].note}}</div>
            <el-radio-group v-model="ruleForm.cA21">
              <el-radio v-for="item in groupCList[3].ans" :key="item.id" :label="item.id">{{item.text}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 20 cA22 -->
        <div class="form__question">
          <p class="form__question--no">20.</p>
          <el-form-item class="form__question--body" :label="groupCList[4].que" prop="cA22">
            <div class="introduceText">{{groupCList[4].note}}</div>
            <el-radio-group v-model="ruleForm.cA22">
              <el-radio v-for="item in groupCList[4].ans" :key="item.id" :label="item.id">{{item.text}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 21 cA23 -->
        <div class="form__question">
          <p class="form__question--no">21.</p>
          <el-form-item class="form__question--body" :label="groupCList[5].que" prop="cA23">
            <div class="introduceText">{{groupCList[5].note}}</div>
            <el-radio-group v-model="ruleForm.cA23">
              <el-radio v-for="item in groupCList[5].ans" :key="item.id" :label="item.id">{{item.text}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
      </el-form>
    </div>

    <!-- ============================B1.內部流程============================ -->
    <div class="digitalMaturity__showHeader">
      <strong>{{getHeader($store.state.explanationNote.groupCNote3).title}}</strong>
      <p>{{getHeader($store.state.explanationNote.groupCNote3).text}}</p>
    </div>
    <div class="digitalMaturity__form">
      <el-form class="form" ref="formCB1" :model="ruleForm" :rules="rules" label-position="top">
        <!-- 22 cB11 -->
        <div class="form__question">
          <p class="form__question--no">22.</p>
          <el-form-item class="form__question--body" :label="groupCList[6].que" prop="cB11">
            <div class="introduceText">{{groupCList[6].note}}</div>
            <el-radio-group v-model="ruleForm.cB11">
              <el-radio v-for="item in groupCList[6].ans" :key="item.id" :label="item.id">{{item.text}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 23 cB12 -->
        <div class="form__question">
          <p class="form__question--no">23.</p>
          <el-form-item class="form__question--body" :label="groupCList[7].que" prop="cB12">
            <el-radio-group v-model="ruleForm.cB12">
              <el-radio v-for="item in groupCList[7].ans" :key="item.id" :label="item.id">{{item.text}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
      </el-form>
    </div>

    <!-- ============================B2.外部流程============================ -->
    <div class="digitalMaturity__showHeader">
      <strong>{{getHeader($store.state.explanationNote.groupCNote4).title}}</strong>
      <p>{{getHeader($store.state.explanationNote.groupCNote4).text}}</p>
    </div>
    <div class="digitalMaturity__form">
      <el-form class="form" ref="formCB2" :model="ruleForm" :rules="rules" label-position="top">
        <!-- 24 cB21 -->
        <div class="form__question">
          <p class="form__question--no">24.</p>
          <el-form-item class="form__question--body" :label="groupCList[8].que" prop="cB21">
            <div class="introduceText">{{groupCList[8].note}}</div>
            <el-radio-group v-model="ruleForm.cB21">
              <el-radio v-for="item in groupCList[8].ans" :key="item.id" :label="item.id">{{item.text}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 25 cB22 -->
        <div class="form__question">
          <p class="form__question--no">25.</p>
          <el-form-item class="form__question--body" :label="groupCList[9].que" prop="cB22">
            <div class="introduceText">{{groupCList[9].note}}</div>
            <el-radio-group v-model="ruleForm.cB22">
              <el-radio v-for="item in groupCList[9].ans" :key="item.id" :label="item.id">{{item.text}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
      </el-form>
    </div>

    <!-- ============================C1.基礎架構============================ -->
    <div class="digitalMaturity__showHeader">
      <strong>{{getHeader($store.state.explanationNote.groupCNote5).title}}</strong>
      <p>{{getHeader($store.state.explanationNote.groupCNote5).text}}</p>
    </div>
    <div class="digitalMaturity__form">
      <el-form class="form" ref="formCC1" :model="ruleForm" :rules="rules" label-position="top">
        <!-- 26 cC11 -->
        <div class="form__question">
          <p class="form__question--no">26.</p>
          <el-form-item class="form__question--body" :label="groupCList[10].que" prop="cC11">
            <div class="introduceText">{{groupCList[10].note}}</div>
            <el-radio-group v-model="ruleForm.cC11">
              <el-radio v-for="item in groupCList[10].ans" :key="item.id" :label="item.id">{{item.text}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 27 cC12 -->
        <div class="form__question">
          <p class="form__question--no">27.</p>
          <el-form-item class="form__question--body" :label="groupCList[11].que" prop="cC12">
            <el-radio-group v-model="ruleForm.cC12">
              <el-radio v-for="item in groupCList[11].ans" :key="item.id" :label="item.id">{{item.text}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 28 cC13 -->
        <div class="form__question">
          <p class="form__question--no">28.</p>
          <el-form-item class="form__question--body" :label="groupCList[12].que" prop="cC13">
            <el-radio-group v-model="ruleForm.cC13">
              <el-radio v-for="item in groupCList[12].ans" :key="item.id" :label="item.id">{{item.text}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
      </el-form>
    </div>

    <!-- ============================C2.數據價值============================ -->
    <div class="digitalMaturity__showHeader">
      <strong>{{getHeader($store.state.explanationNote.groupCNote6).title}}</strong>
      <p>{{getHeader($store.state.explanationNote.groupCNote6).text}}</p>
    </div>
    <div class="digitalMaturity__form">
      <el-form class="form" ref="formCC2" :model="ruleForm" :rules="rules" label-position="top">
        <!-- 29 cC21 -->
        <div class="form__question">
          <p class="form__question--no">29.</p>
          <el-form-item class="form__question--body" :label="groupCList[13].que" prop="cC21">
            <div class="introduceText">{{groupCList[13].note}}</div>
            <el-radio-group v-model="ruleForm.cC21">
              <el-radio v-for="item in groupCList[13].ans" :key="item.id" :label="item.id">{{item.text}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 30 cC22 -->
        <div class="form__question">
          <p class="form__question--no">30.</p>
          <el-form-item class="form__question--body" :label="groupCList[14].que" prop="cC22">
            <div class="introduceText">{{groupCList[14].note}}</div>
            <el-radio-group v-model="ruleForm.cC22">
              <el-radio v-for="item in groupCList[14].ans" :key="item.id" :label="item.id">{{item.text}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 31 cC23 -->
        <div class="form__question">
          <p class="form__question--no">31.</p>
          <el-form-item class="form__question--body" :label="groupCList[15].que" prop="cC23">
            <el-radio-group v-model="ruleForm.cC23">
              <el-radio v-for="item in groupCList[15].ans" :key="item.id" :label="item.id">{{item.text}}</el-radio>
            </el-radio-group>
          </el-form-item>
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
                { id: 123, title: "專賣部門" },
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
        cA11: 0,
        cA12: 0,
        cA13: 0,
        cA21: 0,
        cA22: 0,
        cA23: 0,
        cB11: 0,
        cB12: 0,
        cB21: 0,
        cB22: 0,
        cC11: 0,
        cC12: 0,
        cC13: 0,
        cC21: 0,
        cC22: 0,
        cC23: 0,
      },
      rules: {
        cA11: [{ required: true, message: "請選擇", trigger: "change" }],
        cA12: [{ required: true, message: "請選擇", trigger: "change" }],
        cA13: [{ required: true, message: "請選擇", trigger: "change" }],
        cA21: [{ required: true, message: "請選擇", trigger: "change" }],
        cA22: [{ required: true, message: "請選擇", trigger: "change" }],
        cA23: [{ required: true, message: "請選擇", trigger: "change" }],
        cB11: [{ required: true, message: "請選擇", trigger: "change" }],
        cB12: [{ required: true, message: "請選擇", trigger: "change" }],
        cB21: [{ required: true, message: "請選擇", trigger: "change" }],
        cB22: [{ required: true, message: "請選擇", trigger: "change" }],
        cC11: [{ required: true, message: "請選擇", trigger: "change" }],
        cC12: [{ required: true, message: "請選擇", trigger: "change" }],
        cC13: [{ required: true, message: "請選擇", trigger: "change" }],
        cC21: [{ required: true, message: "請選擇", trigger: "change" }],
        cC22: [{ required: true, message: "請選擇", trigger: "change" }],
        cC23: [{ required: true, message: "請選擇", trigger: "change" }],
      },
    };
  },
  computed: {
    getHeader() {
      return (str) => {
        let cutStr = str?.split("：");
        return {
          title: cutStr ? cutStr[0] : "",
          text: cutStr ? cutStr[1] : "",
        };
      };
    },
  },
  methods: {
    getList() {
      this.$axios
        .get("http://tdx.yummydesign.com.tw/sys/api/QuestionGroupC/Load")
        .then((res) => {
          this.groupCList = res.data.data;
        });
    },
    enter() {
      let list = [];
      list.push(
        this.checkForm("formCA1"),
        this.checkForm("formCA2"),
        this.checkForm("formCB1"),
        this.checkForm("formCB2"),
        this.checkForm("formCC1"),
        this.checkForm("formCC2")
      );
      Promise.all(list)
        .then(() => {
          let chartObj = Object.assign(
            this.$store.state.chartInfo,
            this.ruleForm
          );
          this.$store.dispatch("setChartInfo", chartObj);

          let newObj = Object.assign(this.$store.state.formInfo, this.ruleForm);
          this.$store.dispatch("setFormInfo", newObj);
          this.$router.push({ name: "digitalPerformancePage" });
        })
        .catch(() => {
          this.$nextTick(() => {
            let isError = document.getElementsByClassName("is-error");
            isError.forEach((el) => {
              el.classList.remove("bg-error");
              el.classList.add("bg-error");
              el.childNodes[1].childNodes[0].classList.remove("focusRing");
              el.childNodes[1].childNodes[0].classList.add("focusRing");
            });
            isError[0].scrollIntoView({
              block: "center",
              behavior: "smooth",
            });
          });
        });
    },
    checkForm(formName) {
      return new Promise((resolve, reject) => {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            resolve();
          } else reject();
        });
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
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 16px;

    strong {
      margin: 32px 0px 0px;
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