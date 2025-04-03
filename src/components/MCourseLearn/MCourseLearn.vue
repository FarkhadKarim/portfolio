<template>
  <section class="learn">
    <div class="learn-content container">
      <p class="learn-content-title">На курсе вы научитесь</p>
      <div class="learn-content-icons">
        <div class="learn-content-icons-list" v-for="icon in learn" :key="icon">
          <img :src="icon.img" alt="no-img" />
        </div>
      </div>
      <div class="learn-btn">
        <button class="learn-content-btn">Программа курса</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      learn: [
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
      ],
    }
  },
}
</script>

<style scoped>
.learn-content {
  height: 610px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--footer-text);
  text-align: center;
  padding-top: 120px;
  padding-bottom: 120px;
}

.learn-content-btn {
  height: 56px;
  width: 230px;
  border: none;
  font-family: RalewayM;
  font-size: 16px;
  border-radius: 0 15px 0 15px;
  background: var(--green-bc);
  color: var(--main-bc-white);
}
.learn-content-title {
  font-family: RalewayM;
  font-size: 58px;
}
.learn-content-icons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* gap: 30px; */
  margin-top: 60px;
  margin-bottom: 60px;
}
.learn-content-icons-list {
  width: 270px;
  height: 135px;
}
.learn-btn {
  justify-content: center;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
