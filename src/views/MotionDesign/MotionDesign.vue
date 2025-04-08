<template>
  <MCourseHeader />
  <main>
    <MMotion />
    <MActual />
    <MCourseLearn />
    <MDiscount />
    <MFaq />
  </main>
</template>

<script>
import MMotion from '@/components/MMotionDesign/MMotionDesign.vue'
import MActual from '@/components/MActual/MActual.vue'
import MCourseLearn from '@/components/MCourseLearn/MCourseLearn.vue'
import MDiscount from '@/components/MDiscount/MDiscount.vue'
import MFaq from '@/components/MFaq/MFaq.vue'
import MCourseHeader from '@/components/MCourseHeader/MCourseHeader.vue'

export default {
  components: {
    MMotion,
    MActual,
    MCourseLearn,
    MDiscount,
    MFaq,
    MCourseHeader,
  },
}
</script>
<style scoped></style>
