<template>
  <footer class="footer">
    <div class="footer-content container">
      <div class="footer-content-info">
        <div class="footer-social">
          <div class=""><img src="./icons/ementor-logo.svg" alt="" /></div>
          <div class="">
            <p>
              Образовательная онлайн-платформа для развития и тренировки навыков в сфере
              информационных технологий
            </p>
          </div>
          <div class="footer-social-icons">
            <img src="./icons/fb-footer.svg" alt="" />
            <img src="./icons/vk-footer.svg" alt="" />
            <img src="./icons/insta-footer.svg" alt="" />
          </div>
        </div>
        <div class="footer-content-links">
          <ul>
            <li>Обучение</li>
            <li><a href="/">Курсы</a></li>
            <li><a href="/">Вебинары</a></li>
            <li><a href="/">Тренажеры</a></li>
            <li><a href="/">Воркшопы</a></li>
          </ul>

          <ul>
            <li>О нас</li>
            <li><a href="/">О платформе</a></li>
            <li><a href="/">Преподаватели</a></li>
            <li><a href="/">Тарифы</a></li>
            <li><a href="/">Отзывы</a></li>
          </ul>
          <ul>
            <li>Контакты</li>
            <li><a href="/">Связаться с нами</a></li>
            <li><a href="/">Консультация</a></li>
            <li><a href="/">Реквизиты</a></li>
            <li><a href="/">Поддержка</a></li>
          </ul>

          <ul>
            <li>Возникли вопросы?</li>
            <li><a href="/">Напишите нам на почту</a></li>
            <li><a href="/">education@ementor.info</a></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div class="footer-content-copyright">
        <div><p>E-Mentor © 2021 Все права защищены</p></div>
        <div><p>Политика обработки персональных данных</p></div>
        <div><p>Публичная оферта</p></div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-top: 80px;
  padding-bottom: 30px;
  width: 100%;
  /* max-height: 345px; */
  background-color: #e25f5f;
  color: var(--footer-text);
  font-family: RalewayR;
}
.footer-content {
  display: flex;
  flex-direction: column;
}
.footer-content-info {
  display: flex;
  justify-content: space-between;
}
.footer-content-links {
  display: flex;
}
.footer-content-links ul {
  margin-right: 80px;
}
.footer-content-links ul:last-child {
  margin-right: 0;
}
.footer-content-links ul li {
  margin-bottom: 20px;
}
.footer-content-links ul li:first-child {
  font-family: RalewayM;
  margin-bottom: 31px;
}
.footer-content-links ul li:last-child {
  margin-bottom: 0;
}
/* почему не срабатывает стиль текста для футера */
.footer-content-links ul li a {
  color: var(--footer-text);
}

.footer-content-copyright {
  display: flex;
  justify-content: space-between;
  /* align-items: end; */
  margin-top: 79px;
}
.footer-content-copyright div p {
  font-size: 14px;
}
/* .footer-content-copyright div:first-child {
  margin-right: 463px;
} */
.footer-social {
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 270px;
  width: 100%;
  margin-right: 100px;
}
.footer-social p {
  font-size: 14px;
  margin-top: 28px;
}
.footer-social-icons {
  display: flex;
  justify-content: start;
  gap: 25px;
  margin-top: 47px;
}
</style>
