<script>
import MHeader from './layouts/MHeader.vue'
import MHero from './components/MHero/MHero.vue'
import MFooter from './layouts/MFooter.vue'
import MTeam from './components/MTeam/MTeam.vue'
import MEduFormat from './components/MEduFormat/MEduFormat.vue'
export default {
  components: {
    MHeader,
    MHero,
    MFooter,
    MTeam,
    MEduFormat,
  },
}
</script>

<template>
  <MHeader />
  <main>
    <MHero />
    <MTeam />
    <MEduFormat />
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
