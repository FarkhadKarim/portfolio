<template>
  <section class="motion-course">
    <div class="motion-content container">
      <div class="page-path">
        <p>Главная</p>
        <img src="./img/nav-arrow.svg" alt="no-img" />
        <p>Курсы</p>
        <img src="./img/nav-arrow.svg" alt="no-img" />
        <p>Motion Design</p>
      </div>
      <div class="motion-desc">
        <div class="motion-desc-title">
          <p>
            Практический курс по анимации <br />
            для начинающих motion-дизайнеров
          </p>
        </div>
        <div class="motion-desc-img"></div>
        <div class="motion-desc-info">
          <p>
            Мечтаете оживлять статичные картинки и интерфейсы? Тогда этот курс для вас! <br />На
            интенсивном 8-недельном курсе по анимации вы получите мощную базу.
          </p>
          <p>
            Анимация шейпов и текста, работа с векторными фигурами и растровыми изображениями,
            настройка программы After Effects и эффектный монтаж. Всему этому вы научитесь на курсе
            Motion Design. Вместе с преподавателями вы изучите принципы анимации и разберетесь с
            After Effects раз и навсегда. <br />
            <br />
            К концу курса вы сделаете несколько анимационных шотов и большой итоговый проект,
            соберете достойное портфолио. За 8 недель обучения вы получите полную базу по
            motion-дизайну, а наши кураторы будут помогать вам на протяжении всего обучения.
            <br /><br />
            Обучение проходит в небольших группах, к каждой привязан куратор, один из наших лучших
            выпускников. У вас всегда будет поддержка и обратная связь. Помимо фидбека от куратора,
            на каждое домашнее задание вы получаете разбор тренера.
          </p>
        </div>
      </div>
      <div class="motion-stat">
        <div class="motion-stat-content">
          <div class="motion-stat-num">8</div>
          <div><p>недель интенсивного обучения, занятия 3 раза в неделю</p></div>
        </div>
        <div class="motion-stat-content">
          <div class="motion-stat-num">24</div>
          <div><p>урока и домашних заданий с проверкой от тренера</p></div>
        </div>
        <div class="motion-stat-content">
          <div class="motion-stat-num">7</div>
          <div><p>работ в портфолио по окончании курса, 6 шотов и 1 итоговая работа</p></div>
        </div>
        <div class="motion-stat-content">
          <div class="motion-stat-num">4</div>
          <div><p>студента в каждой группе, у каждой группы свой куратор</p></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
section {
  color: var(--footer-text);
}
.motion-content {
  height: 1484px;
  width: 100%;
  padding-top: 114px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
}
.motion-desc {
  margin-top: 60px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
}
.motion-desc-title {
  /* width: 1070px; */
  font-family: RalewayM;
  font-size: 58px;
  line-height: 120%;
}
.motion-desc-img {
  height: 440px;
  background-image: url('./img/pic.png');
  background-size: cover;
  background-position: center;
}
.motion-desc-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
}
.motion-desc-info p:first-child {
  font-family: RalewayM;
  font-size: 22px;
  line-height: 130%;
}
.motion-desc-info p:last-child {
  width: 808px;
  font-family: RalewayR;
  font-size: 16px;
  line-height: 150%;
}
.motion-stat {
  /* margin-bottom: 120px; */
  /* border: solid 1px blue; */
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.motion-stat-num {
  font-family: RalewayM;
  font-size: 58px;
  color: var(--green-bc);
}
.motion-stat-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
}
.motion-stat-content p {
  font-size: 14px;
  font-family: RalewayR;
}
.page-path {
  width: 256px;
  height: 14px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-family: RalewayR;
}
</style>
