<script>
import MFooter from '@/layouts/MFooter.vue'

export default {
  components: {
    MFooter,
  },
}
</script>

<template>
  <main>
    <RouterView />
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
