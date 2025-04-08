<template>
  <MHeader />
  <main>
    <MHero />
    <MTeam />
    <MEduFormat />
    <MCourses />
    <MJoin />
  </main>
</template>

<script>
import MHeader from '@/layouts/MHeader.vue'
import MHero from '@/components/MHero/MHero.vue'
import MTeam from '@/components/MTeam/MTeam.vue'
import MEduFormat from '@/components/MEduFormat/MEduFormat.vue'
import MCourses from '@/components/MCourses/MCourses.vue'
import MJoin from '@/components/MJoin/MJoin.vue'

export default {
  components: {
    MHeader,
    MHero,
    MTeam,
    MEduFormat,
    MCourses,
    MJoin,
  },
}
</script>
<style scoped></style>
