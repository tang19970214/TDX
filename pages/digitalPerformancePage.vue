<template>
  <div class="digitalPerformancePage">
    <div class="digitalPerformancePage__header">
      <PageTitle title="數位成效" />
    </div>

    <div class="digitalPerformancePage__form">
      <el-form class="form" ref="form" :model="ruleForm" :rules="rules" label-position="top">
        <!-- 32 q32 -->
        <div class="form__question">
          <p class="form__question--no">32.</p>
          <el-form-item class="form__question--body" label="請問，貴公司推動數位轉型的主要目標為何？(請選最重要的1-3個，複選)" prop="q32">
            <div class="introduceText">請選擇 1 ~ 3 個選項</div>
            <el-checkbox-group v-model="ruleForm.q32" :max="3">
              <el-checkbox label="1-提升生產效率">提升生產效率</el-checkbox>
              <el-checkbox label="2-提升品質/降低不良率">提升品質/降低不良率</el-checkbox>
              <el-checkbox label="3-降低庫存">降低庫存</el-checkbox>
              <el-checkbox label="4-縮短交期">縮短交期</el-checkbox>
              <el-checkbox label="5-降低人力需求">降低人力需求</el-checkbox>
              <el-checkbox label="6-強化資訊安全">強化資訊安全</el-checkbox>
              <el-checkbox label="7-交期準時">交期準時</el-checkbox>
              <el-checkbox label="8-提升產品毛利">提升產品毛利</el-checkbox>
              <el-checkbox label="9-目前尚未設定目標">目前尚未設定目標</el-checkbox>
              <el-checkbox label="10-提升設備稼動率/可動率">提升設備稼動率/可動率</el-checkbox>
              <el-checkbox label="11-更瞭解客戶的行為模式與需求">更瞭解客戶的行為模式與需求</el-checkbox>
              <el-checkbox label="12-改善齊料率">改善齊料率</el-checkbox>
              <el-checkbox label="13-產品或服務創新">產品或服務創新</el-checkbox>
              <el-checkbox label="14-強化銷售能力">強化銷售能力</el-checkbox>
              <el-checkbox label="15-縮短研發新產品時間">縮短研發新產品時間</el-checkbox>
            </el-checkbox-group>
            <div class="form__question--ansOther" :class="{'active': !checkQ32Disable()}">
              <el-checkbox v-model="ruleForm.q32" label="16-其他">其他</el-checkbox>
              <el-input v-model="q32_other" :disabled="checkQ32Disable()"></el-input>
            </div>
          </el-form-item>
        </div>

        <!-- 33 q33 -->
        <div class="form__question">
          <p class="form__question--no">33.</p>
          <el-form-item class="form__question--body" label="請問，數位轉型對公司整體營運發展是否有幫助？" prop="q33">
            <el-radio-group v-model="ruleForm.q33" @change="getQ33">
              <el-radio label="1-有，而且效益明顯">有，而且效益明顯</el-radio>
              <el-radio label="2-有，但是效益普通">有，但是效益普通</el-radio>
              <el-radio label="3-目前仍沒有明確的效益">目前仍沒有明確的效益</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 34 q34 -->
        <div class="form__question" v-if="!!ruleForm.q33 && ruleForm.q33 !== '3-目前仍沒有明確的效益'">
          <p class="form__question--no">34.</p>
          <el-form-item class="form__question--body" label="請問，貴公司員工薪資過去一年(2020年)薪資成長率？" prop="q34">
            <el-radio-group v-model="ruleForm.q34">
              <el-radio label="1-不到1%">不到1%</el-radio>
              <el-radio label="2-1%(含)以上，不到3%">1%(含)以上，不到3%</el-radio>
              <el-radio label="3-3%(含)以上，不到5%">3%(含)以上，不到5%</el-radio>
              <el-radio label="4-5%(含)以上，不到10%">5%(含)以上，不到10%</el-radio>
              <el-radio label="5-10%(含)以上">10%(含)以上</el-radio>
              <el-radio label="6-不知道/拒答">不知道/拒答</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 35 q35 -->
        <div class="form__question" v-if="!!ruleForm.q33 && ruleForm.q33 !== '3-目前仍沒有明確的效益'">
          <p class="form__question--no">35.</p>
          <el-form-item class="form__question--body" label="請問，貴公司過去一年(2020年)海外營業比重成長比例？" prop="q35">
            <el-radio-group v-model="ruleForm.q35">
              <el-radio label="1-沒有或不到5%">沒有或不到5%</el-radio>
              <el-radio label="2-5%(含)以上，不到10%">5%(含)以上，不到10%</el-radio>
              <el-radio label="3-10%(含)以上，不到20%">10%(含)以上，不到20%</el-radio>
              <el-radio label="4-20%(含)以上，不到30%">20%(含)以上，不到30%</el-radio>
              <el-radio label="5-30%(含)以">30%(含)以上</el-radio>
              <el-radio label="6-不知道/拒答">不知道/拒答</el-radio>
              <el-radio label="7-沒有海外市場">沒有海外市場</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 36 q36 -->
        <div class="form__question" v-if="!!ruleForm.q33 && ruleForm.q33 !== '3-目前仍沒有明確的效益'">
          <p class="form__question--no">36.</p>
          <el-form-item class="form__question--body" label="請問，貴公司在投入數位轉型之後到2020年底，實際改善的KPI為何？(複選)" prop="q36">
            <el-checkbox-group v-model="ruleForm.q36">
              <el-checkbox label="1-提升生產效率">提升生產效率</el-checkbox>
              <el-checkbox label="2-提升品質/降低不良率">提升品質/降低不良率</el-checkbox>
              <el-checkbox label="3-降低人力需求">降低人力需求</el-checkbox>
              <el-checkbox label="4-縮短交期">縮短交期</el-checkbox>
              <el-checkbox label="5-降低庫存">降低庫存</el-checkbox>
              <el-checkbox label="6-強化資訊安全">強化資訊安全</el-checkbox>
              <el-checkbox label="7-交期準時">交期準時</el-checkbox>
              <el-checkbox label="8-提升設備稼動率/可動率">提升設備稼動率/可動率</el-checkbox>
              <el-checkbox label="9-提升產品毛利">提升產品毛利</el-checkbox>
              <el-checkbox label="10-改善齊料率">改善齊料率</el-checkbox>
              <el-checkbox label="11-強化銷售能力">強化銷售能力</el-checkbox>
              <el-checkbox label="12-更瞭解客戶的行為模式與需求">更瞭解客戶的行為模式與需求</el-checkbox>
              <el-checkbox label="13-產品或服務創新">產品或服務創新</el-checkbox>
              <el-checkbox label="14-尚未實際產生效益">尚未實際產生效益</el-checkbox>
              <el-checkbox label="15-縮短研發新產品時間">縮短研發新產品時間</el-checkbox>
            </el-checkbox-group>
            <div class="form__question--ansOther" :class="{'active': !checkQ36Disable()}">
              <el-checkbox v-model="ruleForm.q36" label="16-其他">其他</el-checkbox>
              <el-input v-model="q36_other" :disabled="checkQ36Disable()"></el-input>
            </div>
          </el-form-item>
        </div>

        <!-- 37 q37 -->
        <div class="form__question" v-if="!!ruleForm.q33 && ruleForm.q33 !== '3-目前仍沒有明確的效益'">
          <p class="form__question--no">37.</p>
          <el-form-item class="form__question--body" label="請問貴公司在開始推動數位轉型之後到2020年底，因為數位轉型所帶來的主要成效指標改善情形？ - (1)營收成長比例" prop="q37">
            <el-radio-group v-model="ruleForm.q37">
              <el-radio label="1-沒有或不到5%">沒有或不到5%</el-radio>
              <el-radio label="2-5%(含)以上，不到10%">5%(含)以上，不到10%</el-radio>
              <el-radio label="3-10%(含)以上，不到20%">10%(含)以上，不到20%</el-radio>
              <el-radio label="4-20%(含)以上，不到30%">20%(含)以上，不到30%</el-radio>
              <el-radio label="5-30%(含)以上">30%(含)以上</el-radio>
              <el-radio label="6-不知道/拒答">不知道/拒答</el-radio>
              <el-radio label="7-沒有海外市場">沒有海外市場</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 38 q38 -->
        <div class="form__question" v-if="!!ruleForm.q33 && ruleForm.q33 !== '3-目前仍沒有明確的效益'">
          <p class="form__question--no">38.</p>
          <el-form-item class="form__question--body" label="請問貴公司在開始推動數位轉型之後到2020年底，因為數位轉型所帶來的主要成效指標改善情形？ - (2)營運成本降低比例" prop="q38">
            <el-radio-group v-model="ruleForm.q38">
              <el-radio label="1-沒有或不到5%">沒有或不到5%</el-radio>
              <el-radio label="2-5%(含)以上，不到10%">5%(含)以上，不到10%</el-radio>
              <el-radio label="3-10%(含)以上，不到20%">10%(含)以上，不到20%</el-radio>
              <el-radio label="4-20%(含)以上，不到30%">20%(含)以上，不到30%</el-radio>
              <el-radio label="5-30%(含)以上">30%(含)以上</el-radio>
              <el-radio label="6-不知道/拒答">不知道/拒答</el-radio>
              <el-radio label="7-沒有海外市場">沒有海外市場</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 39 q39 -->
        <div class="form__question" v-if="!!ruleForm.q33 && ruleForm.q33 !== '3-目前仍沒有明確的效益'">
          <p class="form__question--no">39.</p>
          <el-form-item class="form__question--body" label="之後到2020年底，因為數位轉型所帶來的主要成效指標改善情形？ - (3)資產利用率提升比例" prop="q39">
            <el-radio-group v-model="ruleForm.q39">
              <el-radio label="1-沒有或不到5%">沒有或不到5%</el-radio>
              <el-radio label="2-5%(含)以上，不到10%">5%(含)以上，不到10%</el-radio>
              <el-radio label="3-10%(含)以上，不到20%">10%(含)以上，不到20%</el-radio>
              <el-radio label="4-20%(含)以上，不到30%">20%(含)以上，不到30%</el-radio>
              <el-radio label="5-30%(含)以上">30%(含)以上</el-radio>
              <el-radio label="6-不知道/拒答">不知道/拒答</el-radio>
              <el-radio label="7-沒有海外市場">沒有海外市場</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
      </el-form>

      <!-- next step -->
      <div class="digitalPerformancePage__form--btn">
        <button class="goNext" @click="finish()">完成</button>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";

export default {
  head: {
    title: "數位成效 - 台灣產業數位轉型量表TDX",
  },
  components: { PageTitle },
  data() {
    return {
      pageTitleIntroduce: {
        title: "什麼是數位轉型?",
        text: this.$store.state.explanationNote?.groupBNote1,
      },
      ruleForm: {
        q32: [], // d1
        q33: "", // d2
        q34: "", // d3
        q35: "", // d4
        q36: [], // d5
        q37: "", // d6
        q38: "", // d7
        q39: "", // d8
      },
      q32_other: "",
      q36_other: "",
      rules: {
        q32: [{ required: true, message: "請選擇", trigger: "change" }],
        q33: [{ required: true, message: "請選擇", trigger: "change" }],
        q34: [{ required: true, message: "請選擇", trigger: "change" }],
        q35: [{ required: true, message: "請選擇", trigger: "change" }],
        q36: [{ required: true, message: "請選擇", trigger: "change" }],
        q37: [{ required: true, message: "請選擇", trigger: "change" }],
        q38: [{ required: true, message: "請選擇", trigger: "change" }],
        q39: [{ required: true, message: "請選擇", trigger: "change" }],
      },
    };
  },
  computed: {
    checkQ32Disable() {
      return () => {
        if (this.ruleForm.q32.length > 0) {
          let getOtherAns = this.ruleForm.q32.filter((txt) => txt == "16-其他");
          if (getOtherAns == 0) {
            this.q32_other = "";
          }
          return getOtherAns?.length > 0 ? false : true;
        } else {
          return true;
        }
      };
    },
    checkQ36Disable() {
      return () => {
        if (this.ruleForm.q36.length > 0) {
          let getOtherAns = this.ruleForm.q36.filter((txt) => txt == "16-其他");
          if (getOtherAns == 0) {
            this.q36_other = "";
          }
          return getOtherAns?.length > 0 ? false : true;
        } else {
          return true;
        }
      };
    },
  },
  methods: {
    getQ33(ans) {
      if (ans == "3-目前仍沒有明確的效益") {
        this.ruleForm.q34 = "";
        this.ruleForm.q35 = "";
        this.ruleForm.q36 = [];
        this.ruleForm.q37 = "";
        this.ruleForm.q38 = "";
        this.ruleForm.q39 = "";
      }
    },
    finish() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          /* 篩出兩種格式存vuex及資料庫 */
          const chartObj = {
            q32: this.ruleForm.q32.map((it) => Number(it.split("-")[0])),
            q33: Number(this.ruleForm.q33.split("-")[0]) || "",
            q34: Number(this.ruleForm.q34.split("-")[0]) || "",
            q35: Number(this.ruleForm.q35.split("-")[0]) || "",
            q36: this.ruleForm.q36.map((it) => Number(it.split("-")[0])) || [],
            q37: Number(this.ruleForm.q37.split("-")[0]) || "",
            q38: Number(this.ruleForm.q38.split("-")[0]) || "",
            q39: Number(this.ruleForm.q39.split("-")[0]) || "",
          };
          let newChartObj = Object.assign(
            this.$store.state.chartInfo,
            chartObj
          );
          this.$store.dispatch("setChartInfo", newChartObj);

          const dbObj = {
            q32: this.ruleForm.q32.map((it) => it.split("-")[1]).join(","),
            q33: this.ruleForm.q33.split("-")[1] || "",
            q34: this.ruleForm.q34.split("-")[1] || "",
            q35: this.ruleForm.q35.split("-")[1] || "",
            q36: this.ruleForm.q36.map((it) => it.split("-")[1]).join(","),
            q37: this.ruleForm.q37.split("-")[1] || "",
            q38: this.ruleForm.q38.split("-")[1] || "",
            q39: this.ruleForm.q39.split("-")[1] || "",
          };
          let newObj = Object.assign(this.$store.state.formInfo, dbObj);
          this.$store.dispatch("setFormInfo", newObj);
          this.$router.push({ name: "contactPage" });
        } else {
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
          return;
        }
      });
    },
  },
};
</script>

<style lang="scss">
.digitalPerformancePage {
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

  &__form {
    width: 100%;
    background: white;
    border-radius: 8px;
    padding: 8px;
    box-sizing: border-box;
    box-shadow: rgb(54 89 140 / 24%) 0px 4px 12px;

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