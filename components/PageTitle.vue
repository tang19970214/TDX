<template>
  <div class="pageTitle">
    <div class="pageTitle__imgAndTitle">
      <img src="@/assets/images/basicInfo.svg" :alt="title">
      <strong class="pageTitle__imgAndTitle--title">{{title}}</strong>
    </div>

    <div class="pageTitle__introduce" v-if="!!pageTitleIntroduce">
      <strong class="pageTitle__introduce--title">{{pageTitleIntroduce.title}}</strong>
      <p class="pageTitle__introduce--text">{{pageTitleIntroduce.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    pageTitleIntroduce: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.pageTitle {
  width: 100%;

  &__imgAndTitle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &--title {
      font-size: 2.25rem;
      line-height: 2.5rem;
      margin-top: 24px;
      margin-bottom: 16px;
      color: rgb(54, 89, 140);
    }
  }

  &__introduce {
    width: 100%;
    display: flex;
    flex-direction: column;

    &--title {
      line-height: 1.2;
      white-space: pre-wrap;
      overflow-wrap: break-word;
      color: rgb(92, 136, 201);
      font-size: 28px;
      font-weight: 700;
    }

    &--text {
      margin: 0;
      letter-spacing: 1px;
      line-height: 1.8;
      white-space: pre-wrap;
      overflow-wrap: break-word;
      font-size: 14px;
      color: rgb(255, 255, 255);
      font-weight: 400;
      margin-bottom: 16px;
    }
  }
}
</style>