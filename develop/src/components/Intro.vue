<template>
  <section class="intro">
    <div class="container">
      <h2>{{ intro_title }}</h2>
      <p>
        Curabitur eros diam, viverra vel ornare id, tincidunt sit amet ligula.
        Curabitur id metus ut nunc sollicitudin tempus. Donec suscipit, sapien
        ut consectetur volutpat, magna quam rhoncus lacus, vel ornare metus
        tortor ut ipsum. Phasellus purus turpis, consectetur lacinia sem vitae,
        lacinia placerat velit. Sed pulvinar feugiat nibh, a feugiat orci
        commodo eu. Praesent posuere ex ipsum, sit amet pulvinar neque convallis
        at. Quisque dictum commodo malesuada. Cras quis odio feugiat, eleifend
        lectus in, ultrices nunc. Quisque blandit nisi libero, eget dapibus enim
        gravida vel. Morbi fringilla porta nunc, pretium lacinia eros ultrices
        ac.
      </p>
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
  name: "IntroVue",
  props: {
    intro_title: String,
    intro_text: String,
  },
  components: {
    Button: ButtonVue,
  },
};
</script>
<style scoped>
.intro {
  display: flex;
  padding: 8rem 5rem;
}
intro h2 {
  margin-bottom: 2rem;
}
.container p {
  text-align: center;
  margin-bottom: 2rem;
}
@media (max-width: 768px) {
  .intro {
    padding: 4rem 2rem;
  }
}
</style>
