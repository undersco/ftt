<template>
  <section class="decouvrir">
    <div class="decouvrir-item">
      <img
        src="@/assets/images/store.jpeg"
        loading="lazy"
        alt="Découvrez notre store en ligne"
      />
    </div>
    <div class="decouvrir-item">
      <Button
        class="button__dark"
        href="#"
        text_link="découvrir"
        target="_blank"
      />
    </div>
  </section>
</template>
<script>
import ButtonVue from "./Button.vue";

export default {
  name: "DecouvrirVue",
  components: {
    Button: ButtonVue,
  },
};
</script>
<style>
.decouvrir {
  display: flex;
}
.decouvrir-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  background: #F5F5F5;
}
.decouvrir-item img {
  min-height: 100%;
  object-fit: cover;
}
@media (max-width: 768px) {
  .decouvrir {
    flex-direction: column;
  }
}
</style>
