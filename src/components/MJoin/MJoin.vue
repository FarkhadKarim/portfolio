<template>
  <section class="join">
    <div class="join-content container">
      <div class="join-content-desc">
        <p>Присоединяйтесь к E-Mentor сейчас</p>
        <p>
          Выберите подходящий тариф и формат обучения, пройдите 2 урока и мы подарим вам
          дополнительные лекции по любому направлению бесплатно!
        </p>
        <button class="join-btn">Выбрать тариф</button>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.join-content {
  height: 578px;
  background-image: url('./img/photo-join-bg.png');
  background-size: cover;
  background-position: center;
  position: relative;
}
.join-content-desc {
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  padding-bottom: 120px;
  color: var(--footer-text);
  width: 508px;
  position: absolute;
  right: 198px;
}
.join-content-desc p:first-child {
  font-family: RalewayM;
  font-size: 58px;
}
.join-content-desc p:nth-last-of-type(1) {
  margin-top: 20px;
  margin-bottom: 50px;
  font-family: RalewayR;
  line-height: 150%;
}
.join-btn {
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
