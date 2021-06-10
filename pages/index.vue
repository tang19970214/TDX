<template>
  <div>
    <div class="indexPage">
      <div class="indexPage__title">
        <div class="indexPage__title--imgAndTxt">
          <!-- image -->
          <img class="img" src="@/assets/images/home-icon.svg" alt="" width="340px">
          <!-- title -->
          <div class="title">
            <p class="title__text">台灣產業</p>
            <div class="title__supText">
              <strong class="title__supText--cn">數位轉型量表<strong class="title__supText--en">TDX</strong></strong>
            </div>
            <svg height="10" width="30">
              <line x1="4" y1="5" x2="30" y2="5" style="stroke: rgb(14, 92, 148); stroke-width: 2;"></line>
            </svg>
            <p class="title__subject">Taiwan Digtal Transformation Index</p>
          </div>
        </div>
      </div>

      <div class="indexPage__introduce">
        <!-- 介紹 -->
        <div class="indexPage__introduce--card">
          <div class="introduce" v-for="item in introduction" :key="item.id">
            <!-- 介紹-標題 -->
            <div class="introduce__block">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 13.5C14.3137 13.5 17 10.8137 17 7.5C17 4.18629 14.3137 1.5 11 1.5C7.68629 1.5 5 4.18629 5 7.5C5 10.8137 7.68629 13.5 11 13.5Z" stroke="#5C88C9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7.49951 14L6.41602 20.48L10.9993 17.5507L15.5827 20.48L14.4995 14" stroke="#5C88C9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <strong class="introduce__block--title">{{item.title}}</strong>
            </div>
            <!-- 介紹-內文 -->
            <p class="introduce__content" v-if="item.title !== '聯絡'">{{item.text}}</p>
            <div style="margin-top: 12px" v-else>
              <p class="introduce__content" v-for="items in item.text.split('\n')" :key="items.id">{{items}}</p>
            </div>
          </div>
        </div>

        <!-- 開始填寫btn -->
        <div class="indexPage__introduce--btn">
          <button class="goNext" @click="goBasicInfo()">開始填寫</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      introduction: [
        { id: 1, title: "主旨", text: "" },
        { id: 2, title: "期望", text: "" },
        { id: 3, title: "幫助", text: "" },
        { id: 4, title: "聯絡", text: "" },
      ],
    };
  },
  methods: {
    getList() {
      this.$axios
        .get("http://tdx.yummydesign.com.tw/api/ExplanationNote/Get?id=1")
        .then((res) => {
          this.$store.dispatch("setExplanationNote", res.data.result);
          this.introduction[0].text = res.data.result.subject;
          this.introduction[1].text = res.data.result.expect;
          this.introduction[2].text = res.data.result.help;
          this.introduction[3].text = res.data.result.connection;
        });
    },
    goBasicInfo() {
      this.$router.push({ name: "basicInfo" });
    },
  },
  async mounted() {
    await this.getList();
  },
};
</script>

<style lang="scss">
.indexPage {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  z-index: 10;

  @media (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media (min-width: 1024px) {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  @media (min-width: 1280px) {
    padding-left: 15rem;
    padding-right: 15rem;
  }

  &__title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 24px;

    &--imgAndTxt {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row-reverse;
      }

      .img {
        @media (min-width: 768px) {
          margin-left: 16px;
        }
        @media (min-width: 1024px) {
          margin-left: 24px;
        }
      }

      .title {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        @media (min-width: 768px) {
          margin-right: 16px;
        }
        @media (min-width: 1024px) {
          margin-right: 24px;
        }

        &__text {
          font-size: 2.25rem;
          line-height: 2.5rem;
          color: rgb(92, 136, 201);
          margin-top: 1rem;
          margin-bottom: 1rem;

          @media (min-width: 768px) {
            font-size: 3rem;
            line-height: 1;
          }
        }

        &__supText {
          display: flex;
          align-items: center;

          &--cn {
            font-size: 3rem;
            line-height: 1;
            color: rgb(54, 89, 140);
            margin-bottom: 16px;

            @media (min-width: 768px) {
              font-size: 3.75rem;
              line-height: 1;
            }
          }

          &--en {
            font-size: 2.25rem;
            line-height: 2.5rem;
            color: rgb(92, 136, 201);
            margin-bottom: 16px;

            @media (min-width: 768px) {
              font-size: 3.75rem;
              line-height: 1;
            }
          }
        }

        &__subject {
          margin-left: 4px;
          margin-top: 8px;
          margin-bottom: 8px;
          font-weight: 500;
          font-size: 0.875rem;
          line-height: 1.25rem;
          letter-spacing: 1px;
          color: rgb(92, 136, 201);
        }
      }
    }
  }

  &__introduce {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: column-reverse;
    }

    &--card {
      position: relative;
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
      }

      .introduce {
        width: 100%;
        margin-top: 16px;
        margin-bottom: 16px;

        @media (min-width: 768px) {
          margin: 16px;
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
        }

        @for $i from 1 through 4 {
          &:nth-child(#{$i}) {
            animation-fill-mode: both;
            animation-duration: 1000ms;
            animation-delay: 500ms;
            animation-iteration-count: 1;
            opacity: 1;
            animation-name: loadIn-#{$i};
          }

          @keyframes loadIn-#{$i} {
            0% {
              opacity: 0;
              @if $i == 1 {
                transform: translate3d(-100%, 0px, 0px);
              } @else if $i == 2 {
                transform: translate3d(0px, -100%, 0px);
              } @else if $i == 3 {
                transform: translate3d(0px, 100%, 0px);
              } @else if $i == 4 {
                transform: translate3d(100%, 0px, 0px);
              }
            }
            100% {
              opacity: 1;
              transform: none;
            }
          }
        }

        &__block {
          display: flex;
          align-items: center;

          &--title {
            margin-left: 8px;
            font-size: 1.5rem;
            line-height: 2rem;
            color: rgb(92, 136, 201);
          }
        }

        &__content {
          margin-top: 12px;
          font-weight: bold;
          font-size: 0.875rem;
          line-height: 1.5rem;
          color: rgb(82, 101, 151);
        }
      }
    }

    &--btn {
      width: 100%;

      .goNext {
        width: 100%;
        height: 44px;
        margin-top: 20px;
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

        @media (min-width: 768px) {
          width: 15rem;
        }
        @media (min-width: 768px) {
          margin-top: 0px;
        }
      }
    }
  }
}
</style>