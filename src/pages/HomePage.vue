<template>
  <div>
    <BannerLarge title="FEMME" custom_class="femme" />
    <Intro intro_title="Lorem ipsum dolor sit amet" />
    <Collections />
    <Carrousel />
    <Decouvrir />
    <Footer />
  </div>
</template>

<script>
import BannerLarge from "@/components/BannerLarge";
import Intro from "./../components/Intro.vue";
import Collections from "@/components/Collections.vue";
import Carrousel from "@/components/Carrousel.vue";
import Decouvrir from "@/components/Decouvrir.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomePage",
  components: {
    BannerLarge,
    Intro,
    Collections,
    Carrousel,
    Decouvrir,
    Footer,
  },
};
</script>

<style lang="scss"></style>
