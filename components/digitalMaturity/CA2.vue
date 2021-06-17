<template>
  <div class="CA2">
    <div class="CA2__showHeader">
      <strong>{{getHeader($store.state.explanationNote.groupCNote2).title}}</strong>
      <p>{{getHeader($store.state.explanationNote.groupCNote2).text}}</p>
    </div>
    <div class="CA2__form">
      <el-form class="form" ref="form" :model="ruleForm" :rules="rules" label-position="top">
        <!-- 19 cA21 -->
        <div class="form__question">
          <p class="form__question--no">19.</p>
          <el-form-item class="form__question--body" label="請問，貴公司員工是否具備「數位技能」？員工將技能應用在日常工作的情況為何？" prop="cA21">
            <div class="introduceText">無論是員工進入公司前就具備相關數位技能，或進入公司後自費學習或公司提供補助。數位技能指的是，員工應具備在日常工作與業務活動中，使用適當、與時俱進的數位工具，透過解決問題來滿足客戶以及企業自身的期待，創造數位轉型新價值。</div>
            <el-radio-group v-model="ruleForm.cA21">
              <el-radio label="員工普遍不具備相關數位技能"></el-radio>
              <el-radio label="有部分員正在學習(具備)相關數位技能"></el-radio>
              <el-radio label="已有少數員工能將數位技能應用在日常工作中"></el-radio>
              <el-radio label="多數員工都能將數位技能應用在日常工作中"></el-radio>
              <el-radio label="全公司員工都具備所需的數位技能，能應用在日常工作中，並能持續學習"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 20 cA22 -->
        <div class="form__question">
          <p class="form__question--no">20.</p>
          <el-form-item class="form__question--body" label="請問，貴公司如何協助員工具備工作所需「數位技能」？" prop="cA22">
            <div class="introduceText">數位科技日新月異，要培養員工數位技能，企業需要規劃配套的數位人力資源管理計畫，通過建立機制、自行或委外辦理數位技能課程，以確保員工的數位技能與時俱進。本題量測目標在於企業如何使得員工具備工作所需的數位技能，並持續成長。據此目標展開可分為幾個階段：企業對於數位人才需求盤點、規劃培訓機制、執行落實、與時俱進。</div>
            <el-radio-group v-model="ruleForm.cA22">
              <el-radio label="尚未開始評估規劃/不知道員工需要具備哪些數位技能"></el-radio>
              <el-radio label="正在/開始評估數位技能的需求"></el-radio>
              <el-radio label="只有少數部門推出數位技能培訓計畫"></el-radio>
              <el-radio label="數位技能培訓計畫已落實在多數部門中"></el-radio>
              <el-radio label="通過培訓機制或計畫的執行，使員工數位技能與時俱進"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 21 cA23 -->
        <div class="form__question">
          <p class="form__question--no">21.</p>
          <el-form-item class="form__question--body" label="請問，貴公司是否有「指派專職人員」或「成立專責部門」推動數位轉型？運作現況為何？" prop="cA23">
            <div class="introduceText">本題目在於了解企業內部在數位轉型業務的投入人力及授權的情況，選項主要層次有二：一為在組織結構中，是否有設立推動數位轉型的專責部門/人員；二為在權責劃分設計，負責這項業務的人員/部門能否將有效地將在數位轉型的願景、目標、作法等，落實到或協調不同部門參與執行。</div>
            <el-radio-group v-model="ruleForm.cA23">
              <el-radio label="沒有負責推動數位轉型的人員或專責部門"></el-radio>
              <el-radio label="沒有專設部門，由既有組織的人員兼任數位轉型推動任務"></el-radio>
              <el-radio label="在原有組織下，指派專任人員規劃數位轉型的任務"></el-radio>
              <el-radio label="已經設立專責數位轉型部門，負責相關任務的規劃"></el-radio>
              <el-radio label="已經設立專責數位轉型部門，並且進行跨部門的整合與推動"></el-radio>
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
.CA2 {
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