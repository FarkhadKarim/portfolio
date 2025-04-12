<template>
  <MCourseHeader />
  <main>
    <!-- <UiBreadCrumbs :links="" /> -->
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
import UiBreadCrumbs from '@/Ui/UIBreadCrumbs.vue'

export default {
  components: {
    MMotion,
    MActual,
    MCourseLearn,
    MDiscount,
    MFaq,
    MCourseHeader,
    UiBreadCrumbs,
  },
  data() {
    return {
      links: [
        {
          text: '',
          path: '',
        },
        {
          text: '',
          path: '',
        },
        {
          text: '',
          path: '',
        },
      ],
    }
  },
}
</script>
<style scoped></style>
