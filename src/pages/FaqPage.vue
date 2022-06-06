<template>
  <section>
    <BannerLarge title="FAQ" custom_class="faq" />
    <Faq />
    <Footer />
  </section>
</template>
<script>
import BannerLarge from "@/components/BannerLarge";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer.vue";
export default {
  name: "FaqPage",
  components: {
    BannerLarge,
    Faq,
    Footer,
  },
};
</script>
