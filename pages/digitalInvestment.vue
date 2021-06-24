<template>
  <div class="digitallnvestment">
    <div class="digitallnvestment__header">
      <PageTitle title="數位投入" :pageTitleIntroduce="pageTitleIntroduce" />
    </div>

    <div class="digitallnvestment__form">
      <el-form class="form" ref="form" :model="ruleForm" :rules="rules" label-position="top">
        <div class="digitallnvestment__form--subTitle">
          <strong>{{$store.state.explanationNote.groupBNote2}}</strong>
        </div>

        <!-- 7 b11 -->
        <div class="form__question">
          <p class="form__question--no">7.</p>
          <el-form-item class="form__question--body" label="請問，貴公司投入數位轉型至今大約多久？" prop="b11">
            <el-radio-group v-model="ruleForm.b11" @change="getB11">
              <el-radio :label="1">還在評估中</el-radio>
              <el-radio :label="2">剛開始，還未滿1年</el-radio>
              <el-radio :label="3">已開始，1~3年</el-radio>
              <el-radio :label="4">超過3年</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 8 b12 -->
        <div class="form__question" v-if="!!ruleForm.b11 && ruleForm.b11 !== 1">
          <p class="form__question--no">8.</p>
          <el-form-item class="form__question--body" label="請問，貴公司在去(2020)年推動數位轉型的投資經費? (包括人事、系統開發或委外等相關費用)" prop="b11">
            <el-radio-group v-model="ruleForm.b12">
              <el-radio :label="1">沒有投入經費</el-radio>
              <el-radio :label="2">不到100萬</el-radio>
              <el-radio :label="3">100萬(含)以上，不到500萬</el-radio>
              <el-radio :label="4">500萬(含)以上，不到1,000萬</el-radio>
              <el-radio :label="5">1,000萬(含)以上，不到5,000萬</el-radio>
              <el-radio :label="6">5,000萬(含)以上</el-radio>
              <el-radio :label="7">不知道/拒答</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 9 b13 -->
        <div class="form__question" v-if="!!ruleForm.b12 && ruleForm.b12 !== 1">
          <p class="form__question--no">9.</p>
          <el-form-item class="form__question--body" label="承上題，貴公司在去(2020)年推動數位轉型的經費佔整體營收的比例為何？" prop="b13">
            <el-radio-group v-model="ruleForm.b13">
              <el-radio :label="1">不到1%</el-radio>
              <el-radio :label="2">1%(含)以上，不到3%</el-radio>
              <el-radio :label="3">3%(含)以上，不到5%</el-radio>
              <el-radio :label="4">5%(含)以上，不到10%</el-radio>
              <el-radio :label="5">10%(含)以上</el-radio>
              <el-radio :label="6">不知道/拒答</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 10 b14 -->
        <div class="form__question" v-if="!!ruleForm.b12 && ruleForm.b12 !== 1">
          <p class="form__question--no">10.</p>
          <el-form-item class="form__question--body" label="請問，貴公司預計今(2021)年投入推動數位轉型的預算?(包括人事、系統開發或委外等相關費用)" prop="b14">
            <el-radio-group v-model="ruleForm.b14">
              <el-radio :label="1">沒有規劃</el-radio>
              <el-radio :label="2">不到100萬</el-radio>
              <el-radio :label="3">100萬(含)以上，不到500萬</el-radio>
              <el-radio :label="4">500萬(含)以上，不到1,000萬</el-radio>
              <el-radio :label="5">1,000萬(含)以上，不到5,000萬</el-radio>
              <el-radio :label="6">5,000萬(含)以上</el-radio>
              <el-radio :label="7">不知道/拒答</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <div class="digitallnvestment__form--subTitle" v-if="!!ruleForm.b12 && ruleForm.b12 !== 1">
          <strong>{{$store.state.explanationNote.groupBNote3}}</strong>
        </div>
        <!-- 11 b15 -->
        <div class="form__question" v-if="!!ruleForm.b12 && ruleForm.b12 !== 1">
          <p class="form__question--no">11.</p>
          <el-form-item class="form__question--body" label="請問，貴公司2020年實際參與推動數位轉型的專職人員有幾位？" prop="b15">
            <el-radio-group v-model="ruleForm.b15">
              <el-radio :label="1">沒有專職人員</el-radio>
              <el-radio :label="2">1～2人</el-radio>
              <el-radio :label="3">3～5人</el-radio>
              <el-radio :label="4">6～10人</el-radio>
              <el-radio :label="5">11～20人</el-radio>
            </el-radio-group>
            <div class="form__question--ansOther" :class="{'active': ruleForm.b15 == 6 || !!b15_other}">
              <el-radio :label="6" v-model="ruleForm.b15" :class="{'is-foces is-checked': !!b15_other}">20人以上，大約_____人</el-radio>
              <el-input v-model="b15_other" type="number" placeholder="填入數字" :disabled="ruleForm.b15 !== 6"></el-input>
            </div>
          </el-form-item>
        </div>

        <!-- 12 b16 -->
        <div class="form__question" v-if="!!ruleForm.b12 && ruleForm.b12 !== 1">
          <p class="form__question--no">12.</p>
          <el-form-item class="form__question--body" label="請問，貴公司目前(2021年)投入多少員工(專職)於數位轉型？" prop="b16">
            <el-radio-group v-model="ruleForm.b16">
              <el-radio :label="1">沒有專職人員</el-radio>
              <el-radio :label="2">1～2人</el-radio>
              <el-radio :label="3">3～5人</el-radio>
              <el-radio :label="4">6～10人</el-radio>
              <el-radio :label="5">11～20人</el-radio>
            </el-radio-group>
            <div class="form__question--ansOther" :class="{'active': ruleForm.b16 == 6 || !!b16_other}">
              <el-radio :label="6" v-model="ruleForm.b16" :class="{'is-foces is-checked': !!b16_other}">20人以上，大約_____人</el-radio>
              <el-input v-model="b16_other" type="number" placeholder="填入數字" :disabled="ruleForm.b16 !== 6"></el-input>
            </div>
          </el-form-item>
        </div>

        <!-- 13 b17 -->
        <div class="form__question" v-if="!!ruleForm.b12 && ruleForm.b12 !== 1">
          <p class="form__question--no">13.</p>
          <el-form-item class="form__question--body" label="請問，貴公司目前(2021年)是否有聘請外部顧問或專家，協助推動數位轉型？" prop="b17">
            <el-radio-group v-model="ruleForm.b17">
              <el-radio :label="1">沒有，也沒有規劃聘請外部顧問</el-radio>
              <el-radio :label="2">沒有，但已規劃聘請外部顧問</el-radio>
            </el-radio-group>
            <div class="form__question--ansOther" :class="{'active': ruleForm.b17 == 3 || !!b17_other}">
              <el-radio :label="3" v-model="ruleForm.b17" :class="{'is-foces is-checked': !!b17_other}">有，大約_____人</el-radio>
              <el-input v-model="b17_other" type="number" placeholder="填入數字" :disabled="ruleForm.b17 !== 3"></el-input>
            </div>
          </el-form-item>
        </div>

        <!-- 14 b18 -->
        <div class="form__question" v-if="!!ruleForm.b11">
          <p class="form__question--no">14.</p>
          <el-form-item class="form__question--body" label="請問，貴公司目前已經投入/導入哪些數位或資訊系統？(複選題)" prop="b18">
            <el-checkbox-group v-model="ruleForm.b18">
              <el-checkbox label="MES(Manufacturing Execution System，製造執行系統)"></el-checkbox>
              <el-checkbox label="CAD(Computer Aided Design，電腦輔助設計)"></el-checkbox>
              <el-checkbox label="CAM(Computer Aided Manufacturing，電腦輔助製造)"></el-checkbox>
              <el-checkbox label="CAE(Computer Aided Engineering，電腦輔助工程)"></el-checkbox>
              <el-checkbox label="ERP(Enterprise Resource Planning，企業資源管理)"></el-checkbox>
              <el-checkbox label="CRM(Customer Relationship Management，客戶關係管理)"></el-checkbox>
              <el-checkbox label="PDM(Product Data Management，產品資料管理)"></el-checkbox>
              <el-checkbox label="PLM(Product Life Management，產品生命週期管理)"></el-checkbox>
              <el-checkbox label="SCM(Supply Chain Management，供應鏈管理)"></el-checkbox>
              <el-checkbox label="自動品管檢測系統"></el-checkbox>
              <el-checkbox label="以上皆無"></el-checkbox>
            </el-checkbox-group>
            <div class="form__question--ansOther" :class="{'active': !checkB18Disable()}">
              <el-checkbox v-model="ruleForm.b18" label="其他，請說明___________"></el-checkbox>
              <el-input v-model="b18_other" :disabled="checkB18Disable()"></el-input>
            </div>
          </el-form-item>
        </div>

        <!-- 15 b19 -->
        <div class="form__question" v-if="!!ruleForm.b11">
          <p class="form__question--no">15.</p>
          <el-form-item class="form__question--body" label="請問，對於下列各項創新興數位科技應用趨勢，貴公司是否已有投入資源或人力？" prop="b19">
            <el-checkbox-group v-model="ruleForm.b19">
              <el-checkbox label="數位雙生(Digital twin)"></el-checkbox>
              <el-checkbox label="人工智慧(Artificial Intelligence)"></el-checkbox>
              <el-checkbox label="物聯網/機聯網"></el-checkbox>
              <el-checkbox label="電子商務"></el-checkbox>
              <el-checkbox label="行動裝置服務"></el-checkbox>
              <el-checkbox label="網路/資料安全"></el-checkbox>
              <el-checkbox label="大數據分析(Big data)"></el-checkbox>
              <el-checkbox label="雲端技術"></el-checkbox>
              <el-checkbox label="社群行銷"></el-checkbox>
              <el-checkbox label="區塊鏈"></el-checkbox>
              <el-checkbox label="邊緣運算"></el-checkbox>
              <el-checkbox label="以上皆無"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
      </el-form>

      <!-- next step -->
      <div class="digitallnvestment__form--btn">
        <button class="goNext" @click="enter()">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";

export default {
  components: { PageTitle },
  data() {
    return {
      pageTitleIntroduce: {
        title: "什麼是數位轉型?",
        text: this.$store.state.explanationNote?.groupBNote1,
      },
      ruleForm: {
        b11: "",
        b12: "",
        b13: "",
        b14: "",
        b15: "",
        b16: "",
        b17: "",
        b18: [],
        b19: [],
      },
      b15_other: "",
      b16_other: "",
      b17_other: "",
      b18_other: "",
      rules: {
        b11: [{ required: true, message: "請選擇", trigger: "change" }],
        b12: [{ required: true, message: "請選擇", trigger: "change" }],
        b13: [{ required: true, message: "請選擇", trigger: "change" }],
        b14: [{ required: true, message: "請選擇", trigger: "change" }],
        b15: [{ required: true, message: "請選擇", trigger: "change" }],
        b16: [{ required: true, message: "請選擇", trigger: "change" }],
        b17: [{ required: true, message: "請選擇", trigger: "change" }],
        b18: [{ required: true, message: "請選擇", trigger: "change" }],
        b19: [{ required: true, message: "請選擇", trigger: "change" }],
      },
    };
  },
  computed: {
    checkB18Disable() {
      return () => {
        if (this.ruleForm.b18.length > 0) {
          let getOtherAns = this.ruleForm.b18.filter(
            (txt) => txt == "其他，請說明___________"
          );
          if (getOtherAns == 0) {
            this.b18_other = "";
          }
          return getOtherAns?.length > 0 ? false : true;
        } else {
          return true;
        }
      };
    },
  },
  methods: {
    getB11(ans) {
      if (ans == 1) {
        this.ruleForm.b12 = "";
        this.ruleForm.b13 = "";
        this.ruleForm.b14 = "";
        this.ruleForm.b15 = "";
        this.ruleForm.b16 = "";
        this.ruleForm.b17 = "";
      }
    },
    enter() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          if (this.ruleForm.b15 == "20人以上，大約_____人") {
            this.ruleForm.b15 = this.b15_other;
          }
          if (this.ruleForm.b16 == "20人以上，大約_____人") {
            this.ruleForm.b16 = this.b16_other;
          }
          if (this.ruleForm.b17 == "有，大約_____人") {
            this.ruleForm.b17 = this.b17_other;
          }
          if (!!this.b18_other) {
            this.ruleForm.b18.push(this.b18_other);
          }

          let newObj = Object.assign(this.$store.state.formInfo, this.ruleForm);
          this.$store.dispatch("setFormInfo", newObj);
          this.$router.push({ name: "digitalMaturity" });
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
.digitallnvestment {
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