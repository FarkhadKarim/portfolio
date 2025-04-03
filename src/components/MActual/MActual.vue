<template>
  <section class="actual">
    <div class="actual-content container">
      <div class="course-content">
        <p>Актуальные знания</p>
        <p>
          Мы понимаем, как быстро меняются тренды и появляются обновления. Поэтому мы всегда следим
          за всеми новинками, добавляем в программу то, что требуют топовые компании. <br />
          Мы предлагаем вам только актуальные знания, чтобы вы были впереди планеты всей.
        </p>
        <button class="buy-btn">Купить курс</button>
      </div>
      <div class="icon">
        <img src="./img/Group4.png" alt="no-img" />
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.actual {
  height: 556px;
  width: 100%;
  background: var(--green-bc);
  color: #fdfdfd;
}
.actual-content {
  padding-top: 120px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 60px;
}
.buy-btn {
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
