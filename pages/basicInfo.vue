<template>
  <div class="basicInfo">
    <div class="basicInfo__header">
      <PageTitle title="基本資料" />
    </div>

    <div class="basicInfo__form">
      <el-form class="form" ref="form" :model="ruleForm" :rules="rules" label-position="top">
        <!-- 公司名稱 -->
        <div class="form__question">
          <p class="form__question--no">1.</p>
          <el-form-item class="form__question--body" label="公司名稱" prop="q1">
            <el-input type="text" v-model="ruleForm.q1" placeholder="XXX股份有限公司"></el-input>
          </el-form-item>
        </div>
        <!-- 統一編號 -->
        <div class="form__question">
          <p class="form__question--no">2.</p>
          <el-form-item class="form__question--body" label="統一編號" prop="q2">
            <el-input type="number" v-model="ruleForm.q2" placeholder="12345678"></el-input>
          </el-form-item>
        </div>
        <!-- 公司成立年份（西元） -->
        <div class="form__question">
          <p class="form__question--no">3.</p>
          <el-form-item class="form__question--body" label="公司成立年份（西元）" prop="q3">
            <el-input type="number" v-model="ruleForm.q3" placeholder="2021"></el-input>
          </el-form-item>
        </div>
        <!-- 請問，貴公司目前(2021)年正式員工人數？ -->
        <div class="form__question">
          <p class="form__question--no">4.</p>
          <el-form-item class="form__question--body" label="請問，貴公司目前(2021)年正式員工人數？" prop="q4">
            <el-radio-group v-model="ruleForm.q4">
              <el-radio label="10人以下"></el-radio>
              <el-radio label="11~30人"></el-radio>
              <el-radio label="31~50人"></el-radio>
              <el-radio label="51~100人"></el-radio>
              <el-radio label="101~200人"></el-radio>
              <el-radio label="200人以上"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
        <!-- 請問，去(2020)年公司整體營收為何？(新台幣) -->
        <div class="form__question">
          <p class="form__question--no">5.</p>
          <el-form-item class="form__question--body" label="請問，去(2020)年公司整體營收為何？(新台幣)" prop="q5">
            <el-radio-group v-model="ruleForm.q5">
              <el-radio label="未滿1千萬"></el-radio>
              <el-radio label="1千萬以上，未滿5千萬"></el-radio>
              <el-radio label="5千萬以上，未滿1億"></el-radio>
              <el-radio label="1億以上，未滿5億"></el-radio>
              <el-radio label="5億以上，未滿10億"></el-radio>
              <el-radio label="10億以上，未滿50億"></el-radio>
              <el-radio label="50億以上"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
        <!-- 請問，貴公司屬於以下哪種產業？ -->
        <div class="form__question">
          <p class="form__question--no">6.</p>
          <el-form-item class="form__question--body" label="請問，貴公司屬於以下哪種產業？" prop="q6">
            <el-radio-group v-model="ruleForm.q6" @change="getQ6">
              <el-radio label="食品及飼品製造業"></el-radio>
              <el-radio label="紡織業"></el-radio>
              <el-radio label="化學材料及肥料製造業"></el-radio>
              <!-- 額外結果 -->
              <el-radio label="塑膠製品製造業"></el-radio>
              <el-radio label="橡膠製品製造業"></el-radio>
              <el-radio label="基本金屬製造業"></el-radio>
              <el-radio label="螺絲、螺帽及鉚釘製造業"></el-radio>
              <el-radio label="電子零組件製造業"></el-radio>
              <el-radio label="電腦、電子產品及光學製品製造業"></el-radio>
              <el-radio label="電力設備及配備製造業"></el-radio>
              <el-radio label="機械設備製造業"></el-radio>
              <el-radio label="化妝品製造業"></el-radio>
              <!-- 額外結果 -->
              <el-radio label="金屬製品製造業"></el-radio>
              <el-radio label="汽車及其零件製造業"></el-radio>
            </el-radio-group>
            <div class="form__question--ansOther" :class="{'active': ruleForm.a6=='其他，請說明___________' || !!q6_other}">
              <el-radio label="其他，請說明___________" v-model="ruleForm.a6" :class="{'is-foces is-checked': !!q6_other}"></el-radio>
              <el-input v-model="q6_other" placeholder="請說明" :disabled="ruleForm.a6 !== '其他，請說明___________'"></el-input>
            </div>
          </el-form-item>
        </div>
      </el-form>

      <!-- next step -->
      <div class="basicInfo__form--btn">
        <button class="goNext" @click="enter()">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";

export default {
  head: {
    title: "基本資料 - 台灣產業數位轉型量表TDX",
  },
  components: { PageTitle },
  data() {
    let checkYear = (rule, value, callback) => {
      if (value) {
        let regExpYear1 = /^[1]{1}[9]{1}[0-9]{2}$/;
        let regExpYear2 = /^[2]{1}[0]{1}[0-2]{1}[0-9]{1}$/;
        if (value.search(regExpYear1) == 0 || value.search(regExpYear2) == 0) {
          return callback();
        } else {
          return callback(new Error("格式錯誤"));
        }
      }
    };

    return {
      ruleForm: {
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q6: "",
      },
      q6_other: "",
      rules: {
        q1: [{ required: true, message: "請填寫", trigger: "blur" }],
        q2: [{ required: true, message: "請填寫", trigger: "blur" }],
        q3: [
          { required: true, message: "請填寫", trigger: "blur" },
          { validator: checkYear, trigger: "blur" },
        ],
        q4: [{ required: true, message: "請選擇", trigger: "change" }],
        q5: [{ required: true, message: "請選擇", trigger: "change" }],
        q6: [{ required: true, message: "請選擇", trigger: "change" }],
      },
    };
  },
  methods: {
    getUserNo() {
      this.$axios
        // .post("https://dtrl.tw/sys/api/UserReply/GetUserNo")
        .post("http://tdx.yummydesign.com.tw/sys/api/UserReply/GetUserNo")
        .then((res) => {
          window.localStorage.setItem("userNo", res.data.result);
          this.$store.dispatch("setFormInfo", { userNo: res.data.result });
        });
    },
    getQ6(val) {
      /* 若選擇不是其他，就將其他的input值清空 */
      this.q6_other = "";
    },
    enter() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          if (this.ruleForm.a6 == "其他，請說明___________") {
            this.ruleForm.a6 = this.q6_other;
          }

          let newObj = Object.assign(this.$store.state.formInfo, this.ruleForm);
          this.$store.dispatch("setFormInfo", newObj);
          this.$router.push({ name: "digitalInvestment" });
        } else {
          this.$nextTick(() => {
            let isError = document.querySelectorAll(".is-error");
            isError.forEach((el) => {
              /* 每次都先將所有錯誤移除，再新增 */
              el.classList.remove("bg-error");
              el.classList.add("bg-error");
              el.childNodes[1].childNodes[0].classList.remove("focusRing");
              el.childNodes[1].childNodes[0].classList.add("focusRing");
            });

            isError[0].scrollIntoView({
              // 滾動至第一個錯誤
              // 可切換值：start,center,end，nearest，當前顯示在視圖區域中間
              block: "center",
              // 可切換值：auto、instant,smooth，目前是緩動動畫
              behavior: "smooth",
            });
          });
          return;
        }
      });
    },
  },
  mounted() {
    this.getUserNo();
    /* 重整時給提示 */
    // window.onbeforeunload = (e) => {
    //   e.preventDefault();
    //   e.returnValue = "";
    //   window.localStorage.clear();
    // };
  },
};
</script>

<style lang="scss">
.basicInfo {
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