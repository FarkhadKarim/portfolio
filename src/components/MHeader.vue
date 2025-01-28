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
}
.header-nav {
  padding: 40px 395px 736px 395px;
}
.header-nav-list {
  display: flex;
  justify-content: space-between;
  width: 100%;
  list-style: none;
}
.header-nav-link {
  text-decoration: none;
  /* margin-right: 40px; */
}
.header-nav-link:active {
  text-decoration: underline;
}
</style>
