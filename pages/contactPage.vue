<template>
  <div class="contactPage">
    <div class="contactPage__header">
      <PageTitle title="受訪者基本資料" />
    </div>

    <div class="contactPage__form">
      <el-form class="form" ref="form" :model="ruleForm" :rules="rules" label-position="top">
        <!-- 1 e1 -->
        <div class="form__question">
          <p class="form__question--no">1.</p>
          <el-form-item class="form__question--body" label="請問，您是否需要本次調查結果的摘要分析？" prop="e1">
            <el-radio-group v-model="ruleForm.e1">
              <el-radio label="需要"></el-radio>
              <el-radio label="不需要"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 2 e2 -->
        <div class="form__question">
          <p class="form__question--no">2.</p>
          <el-form-item class="form__question--body" label="姓氏" prop="e2">
            <el-input type="text" v-model="ruleForm.e2" placeholder="王"></el-input>
          </el-form-item>
        </div>

        <!-- 3 e3 -->
        <div class="form__question">
          <p class="form__question--no">3.</p>
          <el-form-item class="form__question--body" label="性別" prop="e3">
            <el-radio-group v-model="ruleForm.e3">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 4 e4 -->
        <div class="form__question">
          <p class="form__question--no">4.</p>
          <el-form-item class="form__question--body" label="部門/職稱" prop="e4">
            <el-input type="text" v-model="ruleForm.e4" placeholder="執行長"></el-input>
          </el-form-item>
        </div>

        <!-- 5 e5 -->
        <div class="form__question">
          <p class="form__question--no">5.</p>
          <el-form-item class="form__question--body" label="聯絡電話" prop="e5">
            <el-input type="number" v-model="ruleForm.e5" placeholder="範例:0923148590"></el-input>
          </el-form-item>
        </div>

        <!-- 6 e6 -->
        <div class="form__question">
          <p class="form__question--no">6.</p>
          <el-form-item class="form__question--body" label="Email" prop="e6">
            <el-input type="text" v-model="ruleForm.e6" placeholder="email@mail.com"></el-input>
          </el-form-item>
        </div>
      </el-form>

      <!-- next step -->
      <div class="contactPage__form--btn">
        <button class="goNext" @click="finish()">完成</button>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";

export default {
  components: { PageTitle },
  data() {
    let checkEmail = (rule, value, callback) => {
      const mail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (!value) {
        return callback(new Error("請填寫"));
      }
      setTimeout(() => {
        if (mail.test(value)) {
          callback();
        } else {
          callback(new Error("格式錯誤"));
        }
      }, 100);
    };

    return {
      pageTitleIntroduce: {
        title: "什麼是數位轉型?",
        text: this.$store.state.explanationNote?.groupBNote1,
      },
      ruleForm: {
        e1: "",
        e2: "",
        e3: "",
        e4: "",
        e5: "",
        e6: "",
      },
      rules: {
        e1: [{ required: true, message: "請選擇", trigger: "change" }],
        e2: [{ required: true, message: "請填寫", trigger: "blur" }],
        e3: [{ required: true, message: "請選擇", trigger: "change" }],
        e4: [{ required: true, message: "請填寫", trigger: "blur" }],
        e5: [
          { required: true, message: "請填寫", trigger: "blur" },
          { min: 9, message: "格式錯誤", trigger: "blur" },
        ],
        e6: [{ required: true, validator: checkEmail, trigger: "blur" }],
      },
    };
  },
  methods: {
    finish() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          let newObj = Object.assign(this.$store.state.formInfo, this.ruleForm);
          this.$store.dispatch("setFormInfo", newObj);
          this.$axios
            .post(
              "http://tdx.yummydesign.com.tw/sys/api/UserReply/Add",
              this.$store.state.formInfo
            )
            .then((res) => {
              this.$router.push({ name: "finishPage" });
            });
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
.contactPage {
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