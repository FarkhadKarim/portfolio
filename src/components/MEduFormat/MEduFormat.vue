<template>
  <section class="edu-form">
    <div class="edu-form-content container">
      <div class="icon">
        <img src="./img/Group 3.png" alt="" />
      </div>
      <div class="course-content">
        <p>Выбирайте свой формат обучения</p>
        <p>
          Смотрите видео-лекции в удобное для вас время, обучайтесь на тренажере, участвуйте в
          интенсивных воркшопах с командой или проходите курс с гибким расписанием. На нашей
          платформе каждый найдет подходящий формат.
        </p>
        <button class="course-btn">Все курсы</button>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.edu-form {
  height: 602px;
  width: 100%;
  background: var(--green-bc);
  color: #fdfdfd;
}
.edu-form-content {
  padding-top: 120px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 100px;
}
.course-btn {
  width: 230px;
  height: 56px;
  border-radius: 0 15px 0 15px;
  background: #fa9f42;
  color: #fdfdfd;
  text-align: center;
  font-size: 16px;
  font-family: RalewayM;
  border: none;
}
.course-content p:first-child {
  font-family: RalewayM;
  font-size: 58px;
}
.course-content p:nth-last-of-type(1) {
  margin-top: 20px;
  margin-bottom: 50px;
  font-family: RalewayR;
  line-height: 150%;
}
</style>
