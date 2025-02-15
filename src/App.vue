<script>
import MHeader from './layouts/MHeader.vue'
import MHero from './components/MHero/MHero.vue'
import MFooter from './layouts/MFooter.vue'
import MTeam from './components/MTeam/MTeam.vue'
export default {
  components: {
    MHeader,
    MHero,
    MFooter,
    MTeam,
  },
}
</script>

<template>
  <MHeader />
  <main>
    <MHero />
    <MTeam />
  </main>
  <MFooter />
</template>

<style scoped>
main {
  /* margin-top: 60px; */
  min-height: 100vh;
  width: 100%;
  color: blueviolet;
}
</style>
