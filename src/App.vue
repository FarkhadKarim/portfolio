<script>
import MHeader from './layouts/MHeader.vue'
import MHero from './components/MHero/MHero.vue'
import MFooter from './layouts/MFooter.vue'
import MTeam from './components/MTeam/MTeam.vue'
import MEduFormat from './components/MEduFormat/MEduFormat.vue'
import MCourses from '@/components/MCourses/MCourses.vue'
import MJoin from '@/components/MJoin/MJoin.vue'
import MMotion from '@/components/MMotionDesign/MMotionDesign.vue'
import MActual from '@/components/MActual/MActual.vue'
import MCourseLearn from '@/components/MCourseLearn/MCourseLearn.vue'
import MDiscount from '@/components/MDiscount/MDiscount.vue'
import MFaq from '@/components/MFaq/MFaq.vue'

export default {
  components: {
    MHeader,
    MHero,
    MFooter,
    MTeam,
    MEduFormat,
    MCourses,
    MJoin,
    MMotion,
    MActual,
    MCourseLearn,
    MDiscount,
    MFaq,
  },
}
</script>

<template>
  <MHeader />
  <main>
    <MHero />
    <MTeam />
    <MEduFormat />
    <MCourses />
    <MJoin />
  </main>
  <MFooter />
  <MMotion />
  <MActual />
  <MCourseLearn />
  <MDiscount />
  <MFaq />
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
