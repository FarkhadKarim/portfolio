<template>
  <header class="header">
    <div class="content container">
      <div class="header-div">
        <nav class="header-nav">
          <ul class="header-nav-list">
            <li class="header-nav-link"><a href="">О нас</a></li>
            <li class="header-nav-link"><a href="">Платформа</a></li>
            <li class="header-nav-link"><a href="/motiondesign">Курсы</a></li>
            <li class="header-nav-link"><a href="">Лекции</a></li>
            <li class="header-nav-link"><a href="">Тарифы</a></li>
            <li class="header-nav-link"><a href="">Блог</a></li>
            <li class="header-nav-link"><a href="">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 10;
  /* color: var(--white-text); */
  background: var(--green-bc);
}

.header-div {
  /* max-width: 1440px; */
  height: 100%;
  /* display: flex; */
  justify-content: center;
}
.header-nav {
  /* position: absolute; */
  margin-top: 36px;
  /* top: 40px; */
  /* left: 395px;
  right: 395px; */
  /* bottom: 736px; */
}
.header-nav-list {
  display: flex;
  justify-content: center;
  /* max-width: 650px; */
  list-style: none;
  font-family: RalewayM;
}
.header-nav-link {
  text-decoration: none;
  line-height: 24px;

  margin-right: 40px;
}
.header-nav-link a {
  color: var(--white-text);
}
.header-nav-link:last-child {
  margin-right: 0;
}
.header-nav-link:hover {
  text-decoration: underline;
}
</style>
