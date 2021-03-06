import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    explanationNote: {
      connection: "(02)-2586-5000#298 劉先生 \n(02)-2586-5000#229 鄭先生",
      expect: "量表目的是希望協助接受評量的企業發掘自身在數位轉型投資、數位成熟度與數位成效三個核心面向的發展現況，透過比較分析與後續的活動找到企業推動轉型下一步的行動方向。",
      groupBNote1: "從技術應用，指企業有能力運用各種新數位科技、電腦運算、資料交換與分析的結果來解決問題，甚至創造數位轉型價值。對於企業內成員，從管理階層到基層員工都能理解數位轉型的重要性，並能持續落實到業務面；體現在流程上，企業能透過數位化工具或方式將內部、外部流程整合。",
      groupBNote2: "資金投入",
      groupBNote3: "投入人力",
      groupCNote1: "A1.高層共識：以下三個議題從管理階層的角度，了解貴企業在數位轉型成熟度。",
      groupCNote2: "A2.組織能力：數位技能意指使用適當的數位工具，解決問題來滿足客戶以及企業自身的期待，以創造數位轉型新價值，數位工具包含前面舉例之各種生產、營運管理、新興技術。",
      groupCNote3: "B1.內部流程：針對企業內部主要流程分為兩個部分：跨層級整合與作業流程整合，將內部流程分為這兩個主題展開",
      groupCNote4: "B2.外部流程：針對外部流程分為與供應商互動、與客戶的互動 ",
      groupCNote5: "C1.基礎架構：技術基礎架構分為資訊安全、資訊系統支援業務活動與新興技術應用的情況",
      groupCNote6: "C2.數據價值：數據價值從資料蒐集、分析到應用，區分為三個階段",
      help: "量表的填寫也將有助於拼湊所屬產業的數位轉型概況的面貌，並找到自身在同業中的數位轉型落點。 評量後續也預計與法人研究機構或公協會合作，透過不同的活動例如數位轉型工作坊，協助企業發展自身的數位轉型的策略與推動數位轉型的優先次序。",
      subject: "經濟部工業局委託數位經濟暨產業發展協會、台灣經濟研究院、資策會執行「數位轉型基盤建構先期推動計畫」，其中重要的工作為發展與推動企業的數位轉型量表- 台灣產業數位轉型量表- TDX，現階段已針對製造業(扣件、紡織)、服務業(餐飲)、資訊服務業進行量表設計。",
      thankPage: "目前平台填答成果分析報告下載的功能仍在建制中， \n我們將在4月開始，以email方式，提供貴公司數位轉型分析報告。"
    },
    formInfo: {
      // q6: "塑膠製品製造業",
      // q10:"",
      // q11:"",
      // q12:"",
      // q13:"",
      // q14: [10, 11, 17, 14],
      // q15: [4, 3, 9],
      // q16:2,
      // q17:4,
      // q18:5,
      // q19:3,
      // q20:1,
      // q21:2,
      // q22:3,
      // q23:5,
      // q24:1,
      // q25:3,
      // q26:5,
      // q27:4,
      // q28:1,
      // q29:3,
      // q30:2,
      // q31:2,
      // q32: [2, 3, 12],
      // q33:3,
      // q34:"",
      // q35:"",
      // q36: [],
      // q37:"",
      // q38:"",
      // q39:"",
      // q7:1,
      // q8:"",
      // q9:""
    },
    chartInfo: {},
    groupC: {
      16: [{
        id: 1,
        ans: "目前尚無規劃"
      }, {
        id: 2,
        ans: "管理階層已有初步願景，但員工之間對願景還沒有共識"
      }, {
        id: 3,
        ans: "管理階層已有清晰的願景，並且在少數部門/員工之間形成共識"
      }, {
        id: 4,
        ans: "管理階層已有清晰的願景，並且在多數部門/員工之間形成共識"
      }, {
        id: 5,
        ans: "管理階層已有清晰的願景，並且獲得全公司/員工支持與落實"
      }],
      17: [{
        id: 1,
        ans: "沒有規劃數位轉型策略"
      }, {
        id: 2,
        ans: "有規劃轉型發展策略(或規劃中)，各部門業務還未能與策略扣合"
      }, {
        id: 3,
        ans: "已規劃明確的轉型策略，少數部門業務開始調整(或實證中)"
      }, {
        id: 4,
        ans: "已規劃明確的轉型策略，多數部門業務根據策略進行調整"
      }, {
        id: 5,
        ans: "已規劃明確的轉型策略，並落實到全公司各部門業務且持續優化"
      }],
      18: [{
        id: 1,
        ans: "尚未有相關的作法"
      }, {
        id: 2,
        ans: "公司透過實驗的方式嘗試"
      }, {
        id: 3,
        ans: "快速嘗試並從錯誤中學習與改進的做法，僅有少數員工嘗試"
      }, {
        id: 4,
        ans: "快速嘗試並從錯誤中學習與改進的做法，已在多數員工中實施"
      }, {
        id: 5,
        ans: "快速嘗試並從錯誤中學習與改進的做法，已成為員工日常工作的習慣"
      }],
      19: [{
        id: 1,
        ans: "員工普遍不具備相關數位技能"
      }, {
        id: 2,
        ans: "有部分員正在學習(具備)相關數位技能"
      }, {
        id: 3,
        ans: "已有少數員工能將數位技能應用在日常工作中"
      }, {
        id: 4,
        ans: "多數員工都能將數位技能應用在日常工作中"
      }, {
        id: 5,
        ans: "全公司員工都具備所需的數位技能，能應用在日常工作中，並能持續學習"
      }],
      20: [{
        id: 1,
        ans: "尚未開始評估規劃/不知道員工需要具備哪些數位技能"
      }, {
        id: 2,
        ans: "正在/開始評估數位技能的需求"
      }, {
        id: 3,
        ans: "只有少數部門推出數位技能培訓計畫"
      }, {
        id: 4,
        ans: "數位技能培訓計畫已落實在多數部門中"
      }, {
        id: 5,
        ans: "通過培訓機制或計畫的執行，使員工數位技能與時俱進"
      }],
      21: [{
        id: 1,
        ans: "沒有負責推動數位轉型的人員或專責部門"
      }, {
        id: 2,
        ans: "沒有專設部門，由既有組織的人員兼任數位轉型推動任務"
      }, {
        id: 3,
        ans: "在原有組織下，指派專任人員規劃數位轉型的任務"
      }, {
        id: 4,
        ans: "已經設立專責數位轉型部門，負責相關任務的規劃"
      }, {
        id: 5,
        ans: "已經設立專責數位轉型部門，並且進行跨部門的整合與推動"
      }],
      22: [{
        id: 1,
        ans: "各流程孤立運作，且採用人工作業紀錄與傳遞資料"
      }, {
        id: 2,
        ans: "各流程孤立運作，有固定流程，主要透過電腦記錄資料"
      }, {
        id: 3,
        ans: "少部分流程已藉由資訊系統串接與管理資料"
      }, {
        id: 4,
        ans: "大部分流程已藉由資訊系統串接與管理資料"
      }, {
        id: 5,
        ans: "所有流程都已導入系統輔助管理，且跨階層間資料完全整合應用、自動分析"
      }],
      23: [{
        id: 1,
        ans: "各項流程都是採用人工作業紀錄與傳遞資料"
      }, {
        id: 2,
        ans: "有固定的作業流程，主要透過電腦記錄資料"
      }, {
        id: 3,
        ans: "少部分流程已藉由資訊系統串接與管理資料"
      }, {
        id: 4,
        ans: "大部分流程已藉由資訊系統串接與管理資料"
      }, {
        id: 5,
        ans: "所有流程都已導入系統輔助管理，且跨流程間資料完全整合應用、自動分析"
      }],
      24: [{
        id: 1,
        ans: "與供應商互動主要採用人工作業，如電話、傳真"
      }, {
        id: 2,
        ans: "有固定的作業流程，與供應商互動主要透過電腦記錄資料"
      }, {
        id: 3,
        ans: "公司與少數供應商作業流程的資料，有導入系統管理"
      }, {
        id: 4,
        ans: "公司與多數供應商作業流程的資料，已透過系統整合與管理"
      }, {
        id: 5,
        ans: "公司與所有供應商作業流程的資料，都必須透過系統整合、管理與分析"
      }],
      25: [{
        id: 1,
        ans: "與客戶互動主要採用人工作業，如電話、傳真"
      }, {
        id: 2,
        ans: "有固定的作業流程，與客戶互動主要透過電腦記錄資料"
      }, {
        id: 3,
        ans: "公司與少數客戶作業流程的資料，有導入系統管理"
      }, {
        id: 4,
        ans: "公司與多數客戶作業流程的資料，已透過系統整合與管理"
      }, {
        id: 5,
        ans: "公司與所有客戶作業流程的資料，都必須透過系統整合、管理與分析"
      }],
      26: [{
        id: 1,
        ans: "公司沒有明確的資訊安全管理規範，僅員工個人使用基礎的資安工具，如防火牆、防毒/掃毒軟體"
      }, {
        id: 2,
        ans: "公司無一致的資訊安全管理規範，由不同部門/業務單位各自負責資訊安全管理"
      }, {
        id: 3,
        ans: "有專責部門或委外單位，負責資訊安全管理"
      }, {
        id: 4,
        ans: "公司已建構完善資安規範，大部分核心資訊系統通過第三方認證"
      }, {
        id: 5,
        ans: "公司建構完善資安規範，所有核心資訊系統都通過第三方認證，並定期進行資安演練及檢測"
      }],
      27: [{
        id: 1,
        ans: "尚未導入資訊系統或沒有更新計畫"
      }, {
        id: 2,
        ans: "資訊系統由各部門各自管理與更新"
      }, {
        id: 3,
        ans: "公司已制訂公司整體資訊系統更新策略，且已在多數部門實施"
      }, {
        id: 4,
        ans: "公司已有建置內部專門團隊或部門，進行公司整體資訊系統更新"
      }, {
        id: 5,
        ans: "公司資訊系統能夠保持與時俱進，符合企業各階段發展需求"
      }],
      28: [{
        id: 1,
        ans: "沒有投入或應用上述的新興技術"
      }, {
        id: 2,
        ans: "目前正處於評估、規劃階段"
      }, {
        id: 3,
        ans: "投入示範性計畫(或委外)，以專案方式測試新興技術的效益"
      }, {
        id: 4,
        ans: "已將新興技術導入於部分業務流程或產品"
      }, {
        id: 5,
        ans: "已將新興技術普遍導入於所有相關的業務流程或產品，且已獲得明確的效益"
      }],
      29: [{
        id: 1,
        ans: "沒有蒐集日常營運資料"
      }, {
        id: 2,
        ans: "資料蒐集透過人工紀錄，不具備共通格式"
      }, {
        id: 3,
        ans: "有導入資訊系統，建立共通資料格式"
      }, {
        id: 4,
        ans: "有導入資訊系統、感測器等設備自動蒐集與更新資料"
      }, {
        id: 5,
        ans: "除了導入系統、自動更新，還能根據需求調整資料蒐集的範圍與種類"
      }],
      30: [{
        id: 1,
        ans: "沒有分析日常營運資料"
      }, {
        id: 2,
        ans: "有投入人力分析資料，但尚未系統化"
      }, {
        id: 3,
        ans: "已導入資料分析系統"
      }, {
        id: 4,
        ans: "已導入資料分析系統，且具備預警、預測功能"
      }, {
        id: 5,
        ans: "資料透過系統分析，自動提供優化日常營運建議"
      }],
      31: [{
        id: 1,
        ans: "商業或營運決策尚未與資料分析產生關聯"
      }, {
        id: 2,
        ans: "透過人工將資料分析結果轉為報表，支援商業或營運決策"
      }, {
        id: 3,
        ans: "已經導入資料分析系統，系統分析結果可支援商業或營運決策"
      }, {
        id: 4,
        ans: "系統具備預警、預測功能，分析結果可即時支援商業或營運決策"
      }, {
        id: 5,
        ans: "系統可自動提供優化商業或營運的決策建議，成為決策者的判斷依據"
      }],
    }
  },
  mutations: {
    GETEXPLANATIONNOTE(state, payload) {
      state.explanationNote = payload;
    },
    GETFORMINFO(state, payload) {
      state.formInfo = payload;
    },
    GETCHARTINFO(state, payload) {
      state.chartInfo = payload;
    },
  },
  actions: {
    setExplanationNote(state, payload) {
      state.commit("GETEXPLANATIONNOTE", payload)
    },
    setFormInfo(state, payload) {
      state.commit("GETFORMINFO", payload)
    },
    setChartInfo(state, payload) {
      state.commit("GETCHARTINFO", payload)
    }
  }
})

export default store
