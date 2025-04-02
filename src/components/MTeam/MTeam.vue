<template>
  <section class="team-section">
    <div class="team-section-content container">
      <div class="stats">
        <div class="stats-content">
          <div>1000</div>
          <div><p>теоретических и практических курсов для разного уровня</p></div>
        </div>
        <div class="stats-content">
          <div>1000</div>
          <div><p>часов видео-лекций и вебинаров от лучших преподавателей</p></div>
        </div>
        <div class="stats-content">
          <div>1000</div>
          <div><p>направлений обучения востребованным профессиям</p></div>
        </div>
        <div class="stats-content">
          <div>1000</div>
          <div><p>учеников уже занимаются на нашей платформе</p></div>
        </div>
      </div>
      <div class="team">
        <div class="team-desc">
          <p>Учитесь у лучших</p>
          <p>
            Наши преподаватели – профессионалы, которые добились успеха в своей области.
            Лид-дизайнеры известных студий, маркетологи крупнейших компаний, редакторы популярных
            медиа: получайте опыт из первых рук, в любое время. Кураторы курсов – наши лучшие
            выпускники, будут помогать и поддерживать вас на протяжении всего обучения.
          </p>
          <button class="show-all-btn">Все преводователи</button>
        </div>
        <div class="team-list">
          <div class="team-list-items" v-for="item in team" :key="item">
            <img class="team-list-item-img" :src="item.img" alt="no-img" />
            <p class="team-list-item-title">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          img: new URL('./img/1.png', import.meta.url).href,
          title: 'Катя, ведущий дизайнер TailGroup',
        },
        {
          img: new URL('./img/2.png', import.meta.url).href,
          title: 'Марина, маркетолог Headers Market',
        },
        {
          img: new URL('./img/3.png', import.meta.url).href,
          title: 'Сава, PR-менеджер Central Media',
        },
        {
          img: new URL('./img/4.png', import.meta.url).href,
          title: 'Паша, основатель LeadCompany',
        },
        {
          img: new URL('./img/5.png', import.meta.url).href,
          title: 'Саша, главный редактор Just Journal',
        },
        {
          img: new URL('./img/6.png', import.meta.url).href,
          title: 'Лёня, ведущий разработчик Ymail',
        },
      ],
    }
  },
}
</script>

<style scoped>
.team-section {
  background-color: var(--main-bc-white);
  height: 940px;
  width: 100%;
}

.team-section-content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: var(--footer-text);
  font-family: RalewayR;
  font-size: 14px;
}
.stats {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  /* border: solid 1px black; */
  height: 107px;
  margin: 120px 0 120px;
  text-align: center;
}
.stats-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
}
.team {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 100px;
  margin-bottom: 120px;
}
.show-all-btn {
  height: 56px;
  width: 230px;
  border: none;
  font-family: RalewayM;
  font-size: 16px;
  border-radius: 0 15px 0 15px;
  background: var(--green-bc);
  color: var(--main-bc-white);
}
.team-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
.team-list-items {
  text-align: center;
}
.team-list-item-title {
  margin-top: 15px;
  font-size: 14px;
}
.team-desc {
  margin: 64px 0;
}
.team-desc p:first-child {
  font-family: RalewayM;
  font-size: 58px;
  justify-content: center;
}
.team-desc p:nth-last-of-type(1) {
  margin-top: 20px;
  margin-bottom: 50px;
  font-family: RalewayR;
  line-height: 150%;
}
</style>
