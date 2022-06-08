<template>
  <section class="banner-large" :class="custom_class">
    <h1>{{ title }}</h1>
    <Button btn_classes="button__white" href="#" text_link="découvrir" />
  </section>
</template>

<script>
import ButtonVue from "./Button.vue";
export default {
  name: "BannerLarge",
  props: {
    title: String,
    custom_class: String,
  },
  components: {
    Button: ButtonVue,
  },
  mounted() {},
};
</script>

<style scoped>
.banner-large {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.femme {
  background-image: url(@/assets/images/femme.jpeg);
}
.faq {
  background-image: url(https://images.pexels.com/photos/5186869/pexels-photo-5186869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
}
h1 {
  color: var(--white);
}
</style>
