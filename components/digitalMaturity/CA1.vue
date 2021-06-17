<template>
  <div class="CA1">
    <div class="CA1__showHeader">
      <strong>{{getHeader($store.state.explanationNote.groupCNote1).title}}</strong>
      <p>{{getHeader($store.state.explanationNote.groupCNote1).text}}</p>
    </div>
    <div class="CA1__form">
      <el-form class="form" ref="form" :model="ruleForm" :rules="rules" label-position="top">
        <!-- 16 cA11 -->
        <div class="form__question">
          <p class="form__question--no">16.</p>
          <el-form-item class="form__question--body" label="請問，貴公司是否有規劃「數位轉型願景」？部門/員工之間對願景達成共識的情況？" prop="cA11">
            <div class="introduceText">觀察公司內所有人員對於數位轉型發展的看法，問題分為兩個階段：a.管理階層是否有提出「數位轉型願景」，例如從公司中長期經營計畫、投資者關係報告或經營會議資料揭露，是否清晰、完整說明數位化發展的願景、發展目標；b.如有願景規劃，進一步落實到各部門的情況，形成共識的程度。</div>
            <el-radio-group v-model="ruleForm.cA11">
              <el-radio label="目前尚無規劃"></el-radio>
              <el-radio label="管理階層已有初步願景，但員工之間對願景還沒有共識"></el-radio>
              <el-radio label="管理階層已有清晰的願景，並且在少數部門/員工之間形成共識"></el-radio>
              <el-radio label="管理階層已有清晰的願景，並且在多數部門/員工之間形成共識"></el-radio>
              <el-radio label="管理階層已有清晰的願景，並且獲得全公司/員工支持與落實"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 17 cA12 -->
        <div class="form__question">
          <p class="form__question--no">17.</p>
          <el-form-item class="form__question--body" label="請問，貴公司是否有規劃「數位轉型策略」？各業務部門落實的程度為何？" prop="cA12">
            <div class="introduceText">從公司的業務面來看數位轉型的策略落實的情況，問題分為兩個層次：a.公司管理階層是否有延續上述願景，規劃出具體或完整的發展策略，這些策略可能揭露於公司的中長期經營計畫和各部門營運管理計畫中；b.如有規劃數位轉型策略，進一步落實到各部門的情況，各部門業務與發展方向，是否符合數位化發展的路徑。</div>
            <el-radio-group v-model="ruleForm.cA12">
              <el-radio label="沒有規劃數位轉型策略"></el-radio>
              <el-radio label="有規劃轉型發展策略(或規劃中)，各部門業務還未能與策略扣合"></el-radio>
              <el-radio label="已規劃明確的轉型策略，少數部門業務開始調整(或實證中)"></el-radio>
              <el-radio label="已規劃明確的轉型策略，多數部門業務根據策略進行調整"></el-radio>
              <el-radio label="已規劃明確的轉型策略，並落實到全公司各部門業務且持續優化"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 18 cA13 -->
        <div class="form__question">
          <p class="form__question--no">18.</p>
          <el-form-item class="form__question--body" label="面對數位科技的衝擊，貴公司管理階層鼓勵員工嘗試新作法，並從錯誤中快速學習、改進的程度為何？" prop="cA13">
            <div class="introduceText">面對新興數位科技的快速變化，企業在實際投入新的數位工具之前往往難以評估精準的效益。本題著重企業在日常業務計畫中，如何鼓勵員工嘗試新的數位工具，透過快速規劃，執行、驗證、與修正的重複循環，從錯誤中學習經驗並即時改善，作為衡量企業內數位文化與風氣的指標。</div>
            <el-radio-group v-model="ruleForm.cA13">
              <el-radio label="尚未有相關的作法"></el-radio>
              <el-radio label="公司透過實驗的方式嘗試"></el-radio>
              <el-radio label="快速嘗試並從錯誤中學習與改進的做法，僅有少數員工嘗試"></el-radio>
              <el-radio label="快速嘗試並從錯誤中學習與改進的做法，已在多數員工中實施"></el-radio>
              <el-radio label="快速嘗試並從錯誤中學習與改進的做法，已成為員工日常工作的習慣"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    ruleForm: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
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
};
</script>

<style lang="scss">
.CA1 {
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
    padding: 16px 24px;
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