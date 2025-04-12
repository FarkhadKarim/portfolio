<template>
  <section class="courses">
    <div class="courses-content container">
      <p class="courses-content-title">Популярные курсы</p>
      <div class="courses-content-icons">
        <router-link :to="icon.link" v-for="icon in courses" :key="icon">
          <div class="courses-content-icons-list">
            <img :src="icon.img" alt="no-img" />
          </div>
        </router-link>
      </div>
      <div class="courses-btn">
        <button class="courses-content-btn">Все курсы</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        {
          img: new URL('./img/1.png', import.meta.url).href,
          link: '/motiondesign',
        },
        {
          img: new URL('./img/2.png', import.meta.url).href,
          link: '/insta-target',
        },
        {
          img: new URL('./img/3.png', import.meta.url).href,
          link: '/presentation',
        },
        {
          img: new URL('./img/4.png', import.meta.url).href,
          link: '/smm-strategy',
        },
      ],
    }
  },
}
</script>

<style scoped>
.courses-content {
  height: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--footer-text);
  text-align: center;
  padding-top: 120px;
  padding-bottom: 120px;
}

.courses-content-btn {
  height: 56px;
  width: 230px;
  border: none;
  font-family: RalewayM;
  font-size: 16px;
  border-radius: 0 15px 0 15px;
  background: var(--green-bc);
  color: var(--main-bc-white);
}
.courses-content-title {
  font-family: RalewayM;
  font-size: 58px;
}
.courses-content-icons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* gap: 30px; */
  margin-top: 60px;
  margin-bottom: 60px;
}
.courses-content-icons-list {
  width: 270px;
  height: 226px;
}
.courses-btn {
  justify-content: center;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
