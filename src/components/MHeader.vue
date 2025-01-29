<template>
  <header class="header">
    <div class="header-div">
      <nav class="header-nav">
        <ul class="header-nav-list">
          <li><a href="" class="header-nav-link">О нас</a></li>
          <li><a href="" class="header-nav-link">Платформа</a></li>
          <li><a href="" class="header-nav-link">Курсы</a></li>
          <li><a href="" class="header-nav-link">Лекции</a></li>
          <li><a href="" class="header-nav-link">Тарифы</a></li>
          <li><a href="" class="header-nav-link">Блог</a></li>
          <li><a href="" class="header-nav-link">Контакты</a></li>
        </ul>
      </nav>
      <div class="header-socials">
        <!-- <div><img src="./icons/facebook.svg" alt="" /></div>
        <div><img src="./icons/vk.svg" alt="" /></div>
        <div><img src="./icons/insta.svg" alt="" /></div> -->
        <a href="https://facebook.com" target="_blank">
          <img src="./icons/facebook.svg" alt="" />
        </a>
        <a href="https://vk.com" target="_blank">
          <img src="./icons/vk.svg" alt="" />
        </a>
        <a href="https://instagram.com" target="_blank">
          <img src="./icons/insta.svg" alt="" />
        </a>
      </div>
      <div class="header-logo">
        <img src="./icons/ementor-logo.svg" alt="" />
      </div>
      <div class="header-pic-right">
        <img src="./icons/2.png" alt="" />
      </div>
      <div class="header-pic-left">
        <img src="./icons/1.png" alt="" />
      </div>
      <div class="header-content">
        <div>
          <p>Образовательная</p>
          <p>онлайн-платформа</p>
        </div>
        <div class="header-content-course">
          <p>
            Курсы и видео-лекции по дизайну, копирайтингу, SMM, таргету и многим другим направлениям
          </p>
        </div>
        <div>
          <button class="explore-btn">Все направления</button>
        </div>
      </div>
      <div class="header-scrolldown">
        <div>Листайте вниз</div>
        <div><img src="./icons/arrowdown.svg" alt="" /></div>
      </div>
    </div>
  </header>
</template>

<style scoped>
* {
  background: #10b582;
}
header {
  height: 800px;
  width: 1440px;
  position: relative;
}
.header-nav {
  position: absolute;
  top: 40px;
  left: 395px;
  right: 395px;
  bottom: 736px;
}
.header-nav-list {
  display: flex;
  justify-content: space-between;
  width: 100%;
  list-style: none;
  font-family: RalewayM;
}
.header-nav-link {
  text-decoration: none;
}
.header-nav-link:active {
  text-decoration: underline;
}
.header-socials {
  position: absolute;
  top: 120px;
  left: 135px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22px;
  height: 126px;
}
.header-logo {
  position: absolute;
  top: 212px;
  left: 635px;
}
.header-pic-right {
  position: absolute;
  top: 120px;
  right: 135px;
  height: 330px;
  width: 270px;
}
.header-pic-right img {
  height: 100%;
  width: auto;
}
.header-pic-left {
  position: absolute;
  bottom: 120px;
  left: 135px;
  height: 330px;
  width: 270px;
}
.header-pic-left img {
  height: 100%;
  width: auto;
}
.header-content {
  height: 318px;
  width: 542px;
  position: absolute;
  bottom: 212px;
  right: 449px;
  font-family: RalewayM;
  font-size: 58px;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.header-content-course {
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  font-family: RalewayR;
  font-size: 16px;
  width: 378px;
  height: 48px;
}
.header-content-course p {
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
.header-scrolldown {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  width: 10px;
  height: 129px;
  right: 135px;
  bottom: 120px;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  font-family: RalewayR;
  font-size: 14px;
}
/* header-scrolldown div:first-child {
  text-orientation: mixed;
} */
</style>
