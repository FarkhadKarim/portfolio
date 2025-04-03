<template>
  <section class="discount">
    <div class="discount-content container">
      <div class="discount-content-desc">
        <p>Скидка 40% <br />до 30 июня</p>
        <p>
          Успейте приобрести курс по выгодной цене! Вы можете забронировать место на курсе со
          скидкой, а остальную <br />
          сумму оплатить в рассрочку на 12 или 24 месяца.
        </p>
        <button class="discount-btn">Купить курс</button>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.discount-content {
  height: 578px;
  background-image: url('./img/banner.png');
  background-size: cover;
  background-position: center;
  position: relative;
}
.discount-content-desc {
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  padding-bottom: 120px;
  color: var(--footer-text);
  width: 508px;
  position: absolute;
  right: 198px;
}
.discount-content-desc p:first-child {
  font-family: RalewayM;
  font-size: 58px;
}
.discount-content-desc p:nth-last-of-type(1) {
  margin-top: 20px;
  margin-bottom: 50px;
  font-family: RalewayR;
  line-height: 150%;
}
.discount-btn {
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
</style>
