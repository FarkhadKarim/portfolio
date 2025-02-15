<template>
  <div class="hero">
    <div class="section-1 container">
      <div class="hero-socials">
        <a href="https://facebook.com" target="_blank">
          <img src="./img/facebook.svg" alt="" />
        </a>
        <a href="https://vk.com" target="_blank">
          <img src="./img/vk.svg" alt="" />
        </a>
        <a href="https://instagram.com" target="_blank">
          <img src="./img/insta.svg" alt="" />
        </a>
      </div>
      <div class="hero-logo">
        <img src="./img/ementor-logo.svg" alt="" />
      </div>
      <div class="hero-pic-right">
        <img src="./img/2.png" alt="" />
      </div>
      <div class="hero-pic-left">
        <img src="./img/1.png" alt="" />
      </div>
      <div class="hero-content">
        <div>
          <p>Образовательная</p>
          <p>онлайн-платформа</p>
        </div>
        <div class="hero-content-course">
          <p>
            Курсы и видео-лекции по дизайну, копирайтингу, SMM, таргету и многим другим направлениям
          </p>
        </div>
        <div>
          <button class="explore-btn">Все направления</button>
        </div>
      </div>
      <div class="hero-scrolldown">
        <div class="hero-scrolldown-text">Листайте вниз</div>
        <div><img src="./img/arrowdown.svg" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.section-1 {
  width: 100%;
  /* height: 100vh; */
  background: var(--green-bc);
  color: var(--white-text);
}

.hero-socials {
  position: absolute;
  top: 116px;
  left: 135px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22px;
  height: 126px;
}
.hero-logo {
  position: absolute;
  top: 208px;
  left: 635px;
}
.hero-pic-right {
  position: absolute;
  top: 116px;
  right: 135px;
  height: 330px;
  width: 270px;
}
.hero-pic-right img {
  height: 100%;
  width: auto;
}
.hero-pic-left {
  position: absolute;
  top: 346px;
  left: 135px;
  height: 330px;
  width: 270px;
}
.hero-pic-left img {
  height: 100%;
  width: auto;
}
.hero-content {
  height: 318px;
  width: 542px;
  position: absolute;
  top: 266px;
  right: 449px;
  font-family: RalewayM;
  font-size: 58px;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.hero-content-course {
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  font-family: RalewayR;
  font-size: 16px;
  width: 378px;
  height: 48px;
}
.hero-content-course p {
  text-align: center;
}
.explore-btn {
  width: 230px;
  height: 56px;
  background: #fa9f42;
  color: #fdfdfd;
  text-align: center;
  font-size: 16px;
  font-family: RalewayM;
  border: none;
  border-radius: 15px 0 15px 0;
  cursor: pointer;
  margin-top: 50px;
}
.hero-scrolldown {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 10px;
  height: 129px;
  right: 135px;
  top: 547px;
}
.hero-scrolldown-text {
  writing-mode: vertical-lr;
  text-orientation: mixed;
  transform: rotate(180deg);
  font-family: RalewayR;
  font-size: 14px;
}
</style>
