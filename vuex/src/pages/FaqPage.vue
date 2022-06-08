<template>
  <section>
    <BannerLarge title="FAQ" custom_class="faq" />
    <Faq />
  </section>
</template>
<script>
import BannerLarge from "@/components/BannerLarge";
import Faq from "@/components/Faq";
export default {
  name: "FaqPage",
  components: {
    BannerLarge,
    Faq,
  },
};
</script>
