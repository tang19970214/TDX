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
              <el-radio label="1-還在評估中">還在評估中</el-radio>
              <el-radio label="2-剛開始，還未滿1年">剛開始，還未滿1年</el-radio>
              <el-radio label="3-已開始，1~3年">已開始，1~3年</el-radio>
              <el-radio label="4-超過3年">超過3年</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 8 b12 -->
        <div class="form__question" v-if="!!ruleForm.b11 && ruleForm.b11 !== '1-還在評估中'">
          <p class="form__question--no">8.</p>
          <el-form-item class="form__question--body" label="請問，貴公司在去(2020)年投入數位化/數位轉型的經費為何？ (包括人事、系統開發或委外等相關費用)" prop="b11">
            <el-radio-group v-model="ruleForm.b12" @change="getB12">
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

        <!-- 9 b13 -->
        <div class="form__question" v-if="!!ruleForm.b12 && ruleForm.b12 !== '1-沒有投入經費'">
          <p class="form__question--no">9.</p>
          <el-form-item class="form__question--body" label="承上題，貴公司在去(2020)年推動數位轉型的經費佔整體營收的比例為何？" prop="b13">
            <el-radio-group v-model="ruleForm.b13">
              <el-radio label="1-不到1%">不到1%</el-radio>
              <el-radio label="2-1%(含)以上，不到3%">1%(含)以上，不到3%</el-radio>
              <el-radio label="3-3%(含)以上，不到5%">3%(含)以上，不到5%</el-radio>
              <el-radio label="4-5%(含)以上，不到10%">5%(含)以上，不到10%</el-radio>
              <el-radio label="5-10%(含)以上">10%(含)以上</el-radio>
              <el-radio label="6-不知道/拒答">不知道/拒答</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 10 b14 -->
        <div class="form__question" v-if="!!ruleForm.b12 && ruleForm.b12 !== '1-沒有投入經費'">
          <p class="form__question--no">10.</p>
          <el-form-item class="form__question--body" label="請問，貴公司預計今(2021)年投入推動數位轉型的預算?(包括人事、系統開發或委外等相關費用)" prop="b14">
            <el-radio-group v-model="ruleForm.b14">
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

        <div class="digitallnvestment__form--subTitle" v-if="!!ruleForm.b12 && ruleForm.b12 !== '1-沒有投入經費'">
          <strong>{{$store.state.explanationNote.groupBNote3}}</strong>
        </div>
        <!-- 11 b21 -->
        <div class="form__question" v-if="!!ruleForm.b12 && ruleForm.b12 !== '1-沒有投入經費'">
          <p class="form__question--no">11.</p>
          <el-form-item class="form__question--body" label="請問，貴公司2020年實際參與推動數位轉型的專職人員有幾位？" prop="b21">
            <el-radio-group v-model="ruleForm.b21">
              <el-radio label="1-沒有專職人員">沒有專職人員</el-radio>
              <el-radio label="2-1～2人">1～2人</el-radio>
              <el-radio label="3-3～5人">3～5人</el-radio>
              <el-radio label="4-6～10人">6～10人</el-radio>
              <el-radio label="5-11～20人">11～20人</el-radio>
            </el-radio-group>
            <div class="form__question--ansOther" :class="{'active': ruleForm.b21 == '6-20人以上，大約_____人' || !!b21_other}">
              <el-radio label="6-20人以上，大約_____人" v-model="ruleForm.b21" :class="{'is-foces is-checked': !!b21_other}">20人以上，大約_____人</el-radio>
              <el-input v-model="b21_other" type="number" placeholder="填入數字" :disabled="ruleForm.b21 !== '6-20人以上，大約_____人'"></el-input>
            </div>
          </el-form-item>
        </div>

        <!-- 12 b22 -->
        <div class="form__question" v-if="!!ruleForm.b12 && ruleForm.b12 !== '1-沒有投入經費'">
          <p class="form__question--no">12.</p>
          <el-form-item class="form__question--body" label="請問，貴公司目前(2021年)投入多少員工(專職)於數位轉型？" prop="b22">
            <el-radio-group v-model="ruleForm.b22">
              <el-radio label="1-沒有專職人員">沒有專職人員</el-radio>
              <el-radio label="2-1～2人">1～2人</el-radio>
              <el-radio label="3-3～5人">3～5人</el-radio>
              <el-radio label="4-6～10人">6～10人</el-radio>
              <el-radio label="5-11～20人">11～20人</el-radio>
            </el-radio-group>
            <div class="form__question--ansOther" :class="{'active': ruleForm.b22 == '6-20人以上，大約_____人' || !!b22_other}">
              <el-radio label="6-20人以上，大約_____人" v-model="ruleForm.b22" :class="{'is-foces is-checked': !!b22_other}">20人以上，大約_____人</el-radio>
              <el-input v-model="b22_other" type="number" placeholder="填入數字" :disabled="ruleForm.b22 !== '6-20人以上，大約_____人'"></el-input>
            </div>
          </el-form-item>
        </div>

        <!-- 13 b23 -->
        <div class="form__question" v-if="!!ruleForm.b12 && ruleForm.b12 !== '1-沒有投入經費'">
          <p class="form__question--no">13.</p>
          <el-form-item class="form__question--body" label="請問，貴公司目前(2021年)是否有聘請外部顧問或專家，協助推動數位轉型？" prop="b23">
            <el-radio-group v-model="ruleForm.b23">
              <el-radio label="1-沒有，也沒有規劃聘請外部顧問">沒有，也沒有規劃聘請外部顧問</el-radio>
              <el-radio label="2-沒有，但已規劃聘請外部顧問">沒有，但已規劃聘請外部顧問</el-radio>
            </el-radio-group>
            <div class="form__question--ansOther" :class="{'active': ruleForm.b23 == '3-有，大約_____人' || !!b23_other}">
              <el-radio label="3-有，大約_____人" v-model="ruleForm.b23" :class="{'is-foces is-checked': !!b23_other}">有，大約_____人</el-radio>
              <el-input v-model="b23_other" type="number" placeholder="填入數字" :disabled="ruleForm.b23 !== '3-有，大約_____人'"></el-input>
            </div>
          </el-form-item>
        </div>

        <!-- 14 b24 -->
        <div class="form__question" v-if="!!ruleForm.b11">
          <p class="form__question--no">14.</p>
          <el-form-item class="form__question--body" label="請問，貴公司有導入或使用以下哪些數位系統或工具？(複選題)" prop="b24">
            <el-checkbox-group v-model="ruleForm.b24">
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
            <div class="form__question--ansOther" :class="{'active': !checkB24Disable()}">
              <el-checkbox v-model="ruleForm.b24" label="21-其他，請說明___________">(21)其他</el-checkbox>
              <el-input v-model="b24_other" :disabled="checkB24Disable()"></el-input>
            </div>
          </el-form-item>
        </div>

        <!-- 14.1 q14 -->
        <div class="form__question" v-if="!!ruleForm.b11">
          <p class="form__question--no">14.1.</p>
          <el-form-item class="form__question--body" label="上述提到已經使用的數位系統或工具中，有哪些採用了雲端的版本?(填入代號即可)" prop="q14">
            <el-input type="textarea" :rows="5" v-model="ruleForm.q14">
            </el-input>
          </el-form-item>
        </div>

        <!-- 15 b25 -->
        <div class="form__question" v-if="!!ruleForm.b11">
          <p class="form__question--no">15.</p>
          <el-form-item class="form__question--body" label="請問，貴公司已開始使用以下哪項新興技術/應用？" prop="b25">
            <el-checkbox-group v-model="ruleForm.b25">
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
        b11: "",
        b12: "",
        b13: "",
        b14: "",
        b21: "",
        b22: "",
        b23: "",
        b24: [],
        q14: "",
        b25: [],
      },
      b21_other: "",
      b22_other: "",
      b23_other: "",
      b24_other: "",
      rules: {
        b11: [{ required: true, message: "請選擇", trigger: "change" }],
        b12: [{ required: true, message: "請選擇", trigger: "change" }],
        b13: [{ required: true, message: "請選擇", trigger: "change" }],
        b14: [{ required: true, message: "請選擇", trigger: "change" }],
        b21: [{ required: true, message: "請選擇", trigger: "change" }],
        b22: [{ required: true, message: "請選擇", trigger: "change" }],
        b23: [{ required: true, message: "請選擇", trigger: "change" }],
        b24: [{ required: true, message: "請選擇", trigger: "change" }],
        q14: [{ required: true, message: "請輸入", trigger: "blur" }],
        b25: [{ required: true, message: "請選擇", trigger: "change" }],
      },
    };
  },
  computed: {
    checkB24Disable() {
      return () => {
        if (this.ruleForm.b24.length > 0) {
          let getOtherAns = this.ruleForm.b24.filter(
            (txt) => txt == "21-其他，請說明___________"
          );
          if (getOtherAns == 0) {
            this.b24_other = "";
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
      if (ans == "1-還在評估中") {
        this.ruleForm.b12 = "";
        this.ruleForm.b13 = "";
        this.ruleForm.b14 = "";
        this.ruleForm.b21 = "";
        this.ruleForm.b22 = "";
        this.ruleForm.b23 = "";
      }
    },
    getB12(ans) {
      if (ans == "1-沒有投入經費") {
        this.ruleForm.b13 = "";
        this.ruleForm.b14 = "";
        this.ruleForm.b21 = "";
        this.ruleForm.b22 = "";
        this.ruleForm.b23 = "";
      }
    },
    enter() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          if (this.ruleForm.b21 == "20人以上，大約_____人") {
            this.ruleForm.b21 = this.b21_other;
          }
          if (this.ruleForm.b22 == "20人以上，大約_____人") {
            this.ruleForm.b22 = this.b22_other;
          }
          if (this.ruleForm.b23 == "有，大約_____人") {
            this.ruleForm.b23 = this.b23_other;
          }

          const chartObj = {
            b11: Number(this.ruleForm.b11.split("-")[0]),
            b12: Number(this.ruleForm.b12.split("-")[0]) || "",
            b13: Number(this.ruleForm.b13.split("-")[0]) || "",
            b14: Number(this.ruleForm.b14.split("-")[0]) || "",
            b21: Number(this.ruleForm.b21.split("-")[0]) || "",
            b22: Number(this.ruleForm.b22.split("-")[0]) || "",
            b23: Number(this.ruleForm.b23.split("-")[0]) || "",
            b24: this.ruleForm.b24.map((it) => Number(it.split("-")[0])),
            b25: this.ruleForm.b25.map((it) => Number(it.split("-")[0])),
          };
          this.$store.dispatch("setChartInfo", chartObj);

          const dbObj = {
            b11: this.ruleForm.b11.split("-")[1],
            b12: this.ruleForm.b12.split("-")[1] || "",
            b13: this.ruleForm.b13.split("-")[1] || "",
            b14: this.ruleForm.b14.split("-")[1] || "",
            b21: this.ruleForm.b21.split("-")[1] || "",
            b22: this.ruleForm.b22.split("-")[1] || "",
            b23: this.ruleForm.b23.split("-")[1] || "",
            b24: this.ruleForm.b24.map((it) => it.split("-")[1]),
            q14: this.ruleForm.q14,
            b25: this.ruleForm.b25.map((it) => it.split("-")[1]),
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