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

        <!-- 7 q7 -->
        <div class="form__question">
          <p class="form__question--no">7.</p>
          <el-form-item class="form__question--body" label="請問，貴公司投入數位轉型至今大約多久？" prop="q7">
            <el-radio-group v-model="ruleForm.q7" @change="getQ7">
              <el-radio label="1-還在評估中">還在評估中</el-radio>
              <el-radio label="2-剛開始，還未滿1年">剛開始，還未滿1年</el-radio>
              <el-radio label="3-已開始，1~3年">已開始，1~3年</el-radio>
              <el-radio label="4-超過3年">超過3年</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 8 q8 -->
        <div class="form__question" v-if="!!ruleForm.q7 && ruleForm.q7 !== '1-還在評估中'">
          <p class="form__question--no">8.</p>
          <el-form-item class="form__question--body" label="請問，貴公司在去(2020)年投入數位化/數位轉型的經費為何？ (包括人事、系統開發或委外等相關費用)" prop="q8">
            <el-radio-group v-model="ruleForm.q8" @change="getQ8">
              <el-radio label="1-沒有投入經費">沒有投入經費</el-radio>
              <el-radio label="2-不到50萬">不到50萬</el-radio>
              <el-radio label="3-50萬以上，不到100萬">50萬以上，不到100萬</el-radio>
              <el-radio label="4-100萬以上，不到300萬">100萬以上，不到300萬</el-radio>
              <el-radio label="5-300萬以上，不到500萬">300萬以上，不到500萬</el-radio>
              <el-radio label="6-500萬以上，不到1,000萬">500萬以上，不到1,000萬</el-radio>
              <el-radio label="7-1,000萬以上">1,000萬以上</el-radio>
              <el-radio label="8-不知道/拒答">不知道/拒答</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 9 q9 -->
        <div class="form__question" v-if="!!ruleForm.q8 && ruleForm.q8 !== '1-沒有投入經費'">
          <p class="form__question--no">9.</p>
          <el-form-item class="form__question--body" label="承上題，貴公司在去(2020)年推動數位轉型的經費佔整體營收的比例為何？" prop="q9">
            <el-radio-group v-model="ruleForm.q9">
              <el-radio label="1-不到1%">不到1%</el-radio>
              <el-radio label="2-1%(含)以上，不到3%">1%(含)以上，不到3%</el-radio>
              <el-radio label="3-3%(含)以上，不到5%">3%(含)以上，不到5%</el-radio>
              <el-radio label="4-5%(含)以上，不到10%">5%(含)以上，不到10%</el-radio>
              <el-radio label="5-10%(含)以上">10%(含)以上</el-radio>
              <el-radio label="6-不知道/拒答">不知道/拒答</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 10 q10 -->
        <div class="form__question" v-if="!!ruleForm.q8 && ruleForm.q8 !== '1-沒有投入經費'">
          <p class="form__question--no">10.</p>
          <el-form-item class="form__question--body" label="請問，貴公司預計今(2021)年投入推動數位轉型的預算?(包括人事、系統開發或委外等相關費用)" prop="q10">
            <el-radio-group v-model="ruleForm.q10">
              <el-radio label="1-沒有投入經費">沒有投入經費</el-radio>
              <el-radio label="2-不到50萬">不到50萬</el-radio>
              <el-radio label="3-50萬以上，不到100萬">50萬以上，不到100萬</el-radio>
              <el-radio label="4-100萬以上，不到300萬">100萬以上，不到300萬</el-radio>
              <el-radio label="5-300萬以上，不到500萬">300萬以上，不到500萬</el-radio>
              <el-radio label="6-500萬以上，不到1,000萬">500萬以上，不到1,000萬</el-radio>
              <el-radio label="7-1,000萬以上">1,000萬以上</el-radio>
              <el-radio label="8-不知道/拒答">不知道/拒答</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <div class="digitallnvestment__form--subTitle" v-if="!!ruleForm.q8 && ruleForm.q8 !== '1-沒有投入經費'">
          <strong>{{$store.state.explanationNote.groupBNote3}}</strong>
        </div>
        <!-- 11 q11 -->
        <div class="form__question" v-if="!!ruleForm.q8 && ruleForm.q8 !== '1-沒有投入經費'">
          <p class="form__question--no">11.</p>
          <el-form-item class="form__question--body" label="請問，貴公司2020年實際參與推動數位轉型的專職人員有幾位？" prop="q11">
            <el-radio-group v-model="ruleForm.q11">
              <el-radio label="1-沒有專職人員">沒有專職人員</el-radio>
              <el-radio label="2-1～2人">1～2人</el-radio>
              <el-radio label="3-3～5人">3～5人</el-radio>
              <el-radio label="4-6～10人">6～10人</el-radio>
              <el-radio label="5-11～20人">11～20人</el-radio>
            </el-radio-group>
            <div class="form__question--ansOther" :class="{'active': ruleForm.q11 == '6-20人以上，大約_____人' || !!q11_other}">
              <el-radio label="6-20人以上，大約_____人" v-model="ruleForm.q11" :class="{'is-foces is-checked': !!q11_other}">20人以上，大約_____人</el-radio>
              <el-input v-model="q11_other" type="number" placeholder="填入數字" :disabled="ruleForm.q11 !== '6-20人以上，大約_____人'"></el-input>
            </div>
          </el-form-item>
        </div>

        <!-- 12 q12 -->
        <div class="form__question" v-if="!!ruleForm.q8 && ruleForm.q8 !== '1-沒有投入經費'">
          <p class="form__question--no">12.</p>
          <el-form-item class="form__question--body" label="請問，貴公司目前(2021年)投入多少員工(專職)於數位轉型？" prop="q12">
            <el-radio-group v-model="ruleForm.q12">
              <el-radio label="1-沒有專職人員">沒有專職人員</el-radio>
              <el-radio label="2-1～2人">1～2人</el-radio>
              <el-radio label="3-3～5人">3～5人</el-radio>
              <el-radio label="4-6～10人">6～10人</el-radio>
              <el-radio label="5-11～20人">11～20人</el-radio>
            </el-radio-group>
            <div class="form__question--ansOther" :class="{'active': ruleForm.q12 == '6-20人以上，大約_____人' || !!q12_other}">
              <el-radio label="6-20人以上，大約_____人" v-model="ruleForm.q12" :class="{'is-foces is-checked': !!q12_other}">20人以上，大約_____人</el-radio>
              <el-input v-model="q12_other" type="number" placeholder="填入數字" :disabled="ruleForm.q12 !== '6-20人以上，大約_____人'"></el-input>
            </div>
          </el-form-item>
        </div>

        <!-- 13 q13 -->
        <div class="form__question" v-if="!!ruleForm.q8 && ruleForm.q8 !== '1-沒有投入經費'">
          <p class="form__question--no">13.</p>
          <el-form-item class="form__question--body" label="請問，貴公司目前(2021年)是否有聘請外部顧問或專家，協助推動數位轉型？" prop="q13">
            <el-radio-group v-model="ruleForm.q13">
              <el-radio label="1-沒有，也沒有規劃聘請外部顧問">沒有，也沒有規劃聘請外部顧問</el-radio>
              <el-radio label="2-沒有，但已規劃聘請外部顧問">沒有，但已規劃聘請外部顧問</el-radio>
            </el-radio-group>
            <div class="form__question--ansOther" :class="{'active': ruleForm.q13 == '3-有，大約_____人' || !!q13_other}">
              <el-radio label="3-有，大約_____人" v-model="ruleForm.q13" :class="{'is-foces is-checked': !!q13_other}">有，大約_____人</el-radio>
              <el-input v-model="q13_other" type="number" placeholder="填入數字" :disabled="ruleForm.q13 !== '3-有，大約_____人'"></el-input>
            </div>
          </el-form-item>
        </div>

        <!-- 14 q14 -->
        <div class="form__question" v-if="!!ruleForm.q7">
          <p class="form__question--no">14.</p>
          <el-form-item class="form__question--body" label="請問，貴公司有導入或使用以下哪些數位系統或工具？(複選題)" prop="q14">
            <el-checkbox-group v-model="ruleForm.q14">
              <el-checkbox label="1-企業資源規劃(ERP)">(1)企業資源規劃(ERP)</el-checkbox>
              <el-checkbox label="2-製造執行(MES)系統">(2)製造執行(MES)系統</el-checkbox>
              <el-checkbox label="3-供應鏈管理(SCM)">(3)供應鏈管理(SCM)</el-checkbox>
              <el-checkbox label="4-知識管理(KM)">(4)知識管理(KM)</el-checkbox>
              <el-checkbox label="5-顧客關係管理(CRM)">(5)顧客關係管理(CRM)</el-checkbox>
              <el-checkbox label="6-人力資源或發展管理(HRM&HDM)">(6)人力資源或發展管理(HRM&HDM)</el-checkbox>
              <el-checkbox label="7-財務或會計軟體工具">(7)財務或會計軟體工具</el-checkbox>
              <el-checkbox label="8-銷售站點(POS)系統">(8)銷售站點(POS)系統</el-checkbox>
              <el-checkbox label="9-電腦輔助製造(Computer Aided Manufacturing, CAM)">(9)電腦輔助製造(Computer Aided Manufacturing, CAM)</el-checkbox>
              <el-checkbox label="10-電腦輔助設計(Computer Aided Design, CAD)">(10)電腦輔助設計(Computer Aided Design, CAD)</el-checkbox>
              <el-checkbox label="11-產品資料管理(Product Data Management, PDM)">(11)產品資料管理(Product Data Management, PDM)</el-checkbox>
              <el-checkbox label="12-產品生命週期管理 (Product Life Management, PLM)">(12)產品生命週期管理 (Product Life Management, PLM)</el-checkbox>
              <el-checkbox label="13-生產排程系統(APS)">(13)生產排程系統(APS)</el-checkbox>
              <el-checkbox label="14-品管檢測系統">(14)品管檢測系統</el-checkbox>
              <el-checkbox label="15-軟體開發工具/平台/生命週期管理">(15)軟體開發工具/平台/生命週期管理</el-checkbox>
              <el-checkbox label="16-視訊或遠距會議平台">(16)視訊或遠距會議平台</el-checkbox>
              <el-checkbox label="17-雲端託管網站、系統平台或IT環境">(17)雲端託管網站、系統平台或IT環境</el-checkbox>
              <el-checkbox label="18-雲端主機租用，如AWS、AZURE、GCP">(18)雲端主機租用，如AWS、AZURE、GCP</el-checkbox>
              <el-checkbox label="19-租用實體IDC(Internet Data Center)機房">(19)租用實體IDC(Internet Data Center)機房</el-checkbox>
              <el-checkbox label="20-雲端文書處理、檔案儲存或內容管理應用，如office 365、Google雲端">(20)雲端文書處理、檔案儲存或內容管理應用，如office 365、Google雲端</el-checkbox>
            </el-checkbox-group>
            <div class="form__question--ansOther" :class="{'active': !checkQ14Disable()}">
              <el-checkbox v-model="ruleForm.q14" label="21-其他，請說明___________">(21)其他</el-checkbox>
              <el-input v-model="q14_other" :disabled="checkQ14Disable()"></el-input>
            </div>
          </el-form-item>
        </div>

        <!-- 14.1 q141 -->
        <div class="form__question" v-if="!!ruleForm.q7">
          <p class="form__question--no">14.1.</p>
          <el-form-item class="form__question--body" label="上述提到已經使用的數位系統或工具中，有哪些採用了雲端的版本?(填入代號即可)" prop="q141">
            <el-input type="textarea" :rows="5" v-model="ruleForm.q141">
            </el-input>
          </el-form-item>
        </div>

        <!-- 15 q15 -->
        <div class="form__question" v-if="!!ruleForm.q7">
          <p class="form__question--no">15.</p>
          <el-form-item class="form__question--body" label="請問，貴公司已開始使用以下哪項新興技術/應用？" prop="q15">
            <el-checkbox-group v-model="ruleForm.q15">
              <!-- <el-checkbox label="1-網路/資料安全">網路/資料安全</el-checkbox> -->
              <!-- <el-checkbox label="3-電子商務">電子商務</el-checkbox>
              <el-checkbox label="4-雲端技術">雲端技術</el-checkbox> -->
              <!-- <el-checkbox label="6-社群行銷">社群行銷</el-checkbox> -->
              <!-- <el-checkbox label="7-行動裝置服務">行動裝置服務</el-checkbox> -->
              <el-checkbox label="1-大數據分析(Big data)">大數據分析(Big data)</el-checkbox>
              <el-checkbox label="2-物聯網/機聯網">物聯網/機聯網</el-checkbox>
              <el-checkbox label="3-人工智慧(Artificial Intelligence)">人工智慧(Artificial Intelligence)</el-checkbox>
              <el-checkbox label="4-區塊鏈">區塊鏈</el-checkbox>
              <el-checkbox label="5-邊緣運算">邊緣運算</el-checkbox>
              <el-checkbox label="6-數位雙生(Digital twin)">數位雙生(Digital twin)</el-checkbox>
              <el-checkbox label="7-物聯網/機聯網">物聯網/機聯網</el-checkbox>
              <el-checkbox label="9-5G/6G技術">5G/6G技術</el-checkbox>
              <el-checkbox label="10-機械手臂">機械手臂</el-checkbox>
              <el-checkbox label="11-無人機/無人車">無人機/無人車</el-checkbox>
              <el-checkbox label="12-數位及社群行銷">數位及社群行銷</el-checkbox>
              <el-checkbox label="8-以上皆無">以上皆無</el-checkbox>
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
  head: {
    title: "數位投入 - 台灣產業數位轉型量表TDX",
  },
  components: { PageTitle },
  data() {
    return {
      pageTitleIntroduce: {
        title: "什麼是數位轉型?",
        text: this.$store.state.explanationNote?.groupBNote1,
      },
      ruleForm: {
        q7: "", // b11
        q8: "", // b12
        q9: "", // b13
        q10: "", // b14
        q11: "", // b21
        q12: "", // b22
        q13: "", // b23
        q14: [], //b24
        q141: "",
        q15: [], // b25
      },
      q11_other: "",
      q12_other: "",
      q13_other: "",
      q14_other: "",

      rules: {
        q7: [{ required: true, message: "請選擇", trigger: "change" }],
        q8: [{ required: true, message: "請選擇", trigger: "change" }],
        q9: [{ required: true, message: "請選擇", trigger: "change" }],
        q10: [{ required: true, message: "請選擇", trigger: "change" }],
        q11: [{ required: true, message: "請選擇", trigger: "change" }],
        q12: [{ required: true, message: "請選擇", trigger: "change" }],
        q13: [{ required: true, message: "請選擇", trigger: "change" }],
        q14: [{ required: true, message: "請選擇", trigger: "change" }],
        q141: [{ required: true, message: "請輸入", trigger: "blur" }],
        q15: [{ required: true, message: "請選擇", trigger: "change" }],
      },
    };
  },
  computed: {
    checkQ14Disable() {
      return () => {
        if (this.ruleForm.q14.length > 0) {
          let getOtherAns = this.ruleForm.q14.filter(
            (txt) => txt == "21-其他，請說明___________"
          );
          if (getOtherAns == 0) {
            this.q14_other = "";
          }
          return getOtherAns?.length > 0 ? false : true;
        } else {
          return true;
        }
      };
    },
  },
  methods: {
    getQ7(ans) {
      if (ans == "1-還在評估中") {
        this.ruleForm.q8 = "";
        this.ruleForm.q9 = "";
        this.ruleForm.q10 = "";
        this.ruleForm.q11 = "";
        this.ruleForm.q12 = "";
        this.ruleForm.q13 = "";
      }
    },
    getQ8(ans) {
      if (ans == "1-沒有投入經費") {
        this.ruleForm.q9 = "";
        this.ruleForm.q10 = "";
        this.ruleForm.q11 = "";
        this.ruleForm.q12 = "";
        this.ruleForm.q13 = "";
      }
    },
    enter() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          if (this.ruleForm.q11 == "20人以上，大約_____人") {
            this.ruleForm.q11 = this.q11_other;
          }
          if (this.ruleForm.q12 == "20人以上，大約_____人") {
            this.ruleForm.q12 = this.q12_other;
          }
          if (this.ruleForm.q13 == "有，大約_____人") {
            this.ruleForm.q13 = this.q13_other;
          }

          const chartObj = {
            q7: Number(this.ruleForm.q7.split("-")[0]),
            q8: Number(this.ruleForm.q8.split("-")[0]) || "",
            q9: Number(this.ruleForm.q9.split("-")[0]) || "",
            q10: Number(this.ruleForm.q10.split("-")[0]) || "",
            q11: Number(this.ruleForm.q11.split("-")[0]) || "",
            q12: Number(this.ruleForm.q12.split("-")[0]) || "",
            q13: Number(this.ruleForm.q13.split("-")[0]) || "",
            q14: this.ruleForm.q14.map((it) => Number(it.split("-")[0])),
            q15: this.ruleForm.q15.map((it) => Number(it.split("-")[0])),
          };
          this.$store.dispatch("setChartInfo", chartObj);

          const dbObj = {
            q7: this.ruleForm.q7.split("-")[1],
            q8: this.ruleForm.q8.split("-")[1] || "",
            q9: this.ruleForm.q9.split("-")[1] || "",
            q10: this.ruleForm.q10.split("-")[1] || "",
            q11: this.ruleForm.q11.split("-")[1] || "",
            q12: this.ruleForm.q12.split("-")[1] || "",
            q13: this.ruleForm.q13.split("-")[1] || "",
            q14: this.ruleForm.q14.map((it) => it.split("-")[1]).join(","),
            q141: this.ruleForm.q141,
            q15: this.ruleForm.q15.map((it) => it.split("-")[1]).join(","),
          };

          let newObj = Object.assign(this.$store.state.formInfo, dbObj);
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