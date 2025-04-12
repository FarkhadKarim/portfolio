<template>
  <header class="course-header">
    <div class="course-header-content container">
      <div class="course-header-div">
        <div class="course-header-logo">
          <a href="/">
            <img src="./img/e-mentor-course-header.svg" alt="no-img" />
          </a>
        </div>
        <div class="course-header-nav">
          <nav class="header-nav">
            <ul class="header-nav-list">
              <li class="header-nav-link"><a href="">О нас</a></li>
              <li class="header-nav-link"><a href="">Платформа</a></li>
              <li class="header-nav-link"><a href="">Курсы</a></li>
              <li class="header-nav-link"><a href="">Лекции</a></li>
              <li class="header-nav-link"><a href="">Тарифы</a></li>
              <li class="header-nav-link"><a href="">Блог</a></li>
              <li class="header-nav-link"><a href="">Контакты</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script></script>

<style scoped>
header {
  height: 64px;
  width: 100%;
  position: fixed;
  z-index: 10;
  background: var(--main-bc-white);
  font-family: RalewayM;
  font-size: 16px;
  /* color: var(--footer-text); */
}
.course-header-div {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  /* color: black; */
}
.header-nav-list {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  line-height: 24px;
}
.header-nav-link:hover {
  text-decoration: underline;
}
.header-nav-link a {
  color: var(--footer-text);
}
</style>
