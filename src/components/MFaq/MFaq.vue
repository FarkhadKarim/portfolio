<template>
  <section class="faq">
    <div class="faq-content container">
      <p class="faq-content-title">Часто задаваемые вопросы</p>
      <div class="faq-content-icons">
        <div class="faq-content-icons-list" v-for="icon in faq" :key="icon">
          <img :src="icon.img" alt="no-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      faq: [
        {
          img: new URL('./img/1.png', import.meta.url).href,
        },
        {
          img: new URL('./img/2.png', import.meta.url).href,
        },
        {
          img: new URL('./img/3.png', import.meta.url).href,
        },
        {
          img: new URL('./img/4.png', import.meta.url).href,
        },
        {
          img: new URL('./img/5.png', import.meta.url).href,
        },
      ],
    }
  },
}
</script>

<style scoped>
.faq-content {
  height: 1090px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--footer-text);
  text-align: center;
  padding-top: 120px;
  padding-bottom: 120px;
}

.faq-content-title {
  font-family: RalewayM;
  font-size: 58px;
  line-height: 120%;
}
.faq-content-icons {
  width: 830px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* gap: 30px; */
  /* padding-top: 60px; */
  margin: 0 auto;
}
.faq-content-icons-list {
  /* width: 830px; */
  /* height: 135px; */
}

img {
  max-width: 100%;
  height: auto;
}
</style>
