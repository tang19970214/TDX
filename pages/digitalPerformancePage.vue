<template>
  <div class="digitalPerformancePage">
    <div class="digitalPerformancePage__header">
      <PageTitle title="數位成效" />
    </div>

    <div class="digitalPerformancePage__form">
      <el-form class="form" ref="form" :model="ruleForm" :rules="rules" label-position="top">
        <!-- 32 d1 -->
        <div class="form__question">
          <p class="form__question--no">32.</p>
          <el-form-item class="form__question--body" label="請問，貴公司推動數位轉型的主要目標為何？(請選最重要的1-3個，複選)" prop="d1">
            <div class="introduceText">請選擇 1 ~ 3 個選項</div>
            <el-checkbox-group v-model="ruleForm.d1" :max="3">
              <el-checkbox label="提升品質/降低不良率"></el-checkbox>
              <el-checkbox label="提升生產效率"></el-checkbox>
              <el-checkbox label="交期準時"></el-checkbox>
              <el-checkbox label="縮短交期"></el-checkbox>
              <el-checkbox label="降低人力需求"></el-checkbox>
              <el-checkbox label="產品或服務創新"></el-checkbox>
              <el-checkbox label="降低庫存"></el-checkbox>
              <el-checkbox label="提升產品毛利"></el-checkbox>
              <el-checkbox label="提升設備稼動率/可動率"></el-checkbox>
              <el-checkbox label="強化銷售能力"></el-checkbox>
              <el-checkbox label="強化資訊安全"></el-checkbox>
              <el-checkbox label="更瞭解客戶的行為模式與需求"></el-checkbox>
              <el-checkbox label="縮短研發新產品時間"></el-checkbox>
              <el-checkbox label="改善齊料率"></el-checkbox>
              <el-checkbox label="目前尚未投入數位轉型"></el-checkbox>
              <el-checkbox label="其他"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>

        <!-- 33 d2 -->
        <div class="form__question">
          <p class="form__question--no">33.</p>
          <el-form-item class="form__question--body" label="請問，數位轉型對公司整體營運發展是否有幫助？" prop="d2">
            <el-radio-group v-model="ruleForm.d2" @change="getD2">
              <el-radio label="有，而且效益明顯"></el-radio>
              <el-radio label="有，但是效益普通"></el-radio>
              <el-radio label="目前仍沒有明確的效益"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 34 d3 -->
        <div class="form__question" v-if="!!ruleForm.d2 && ruleForm.d2 !== '目前仍沒有明確的效益'">
          <p class="form__question--no">34.</p>
          <el-form-item class="form__question--body" label="請問，貴公司員工薪資過去一年(2020年)薪資成長率？" prop="d3">
            <el-radio-group v-model="ruleForm.d3">
              <el-radio label="不到1%"></el-radio>
              <el-radio label="1%(含)以上，不到3%"></el-radio>
              <el-radio label="3%(含)以上，不到5%"></el-radio>
              <el-radio label="5%(含)以上，不到10%"></el-radio>
              <el-radio label="10%(含)以上"></el-radio>
              <el-radio label="不知道/拒答"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 35 d4 -->
        <div class="form__question" v-if="!!ruleForm.d2 && ruleForm.d2 !== '目前仍沒有明確的效益'">
          <p class="form__question--no">35.</p>
          <el-form-item class="form__question--body" label="請問，貴公司過去一年(2020年)海外營業比重成長比例？" prop="d4">
            <el-radio-group v-model="ruleForm.d4">
              <el-radio label="沒有或不到5%"></el-radio>
              <el-radio label="5%(含)以上，不到10%"></el-radio>
              <el-radio label="10%(含)以上，不到20%"></el-radio>
              <el-radio label="20%(含)以上，不到30%"></el-radio>
              <el-radio label="30%(含)以上"></el-radio>
              <el-radio label="不知道/拒答"></el-radio>
              <el-radio label="沒有海外市場"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 36 d5 -->
        <div class="form__question" v-if="!!ruleForm.d2 && ruleForm.d2 !== '目前仍沒有明確的效益'">
          <p class="form__question--no">36.</p>
          <el-form-item class="form__question--body" label="請問，貴公司在投入數位轉型之後到2020年底，實際改善的KPI為何？(複選)" prop="d5">
            <el-checkbox-group v-model="ruleForm.d5">
              <el-checkbox label="提升生產效率"></el-checkbox>
              <el-checkbox label="提升品質/降低不良率"></el-checkbox>
              <el-checkbox label="縮短交期"></el-checkbox>
              <el-checkbox label="降低人力需求"></el-checkbox>
              <el-checkbox label="降低庫存"></el-checkbox>
              <el-checkbox label="強化資訊安全"></el-checkbox>
              <el-checkbox label="交期準時"></el-checkbox>
              <el-checkbox label="提升產品毛利"></el-checkbox>
              <el-checkbox label="提升設備稼動率/可動率"></el-checkbox>
              <el-checkbox label="改善齊料率"></el-checkbox>
              <el-checkbox label="強化銷售能力"></el-checkbox>
              <el-checkbox label="更瞭解客戶的行為模式與需求"></el-checkbox>
              <el-checkbox label="縮短研發新產品時間"></el-checkbox>
              <el-checkbox label="產品或服務創新"></el-checkbox>
              <el-checkbox label="尚未實際產生效益"></el-checkbox>
              <el-checkbox label="其他"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>

        <!-- 37-1 d6 -->
        <div class="form__question" v-if="!!ruleForm.d2 && ruleForm.d2 !== '目前仍沒有明確的效益'">
          <p class="form__question--no">37.</p>
          <el-form-item class="form__question--body" label="請問貴公司在開始推動數位轉型之後到2020年底，因為數位轉型所帶來的主要成效指標改善情形？ - (1)營收成長比例" prop="d6">
            <el-radio-group v-model="ruleForm.d6">
              <el-radio label="沒有或不到5%"></el-radio>
              <el-radio label="5%(含)以上，不到10%"></el-radio>
              <el-radio label="10%(含)以上，不到20%"></el-radio>
              <el-radio label="20%(含)以上，不到30%"></el-radio>
              <el-radio label="30%(含)以上"></el-radio>
              <el-radio label="不知道/拒答"></el-radio>
              <el-radio label="沒有海外市場"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 37-2 d7 -->
        <div class="form__question" v-if="!!ruleForm.d2 && ruleForm.d2 !== '目前仍沒有明確的效益'">
          <p class="form__question--no">37.</p>
          <el-form-item class="form__question--body" label="請問貴公司在開始推動數位轉型之後到2020年底，因為數位轉型所帶來的主要成效指標改善情形？ - (2)營運成本降低比例" prop="d7">
            <el-radio-group v-model="ruleForm.d7">
              <el-radio label="沒有或不到5%"></el-radio>
              <el-radio label="5%(含)以上，不到10%"></el-radio>
              <el-radio label="10%(含)以上，不到20%"></el-radio>
              <el-radio label="20%(含)以上，不到30%"></el-radio>
              <el-radio label="30%(含)以上"></el-radio>
              <el-radio label="不知道/拒答"></el-radio>
              <el-radio label="沒有海外市場"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 37-3 d8 -->
        <div class="form__question" v-if="!!ruleForm.d2 && ruleForm.d2 !== '目前仍沒有明確的效益'">
          <p class="form__question--no">37.</p>
          <el-form-item class="form__question--body" label="之後到2020年底，因為數位轉型所帶來的主要成效指標改善情形？ - (3)資產利用率提升比例" prop="d8">
            <el-radio-group v-model="ruleForm.d8">
              <el-radio label="沒有或不到5%"></el-radio>
              <el-radio label="5%(含)以上，不到10%"></el-radio>
              <el-radio label="10%(含)以上，不到20%"></el-radio>
              <el-radio label="20%(含)以上，不到30%"></el-radio>
              <el-radio label="30%(含)以上"></el-radio>
              <el-radio label="不知道/拒答"></el-radio>
              <el-radio label="沒有海外市場"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 38-1 d9 -->
        <div class="form__question" v-if="!!ruleForm.d2 && ruleForm.d2 !== '目前仍沒有明確的效益'">
          <p class="form__question--no">38.</p>
          <el-form-item class="form__question--body" label="請問貴公司預期數位轉型，對2021年主要成效指標改善之影響？ - (1)營收成長比例" prop="d9">
            <el-radio-group v-model="ruleForm.d9">
              <el-radio label="沒有或不到5%"></el-radio>
              <el-radio label="5%(含)以上，不到10%"></el-radio>
              <el-radio label="10%(含)以上，不到20%"></el-radio>
              <el-radio label="20%(含)以上，不到30%"></el-radio>
              <el-radio label="30%(含)以上"></el-radio>
              <el-radio label="不知道/拒答"></el-radio>
              <el-radio label="沒有海外市場"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 38-2 d10 -->
        <div class="form__question" v-if="!!ruleForm.d2 && ruleForm.d2 !== '目前仍沒有明確的效益'">
          <p class="form__question--no">38.</p>
          <el-form-item class="form__question--body" label="請問貴公司預期數位轉型，對2021年主要成效指標改善之影響？ - (2)營運成本降低比例" prop="d10">
            <el-radio-group v-model="ruleForm.d10">
              <el-radio label="沒有或不到5%"></el-radio>
              <el-radio label="5%(含)以上，不到10%"></el-radio>
              <el-radio label="10%(含)以上，不到20%"></el-radio>
              <el-radio label="20%(含)以上，不到30%"></el-radio>
              <el-radio label="30%(含)以上"></el-radio>
              <el-radio label="不知道/拒答"></el-radio>
              <el-radio label="沒有海外市場"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 38-3 d11 -->
        <div class="form__question" v-if="!!ruleForm.d2 && ruleForm.d2 !== '目前仍沒有明確的效益'">
          <p class="form__question--no">38.</p>
          <el-form-item class="form__question--body" label="請問貴公司預期數位轉型，對2021年主要成效指標改善之影響？ - (3)資產利用率提升比例" prop="d11">
            <el-radio-group v-model="ruleForm.d11">
              <el-radio label="沒有或不到5%"></el-radio>
              <el-radio label="5%(含)以上，不到10%"></el-radio>
              <el-radio label="10%(含)以上，不到20%"></el-radio>
              <el-radio label="20%(含)以上，不到30%"></el-radio>
              <el-radio label="30%(含)以上"></el-radio>
              <el-radio label="不知道/拒答"></el-radio>
              <el-radio label="沒有海外市場"></el-radio>
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
  components: { PageTitle },
  data() {
    return {
      pageTitleIntroduce: {
        title: "什麼是數位轉型?",
        text: this.$store.state.explanationNote?.groupBNote1,
      },
      ruleForm: {
        d1: [],
        d2: "",
        d3: "",
        d4: "",
        d5: [],
        d6: "",
        d7: "",
        d8: "",
        d9: "",
        d10: "",
        d11: "",
      },
      rules: {
        d1: [{ required: true, message: "請選擇", trigger: "change" }],
        d2: [{ required: true, message: "請選擇", trigger: "change" }],
        d3: [{ required: true, message: "請選擇", trigger: "change" }],
        d4: [{ required: true, message: "請選擇", trigger: "change" }],
        d5: [{ required: true, message: "請選擇", trigger: "change" }],
        d6: [{ required: true, message: "請選擇", trigger: "change" }],
        d7: [{ required: true, message: "請選擇", trigger: "change" }],
        d8: [{ required: true, message: "請選擇", trigger: "change" }],
        d9: [{ required: true, message: "請選擇", trigger: "change" }],
        d10: [{ required: true, message: "請選擇", trigger: "change" }],
        d11: [{ required: true, message: "請選擇", trigger: "change" }],
      },
    };
  },
  methods: {
    getD2(ans) {
      if (ans == "目前仍沒有明確的效益") {
        this.ruleForm.d3 = "";
        this.ruleForm.d4 = "";
        this.ruleForm.d5 = [];
        this.ruleForm.d6 = "";
        this.ruleForm.d7 = "";
        this.ruleForm.d8 = "";
        this.ruleForm.d9 = "";
        this.ruleForm.d10 = "";
        this.ruleForm.d11 = "";
      }
    },
    finish() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
          let newObj = Object.assign(this.$store.state.formInfo, this.ruleForm);
          this.$store.dispatch("setFormInfo", newObj);
          this.$router.push({ name: "contactPage" });
        } else {
          this.$nextTick(() => {
            let isError = document.getElementsByClassName("is-error");
            isError.forEach((el) => {
              el.classList.remove("bg-error");
              el.classList.add("bg-error");
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
    padding: 16px 24px;
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