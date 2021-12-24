<template>
  <div class="commonPage" v-if="!!list">
    <!-- 總體 -->
    <div class="commonPage__commonCard commonPage__firstCard" :class="{'flex-row': !checkJob()}">
      <div class="commonPage__firstCard--title">
        <strong>數位轉型成熟度總分</strong>
      </div>

      <div class="commonPage__firstCard--block">
        <div :class="{'left': checkJob(), 'no-chart': !checkJob()}">
          <div class="score">
            <strong>{{getItem(0).myAvg}}</strong>
            <p>/100</p>
          </div>

          <span class="desc">
            <strong>{{checkRole(getItem(0).myAvg)}}</strong>
          </span>
        </div>

        <div class="right" v-if="checkJob()">
          <div class="right__toolbar">
            <div class="right__toolbar--block">
              <span class="square first"></span>
              <label>企業分數</label>
            </div>
            <div class="right__toolbar--block">
              <span class="square second"></span>
              <label>產業平均</label>
            </div>
            <div class="right__toolbar--block">
              <span class="square third"></span>
              <label>產業高標</label>
            </div>
          </div>
          <ChartAllFinishBar :labels="['企業分數', '產業平均', '產業高標']" :series="[{data: [getItem(0).myAvg, getItem(0).orgAvg, getItem(0).orgHight]}]" :changeColor="true" />
        </div>
      </div>
    </div>

    <div class="commonPage__title">
      <strong>六大次構面行動建議</strong>
    </div>

    <div class="commonPage__commonCard commonPage__secondCard">
      <!-- 人構面 -->
      <section>
        <div class="commonPage__secondCard--main">
          <div class="left">
            <div class="left__title">
              <strong>{{getItem(1).name}}</strong>
            </div>

            <div class="left__score">
              <div class="left__score--block">
                <label>{{getItem(1).subName}}</label>
                <strong>{{getItem(1).myAvg}}</strong>
                <p>/100</p>
              </div>

              <div class="left__score--block">
                <label>{{getItem(2).subName}}</label>
                <strong>{{getItem(2).myAvg}}</strong>
                <p>/100</p>
              </div>
            </div>
          </div>

          <div class="right" v-if="checkJob()">
            <div class="right__toolbar">
              <div class="right__toolbar--block">
                <span class="square first"></span>
                <label>企業分數</label>
              </div>
              <div class="right__toolbar--block">
                <span class="square second"></span>
                <label>產業平均</label>
              </div>
              <div class="right__toolbar--block">
                <span class="square third"></span>
                <label>產業高標</label>
              </div>
            </div>
            <ChartAllFinishBar height="250" :labels="[getItem(1).subName, getItem(2).subName]" :series="[{name: '企業分數', data: [getItem(1).myAvg, getItem(2).myAvg]},{name: '產業平均', data: [getItem(1).orgAvg, getItem(2).orgAvg]}, {name: '產業高標', data: [getItem(1).orgHight, getItem(2).orgHight]}]" />
          </div>
        </div>

        <!-- 高層共識 -->
        <div class="commonPage__secondCard--title">
          <strong>{{getItem(1).subName}}</strong>
        </div>

        <div class="commonPage__secondCard--content" v-if="checkJob()">
          <div class="subTitle">
            <label>次構面表現</label>
          </div>

          <div class="result">
            <p>{{getItem(1).subName}}表現{{getItem(1).result}}</p>
          </div>
        </div>

        <div class="commonPage__secondCard--content">
          <div class="subTitle" v-if="checkJob()">
            <label>客製化建議</label>
          </div>

          <div class="result">
            <label>{{resultSuggest[1].score[checkScore(getItem(1))].title}}</label>
            <ul>
              <li v-for="(item, idx) in resultSuggest[1].score[checkScore(getItem(1))].content" :key="idx">
                {{item.text}}
              </li>
            </ul>
          </div>
        </div>

        <!-- 組織能力 -->
        <div class="commonPage__secondCard--title">
          <strong>{{getItem(2).subName}}</strong>
        </div>

        <div class="commonPage__secondCard--content" v-if="checkJob()">
          <div class="subTitle">
            <label>次構面表現</label>
          </div>

          <div class="result">
            <p>{{getItem(2).subName}}表現{{getItem(2).result}}</p>
          </div>
        </div>

        <div class="commonPage__secondCard--content">
          <div class="subTitle" v-if="checkJob()">
            <label>客製化建議</label>
          </div>

          <div class="result">
            <label>{{resultSuggest[2].score[checkScore(getItem(2))].title}}</label>
            <ul>
              <li v-for="(item, idx) in resultSuggest[2].score[checkScore(getItem(2))].content" :key="idx">
                {{item.text}}
              </li>
            </ul>
          </div>
        </div>

        <!-- 專家建議 -->
        <div class="commonPage__secondCard--advice">
          <!-- <strong class="title">專家建議</strong> -->

          <div class="content">
            <p>『將數位轉型策略列為企業發展主軸，是企業推動數位轉型的關鍵成功要素』</p>
            <p>Gerald C. Kane, 麻省理工學院斯隆管理評論客座編輯(MIT Sloan management Review)</p>
          </div>
        </div>
      </section>

      <!-- 內部流程 -->
      <section>
        <div class="commonPage__secondCard--main">
          <div class="left">
            <div class="left__title">
              <strong>{{getItem(3).name}}</strong>
            </div>

            <div class="left__score">
              <div class="left__score--block">
                <label>{{getItem(3).subName}}</label>
                <strong>{{getItem(3).myAvg}}</strong>
                <p>/100</p>
              </div>

              <div class="left__score--block">
                <label>{{getItem(4).subName}}</label>
                <strong>{{getItem(4).myAvg}}</strong>
                <p>/100</p>
              </div>
            </div>
          </div>

          <div class="right" v-if="checkJob()">
            <div class="right__toolbar">
              <div class="right__toolbar--block">
                <span class="square first"></span>
                <label>企業分數</label>
              </div>
              <div class="right__toolbar--block">
                <span class="square second"></span>
                <label>產業平均</label>
              </div>
              <div class="right__toolbar--block">
                <span class="square third"></span>
                <label>產業高標</label>
              </div>
            </div>
            <ChartAllFinishBar height="250" :labels="[getItem(3).subName, getItem(4).subName]" :series="[{name: '企業分數', data: [getItem(3).myAvg, getItem(4).myAvg]},{name: '產業平均', data: [getItem(3).orgAvg, getItem(4).orgAvg]}, {name: '產業高標', data: [getItem(3).orgHight, getItem(4).orgHight]}]" />
          </div>
        </div>

        <!-- 內部流程 -->
        <div class="commonPage__secondCard--title">
          <strong>{{getItem(3).subName}}</strong>
        </div>

        <div class="commonPage__secondCard--content" v-if="checkJob()">
          <div class="subTitle">
            <label>次構面表現</label>
          </div>

          <div class="result">
            <p>{{getItem(3).subName}}表現{{getItem(3).result}}</p>
          </div>
        </div>

        <div class="commonPage__secondCard--content">
          <div class="subTitle" v-if="checkJob()">
            <label>客製化建議</label>
          </div>

          <div class="result">
            <label>{{resultSuggest[3].score[checkScore(getItem(3))].title}}</label>
            <ul v-if="$store.state.formInfo.q6 === '塑膠製品製造業'">
              <li>{{resultSuggest[3].score[checkScore(getItem(3))].content[1].text}}</li>
            </ul>
            <ul v-else-if="$store.state.formInfo.q6 === '金屬製品製造業'">
              <li>{{resultSuggest[3].score[checkScore(getItem(3))].content[2].text}}</li>
            </ul>
            <ul v-else>
              <li>{{resultSuggest[3].score[checkScore(getItem(3))].content[0].text}}</li>
            </ul>
          </div>
        </div>

        <!-- 外部流程 -->
        <div class="commonPage__secondCard--title">
          <strong>{{getItem(4).subName}}</strong>
        </div>

        <div class="commonPage__secondCard--content" v-if="checkJob()">
          <div class="subTitle">
            <label>次構面表現</label>
          </div>

          <div class="result">
            <p>{{getItem(4).subName}}表現{{getItem(4).result}}</p>
          </div>
        </div>

        <div class="commonPage__secondCard--content">
          <div class="subTitle" v-if="checkJob()">
            <label>客製化建議</label>
          </div>

          <div class="result">
            <label>{{resultSuggest[4].score[checkScore(getItem(4))].title}}</label>
            <ul v-if="$store.state.formInfo.q6 === '塑膠製品製造業'">
              <li>{{resultSuggest[4].score[checkScore(getItem(3))].content[1].text}}</li>
            </ul>
            <ul v-else-if="$store.state.formInfo.q6 === '金屬製品製造業'">
              <li>{{resultSuggest[4].score[checkScore(getItem(3))].content[2].text}}</li>
            </ul>
            <ul v-else>
              <li>{{resultSuggest[4].score[checkScore(getItem(3))].content[0].text}}</li>
            </ul>
          </div>
        </div>

        <!-- 專家建議 -->
        <div class="commonPage__secondCard--advice">
          <!-- <strong class="title">專家建議</strong> -->

          <div class="content">
            <p>『雲服務的普及化可加速企業推動數位轉型，但須將資訊安全納入公司組織結構』</p>
            <p>Dmitry Samartsev, BI.ZONE首席執行官</p>
            <p>Daniel Dobrygowski, WEF治理與信任執行長</p>
          </div>
        </div>
      </section>

      <!-- 技術構面 -->
      <section>
        <div class="commonPage__secondCard--main">
          <div class="left">
            <div class="left__title">
              <strong>{{getItem(5).name}}</strong>
            </div>

            <div class="left__score">
              <div class="left__score--block">
                <label>{{getItem(5).subName}}</label>
                <strong>{{getItem(5).myAvg}}</strong>
                <p>/100</p>
              </div>

              <div class="left__score--block">
                <label>{{getItem(6).subName}}</label>
                <strong>{{getItem(6).myAvg}}</strong>
                <p>/100</p>
              </div>
            </div>
          </div>

          <div class="right" v-if="checkJob()">
            <div class="right__toolbar">
              <div class="right__toolbar--block">
                <span class="square first"></span>
                <label>企業分數</label>
              </div>
              <div class="right__toolbar--block">
                <span class="square second"></span>
                <label>產業平均</label>
              </div>
              <div class="right__toolbar--block">
                <span class="square third"></span>
                <label>產業高標</label>
              </div>
            </div>
            <ChartAllFinishBar height="250" :labels="[getItem(5).subName, getItem(6).subName]" :series="[{name: '企業分數', data: [getItem(5).myAvg, getItem(6).myAvg]},{name: '產業平均', data: [getItem(5).orgAvg, getItem(6).orgAvg]}, {name: '產業高標', data: [getItem(5).orgHight, getItem(6).orgHight]}]" />
          </div>
        </div>

        <!-- 基礎架構 -->
        <div class="commonPage__secondCard--title">
          <strong>{{getItem(5).subName}}</strong>
        </div>

        <div class="commonPage__secondCard--content" v-if="checkJob()">
          <div class="subTitle">
            <label>次構面表現</label>
          </div>

          <div class="result">
            <p>{{getItem(5).subName}}表現{{getItem(5).result}}</p>
          </div>
        </div>

        <div class="commonPage__secondCard--content">
          <div class="subTitle" v-if="checkJob()">
            <label>客製化建議</label>
          </div>

          <div class="result">
            <label>{{resultSuggest[5].score[checkScore(getItem(5))].title}}</label>
            <ul>
              <li v-for="(item, idx) in resultSuggest[5].score[checkScore(getItem(5))].content" :key="idx">
                {{item.text}}
              </li>
            </ul>
          </div>
        </div>

        <!-- 數據價值 -->
        <div class="commonPage__secondCard--title">
          <strong>{{getItem(6).subName}}</strong>
        </div>

        <div class="commonPage__secondCard--content" v-if="checkJob()">
          <div class="subTitle">
            <label>次構面表現</label>
          </div>

          <div class="result">
            <p>{{getItem(6).subName}}表現{{getItem(6).result}}</p>
          </div>
        </div>

        <div class="commonPage__secondCard--content">
          <div class="subTitle" v-if="checkJob()">
            <label>客製化建議</label>
          </div>

          <div class="result">
            <label>{{resultSuggest[6].score[checkScore(getItem(6))].title}}</label>
            <ul>
              <li v-for="(item, idx) in resultSuggest[6].score[checkScore(getItem(6))].content" :key="idx">
                {{item.text}}
              </li>
            </ul>
          </div>
        </div>

        <!-- 專家建議 -->
        <div class="commonPage__secondCard--advice">
          <!-- <strong class="title">專家建議</strong> -->

          <div class="content">
            <p>『數據對企業數位轉型至關重要，分析數據可瞭解客戶行為和快速做出決策』</p>
            <p>Saket Sharma, 紐約梅隆銀行(BNY Mellon)首席資訊長</p>
          </div>
        </div>
      </section>
    </div>

    <div class="commonPage__commonCard commonPage__thirdCard">
      <div class="commonPage__thirdCard--header">
        <strong>下一步行動</strong>
      </div>

      <div class="commonPage__thirdCard--body">
        <span v-if="$store.state.formInfo.q6 === '紡織業' || $store.state.formInfo.q6 === '螺絲、螺帽及鉚釘製造業'">可至最上方功能列點選觀看更詳細分析喔</span>

        <label>若有相關問題，請聯繫TDX團隊</label>
        <label>劉先生 2586-5000 ext.298</label>
        <label>王先生2586-5000 ext.216</label>

        <p>數位轉型相關補助案：</p>

        <ul>
          <li>
            <a href="https://www.ecos.org.tw/" target="_blank">雲市集工業館數位點數補助計畫</a>
          </li>
          <li>
            <a href="https://www.citd.moeaidb.gov.tw/CITDWeb/Web/Detail.aspx?p=f03c8085-4e3f-46ac-ad8e-45be4ba0be15" target="_blank">中小製造業接班傳承數位轉型主題式研發計畫</a>
          </li>
          <li>
            <a href="https://www.citd.moeaidb.gov.tw/CITDweb/Web/Detail.aspx?p=abb91b95-0067-40d7-ac5c-92e962cb70d8" target="_blank">消費數據驅動精準研製造(C2M)補助主題式研計畫</a>
          </li>
          <li>
            <a href="https://www.citd.moeaidb.gov.tw/CITDWeb/Web/Detail.aspx?p=20c62055-4b44-490c-8b3c-7930962a8d88" target="_blank">金屬製品數位轉型加值主題式研發計畫</a>
          </li>
          <li>
            <a href="https://www.citd.moeaidb.gov.tw/CITDWeb/Web/Detail03109.aspx?fbclid=IwAR0wquJpjfPq5BoGoqAy6Y4CFdbFxlVDwDHt25oKvt1c-OwVfBVKXEl5_qk" target="_blank">數位轉型服務團(快易通)諮詢</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="commonPage__commonCard commonPage__thirdCard">
      <div class="commonPage__thirdCard--header">
        <strong>可以開啟網頁列印的方式轉成PDF下載，請確認以下設定</strong>
      </div>

      <div class="commonPage__thirdCard--body">
        <label>1. 顯示更多設定->頁首頁尾不用勾</label>
        <label>2. 顯示更多設定->背景圖行要打勾</label>
        <label>若產生跑版請調整適當縮放比例</label>
      </div>
    </div>
  </div>
</template>

<script>
import ChartAllFinishBar from "../../components/finishPage/ChartAllFinishBar.vue";

import suggest from "../../static/resultSuggest.json";

export default {
  components: { ChartAllFinishBar },
  data() {
    return {
      list: [],
      resultSuggest: suggest,
    };
  },
  computed: {
    getItem() {
      return (idx) => {
        return this.list[idx] || {};
      };
    },
    checkRole() {
      return (score) => {
        if (score) {
          if (score > 70) {
            return "數位領先者";
          } else if (score < 36) {
            return "數位新進者";
          } else {
            return "數位學習者";
          }
        }
      };
    },
    // 檢查分數
    checkScore() {
      return (item) => {
        // low, mid, high
        if (item?.myAvg >= 60) {
          return "high";
        } else if (item?.myAvg < 40) {
          return "low";
        } else {
          return "mid";
        }
      };
    },
    // 檢查產業
    checkJob() {
      return () => {
        const job = this.$store.state.formInfo?.q6;

        if (
          job === "紡織業" ||
          job === "螺絲、螺帽及鉚釘製造業" ||
          job === "塑膠製品製造業" ||
          job === "金屬製品製造業"
        ) {
          return true;
        } else {
          return false;
        }
      };
    },
  },
  methods: {
    async getList() {
      await this.$axios
        .get(`http://tdx.yummydesign.com.tw/sys/api/UserReply/GetResult`, {
          params: this.$store.state.formInfo,
        })
        .then((res) => {
          const { code, data } = res.data;
          if (code === 200) {
            console.log(data);
            this.list = data;
          }
        });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="scss" scoped>
.commonPage {
  width: 100%;
  min-height: calc(100vh- 378px);

  &__title {
    width: 100%;
    text-align: center;
    margin-top: 28px;
    strong {
      font-size: 36px;
      color: #36598c;
    }
  }

  &__commonCard {
    width: 100%;
    background: white;
    border-radius: 12px;
    padding: 16px;
    box-sizing: border-box;
  }

  &__firstCard {
    width: 100%;

    &--title {
      width: 100%;
      margin-bottom: 16px;

      strong {
        color: #36598c;
        font-size: 26px;
      }
    }

    &--block {
      width: 100%;
      display: flex;
      flex-direction: column;
      @media (min-width: 768px) {
        flex-direction: row;
      }

      .left {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media (min-width: 768px) {
          width: 30%;
        }

        .score {
          display: flex;
          align-items: center;
          color: #36598c;
          strong {
            transform: translateY(-10px);
            font-size: 72px;
          }
          p {
            font-size: 36px;
          }
        }

        .desc {
          width: 100%;
          border-radius: 12px;
          color: white;
          font-size: 32px;
          padding: 16px;
          box-sizing: border-box;
          text-align: center;
          background: #5899c8;
        }
      }

      .right {
        width: 100%;
        margin-top: 20px;
        box-sizing: border-box;
        //   border: 1px solid black;

        @media (min-width: 768px) {
          width: 70%;
          margin-left: 16px;
          margin-top: 0;
        }

        &__toolbar {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;

          &--block {
            display: flex;
            align-items: center;
            margin-right: 12px;

            .square {
              width: 8px;
              height: 8px;
              border-radius: 8px;
              margin-right: 8px;
              font-size: 14px;
            }

            .first {
              background-color: #007bdf;
            }
            .second {
              background-color: #f98104;
            }
            .third {
              background-color: #00e396;
            }
          }
        }
      }
    }
  }

  &__secondCard {
    &--main {
      width: 100%;
      display: flex;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
      }

      .left {
        width: 100%;
        margin: 16px 0;
        border-radius: 12px;
        background: #5899c8;
        color: white;
        padding: 16px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media (min-width: 450px) {
          flex-direction: row;
        }

        @media (min-width: 768px) {
          width: 200px;
          flex-direction: column;
        }

        &__title {
          width: 100%;
          text-align: center;
          font-size: 40px;
          white-space: nowrap;
        }

        &__score {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 4px;

          @media (min-width: 715px) {
            flex-direction: row;
          }

          @media (min-width: 768px) {
            flex-direction: column;
          }

          &--block {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            label {
              margin-right: 8px;
            }

            strong {
              font-size: 28px;
            }

            p {
              transform: translateY(5px);
            }
          }
        }
      }

      // TODO: 圖表
      .right {
        width: 100%;
        // border: 1px solid black;

        @media (min-width: 768px) {
          margin-left: 16px;
          width: calc(100% - 200px);
        }

        &__toolbar {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;

          &--block {
            display: flex;
            align-items: center;
            margin-right: 12px;

            .square {
              width: 8px;
              height: 8px;
              border-radius: 8px;
              margin-right: 8px;
              font-size: 14px;
            }

            .first {
              background-color: #007bdf;
            }
            .second {
              background-color: #f98104;
            }
            .third {
              background-color: #00e396;
            }
          }
        }
      }
    }

    &--title {
      width: 100%;
      padding: 4px;
      box-sizing: border-box;
      background: #36598c;
      color: white;
      text-align: center;
      margin-top: 20px;
      font-size: 20px;
      letter-spacing: 0.3rem;
    }

    &--content {
      width: 100%;

      .subTitle {
        margin-top: 8px;
        width: 150px;
        padding: 4px 12px;
        text-align: left;
        color: white;
        background: #5899c8;
        font-size: 18px;
        letter-spacing: 0.2rem;
      }

      .result {
        width: 100%;
        padding: 8px 20px;
        box-sizing: border-box;
        letter-spacing: 0.2rem;
        font-size: 20px;

        ul {
          li {
            padding-bottom: 12px;
            &:last-child {
              padding-bottom: 0;
            }
          }
        }
      }
    }

    &--advice {
      margin: 16px 0 32px 0;
      width: 100%;
      padding: 16px 16px 32px 16px;
      box-sizing: border-box;
      border-radius: 12px;
      background: #5899c8;
      color: white;

      .title {
        font-size: 20px;
      }

      .content {
        p {
          text-align: right;
          padding-top: 4px;
          &:first-child {
            text-align: left;
            padding: 8px 0 16px 0;
          }
        }
      }
    }
  }

  &__thirdCard {
    margin-top: 20px;
    padding: 0;

    &--header {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      border-radius: 12px 12px 0 0;
      background: #5899c8;
      color: white;
      letter-spacing: 0.2rem;
      text-align: center;
      font-size: 28px;
    }

    &--body {
      width: 100%;
      padding: 16px;
      box-sizing: border-box;
      background: white;
      border-radius: 0 0 12px 12px;
      letter-spacing: 0.15rem;
      display: flex;
      flex-direction: column;

      span {
        color: red;
        margin-bottom: 16px;

        &::before {
          content: "*";
        }
      }

      label {
        font-size: 20px;
        margin-bottom: 8px;
      }

      p {
        margin-top: 20px;
        font-size: 18px;
      }

      ul {
        padding-left: 20px;
        li {
          padding: 4px 0;
          &::marker {
            color: #5899c8;
            font-size: 20px;
          }
        }
      }
    }
  }
}

.no-chart {
  width: 100%;
  display: flex;
  align-items: center;

  .score {
    display: flex;
    align-items: center;
    color: #36598c;
    strong {
      transform: translateY(-10px);
      font-size: 60px;

      @media (min-width: 375px) {
        font-size: 72px;
      }
    }
    p {
      font-size: 28px;

      @media (min-width: 375px) {
        font-size: 36px;
      }
    }
  }

  .desc {
    // width: 100%;
    border-radius: 12px;
    color: white;
    font-size: 24px;
    padding: 8px;
    box-sizing: border-box;
    text-align: center;
    background: #5899c8;
    margin-left: 16px;
  }
}
</style>