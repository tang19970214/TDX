<template>
  <div class="digitalMaturity">
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

    <!-- ============================A2.組織能力============================ -->
    <div class="digitalMaturity__showHeader">
      <strong>{{getHeader($store.state.explanationNote.groupCNote2).title}}</strong>
      <p>{{getHeader($store.state.explanationNote.groupCNote2).text}}</p>
    </div>
    <div class="digitalMaturity__form">
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

    <!-- ============================B1.內部流程============================ -->
    <div class="digitalMaturity__showHeader">
      <strong>{{getHeader($store.state.explanationNote.groupCNote3).title}}</strong>
      <p>{{getHeader($store.state.explanationNote.groupCNote3).text}}</p>
    </div>
    <div class="digitalMaturity__form">
      <el-form class="form" ref="form" :model="ruleForm" :rules="rules" label-position="top">
        <!-- 22 cB11 -->
        <div class="form__question">
          <p class="form__question--no">22.</p>
          <el-form-item class="form__question--body" label="請問，貴公司在企業規劃層到現場層之間的資料串接程度？" prop="cB11">
            <div class="introduceText">本題目的在於了解企業從經營規劃到製造現場設備之間資料與系統串接整合的程度。根據自動化金字塔(automation pyramid)的定義，企業有五個主要的階層，從下至上包含現場層(field level)、控制層(control level)、生產層(production level)、操作層(operations level)、企業規劃層(enterprise planning level)，建立一個端到端的資料連線。</div>
            <el-radio-group v-model="ruleForm.cB11">
              <el-radio label="各流程孤立運作，且採用人工作業紀錄與傳遞資料"></el-radio>
              <el-radio label="各流程孤立運作，有固定流程，主要透過電腦記錄資料	"></el-radio>
              <el-radio label="少部分流程已藉由資訊系統串接與管理資料"></el-radio>
              <el-radio label="大部分流程已藉由資訊系統串接與管理資料"></el-radio>
              <el-radio label="所有流程都已導入系統輔助管理，且跨階層間資料完全整合應用、自動分析"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 23 cB12 -->
        <div class="form__question">
          <p class="form__question--no">23.</p>
          <el-form-item class="form__question--body" label="請問，貴公司整合內部從進料到出貨流程的資料串接程度?" prop="cB12">
            <el-radio-group v-model="ruleForm.cB12">
              <el-radio label="各項流程都是採用人工作業紀錄與傳遞資料"></el-radio>
              <el-radio label="有固定的作業流程，主要透過電腦記錄資料"></el-radio>
              <el-radio label="少部分流程已藉由資訊系統串接與管理資料"></el-radio>
              <el-radio label="大部分流程已藉由資訊系統串接與管理資料"></el-radio>
              <el-radio label="所有流程都已導入系統輔助管理，且跨流程間資料完全整合應用、自動分析"></el-radio>
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
      <el-form class="form" ref="form" :model="ruleForm" :rules="rules" label-position="top">
        <!-- 24 cB21 -->
        <div class="form__question">
          <p class="form__question--no">24.</p>
          <el-form-item class="form__question--body" label="請問，貴公司日常如何「與供應商互動」？例如原物料採購下單、訂單溝通、出貨訊息確認等" prop="cB21">
            <div class="introduceText">本題衡量目的在於了解企業與供應商之間的互動方式，衡量標的在於了解互動方式是採用傳統類比工具、數位工具等程度，並根據資料串接程度進行鑒別。</div>
            <el-radio-group v-model="ruleForm.cB21">
              <el-radio label="與供應商互動主要採用人工作業，如電話、傳真"></el-radio>
              <el-radio label="有固定的作業流程，與供應商互動主要透過電腦記錄資料	"></el-radio>
              <el-radio label="承上，公司與少數供應商作業流程的資料，有導入系統管理"></el-radio>
              <el-radio label="公司與多數供應商作業流程的資料，已透過系統整合與管理"></el-radio>
              <el-radio label="公司與所有供應商作業流程的資料，都必須透過系統整合、管理與分析"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 25 cB22 -->
        <div class="form__question">
          <p class="form__question--no">25.</p>
          <el-form-item class="form__question--body" label="請問，貴公司日常如何「與客戶互動」？例如產品銷售、訂單溝通、出貨訊息確認等" prop="cB22">
            <div class="introduceText">本題衡量目的在於了解企業與客戶之間的互動方式，衡量標的在於了解互動方式是採用傳統類比工具、數位工具等程度，並根據資料串接程度進行鑒別。</div>
            <el-radio-group v-model="ruleForm.cB22">
              <el-radio label="與客戶互動主要採用人工作業，如電話、傳真"></el-radio>
              <el-radio label="有固定的作業流程，與客戶互動主要透過電腦記錄資料"></el-radio>
              <el-radio label="承上，公司與少數客戶作業流程的資料，有導入系統管理"></el-radio>
              <el-radio label="公司與多數客戶作業流程的資料，已透過系統整合與管理"></el-radio>
              <el-radio label="公司與所有客戶作業流程的資料，都必須透過系統整合、管理與分析"></el-radio>
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
      <el-form class="form" ref="form" :model="ruleForm" :rules="rules" label-position="top">
        <!-- 26 cC11 -->
        <div class="form__question">
          <p class="form__question--no">26.</p>
          <el-form-item class="form__question--body" label="請問，貴公司如何進行「資訊安全」管理？" prop="cC11">
            <div class="introduceText">資訊安全的範圍包括了病毒與威脅防護、帳戶防護、防火牆與網路防護、設備網路安全性、…等，針對公司內部及員工職務上資訊的保密，與管理資訊之機密性、完整性與可用性。</div>
            <el-radio-group v-model="ruleForm.cC11">
              <el-radio label="公司沒有明確的資訊安全管理規範，僅員工個人使用基礎的資安工具，如防火牆、防毒/掃毒軟體"></el-radio>
              <el-radio label="公司無一致的資訊安全管理規範，由不同部門/業務單位各自負責資訊安全管理"></el-radio>
              <el-radio label="有專責部門或委外單位，負責資訊安全管理"></el-radio>
              <el-radio label="公司已建構完善資安規範，大部分核心資訊系統通過第三方認證"></el-radio>
              <el-radio label="公司建構完善資安規範，所有核心資訊系統都通過第三方認證，並定期進行資安演練及檢測"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 27 cC12 -->
        <div class="form__question">
          <p class="form__question--no">27.</p>
          <el-form-item class="form__question--body" label="請問，貴公司資訊系統「支援實際業務活動(或系統更新)」的情況？" prop="cC12">
            <el-radio-group v-model="ruleForm.cC12">
              <el-radio label="尚未導入資訊系統或沒有更新計畫"></el-radio>
              <el-radio label="資訊系統由各部門各自管理與更新"></el-radio>
              <el-radio label="公司已制訂公司整體資訊系統更新策略，且已在多數部門實施"></el-radio>
              <el-radio label="公司已有建置內部專門團隊或部門，進行公司整體資訊系統更新"></el-radio>
              <el-radio label="公司資訊系統能夠保持與時俱進，符合企業各階段發展需求"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 28 cC13 -->
        <div class="form__question">
          <p class="form__question--no">28.</p>
          <el-form-item class="form__question--body" label="請問，前述提到之新興技術，如大數據分析(Big Data)、人工智慧(Artificial Intelligence)、數位雙生(Digital Twin)、…等，貴公司如何應用這些新興技術？" prop="cC13">
            <el-radio-group v-model="ruleForm.cC13">
              <el-radio label="沒有投入或應用上述的新興技術"></el-radio>
              <el-radio label="目前正處於評估、規劃階段"></el-radio>
              <el-radio label="投入示範性計畫(或委外)，以專案方式測試新興技術的效益"></el-radio>
              <el-radio label="已將新興技術導入於部分業務流程或產品"></el-radio>
              <el-radio label="已將新興技術普遍導入於所有相關的業務流程或產品，且已獲得明確的效益"></el-radio>
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
      <el-form class="form" ref="form" :model="ruleForm" :rules="rules" label-position="top">
        <!-- 29 cC21 -->
        <div class="form__question">
          <p class="form__question--no">29.</p>
          <el-form-item class="form__question--body" label="請問，貴公司如何「蒐集生產製造或營運資料」？" prop="cC21">
            <div class="introduceText">在這裡所指的日常營運資料是以在生產製造流程延伸或累積資料，包括產品良率、製程等生產資訊數據。</div>
            <el-radio-group v-model="ruleForm.cC21">
              <el-radio label="沒有蒐集日常營運資料"></el-radio>
              <el-radio label="資料蒐集透過人工紀錄，不具備共通格式"></el-radio>
              <el-radio label="有導入資訊系統，建立共通資料格式"></el-radio>
              <el-radio label="有導入資訊系統、感測器等設備自動蒐集與更新資料"></el-radio>
              <el-radio label="除了導入系統、自動更新，還能根據需求調整資料蒐集的範圍與種類"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 30 cC22 -->
        <div class="form__question">
          <p class="form__question--no">30.</p>
          <el-form-item class="form__question--body" label="請問，貴公司如何對日常營運產生的「資料進行分析」？" prop="cC22">
            <div class="introduceText">在此提到資料分析主要針對產品製造生產數據的應用與分析。</div>
            <el-radio-group v-model="ruleForm.cC22">
              <el-radio label="沒有分析日常營運資料"></el-radio>
              <el-radio label="有投入人力分析資料，但尚未系統化"></el-radio>
              <el-radio label="已導入資料分析系統"></el-radio>
              <el-radio label="已導入資料分析系統，且具備預警、預測功能"></el-radio>
              <el-radio label="資料透過系統分析，自動提供優化日常營運建議"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <!-- 31 cC23 -->
        <div class="form__question">
          <p class="form__question--no">31.</p>
          <el-form-item class="form__question--body" label="請問，貴公司如何將資料分析的結果，「應用到商業或營運決策」上？（資料應用）" prop="cC23">
            <el-radio-group v-model="ruleForm.cC23">
              <el-radio label="商業或營運決策尚未與資料分析產生關聯"></el-radio>
              <el-radio label="透過人工將資料分析結果轉為報表，支援商業或營運決策"></el-radio>
              <el-radio label="已經導入資料分析系統，系統分析結果可支援商業或營運決策"></el-radio>
              <el-radio label="系統具備預警、預測功能，分析結果可即時支援商業或營運決策"></el-radio>
              <el-radio label="系統可自動提供優化商業或營運的決策建議，成為決策者的判斷依據"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
      </el-form>
    </div>

    <!-- next step -->
    <div class="digitallnvestment__form--btn">
      <button class="goNext" @click="enter()">下一步</button>
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";

export default {
  components: { PageTitle },
  data() {
    return {
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
        cA11: "",
        cA12: "",
        cA13: "",
        cA21: "",
        cA22: "",
        cA23: "",
        cB11: "",
        cB12: "",
        cB21: "",
        cB22: "",
        cC11: "",
        cC12: "",
        cC13: "",
        cC21: "",
        cC22: "",
        cC23: "",
      },
      rules: {
        cA11: [{ required: true, message: "", trigger: "change" }],
        cA12: [{ required: true, message: "", trigger: "change" }],
        cA13: [{ required: true, message: "", trigger: "change" }],
        cA21: [{ required: true, message: "", trigger: "change" }],
        cA22: [{ required: true, message: "", trigger: "change" }],
        cA23: [{ required: true, message: "", trigger: "change" }],
        cB11: [{ required: true, message: "", trigger: "change" }],
        cB12: [{ required: true, message: "", trigger: "change" }],
        cB21: [{ required: true, message: "", trigger: "change" }],
        cB22: [{ required: true, message: "", trigger: "change" }],
        cC11: [{ required: true, message: "", trigger: "change" }],
        cC12: [{ required: true, message: "", trigger: "change" }],
        cC13: [{ required: true, message: "", trigger: "change" }],
        cC21: [{ required: true, message: "", trigger: "change" }],
        cC22: [{ required: true, message: "", trigger: "change" }],
        cC23: [{ required: true, message: "", trigger: "change" }],
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
    enter() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          let newObj = Object.assign(this.$store.state.formInfo, this.ruleForm);
          console.log(newObj);
          //   this.$store.dispatch("setFormInfo", newObj);
          //   this.$router.push({ name: "digitalMaturity" });
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
.digitalMaturity {
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