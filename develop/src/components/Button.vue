<template>
  <router-link class="button" :class="btn_classes" :to="href">{{
    text_link
  }}</router-link>
</template>
<script>
export default {
  name: "ButtonVue",
  props: {
    href: String,
    text_link: String,
    btn_classes: String,
  },
  mounted() {},
};
</script>
<style scoped>
.button {
  display: inline-flex;
  white-space: nowrap;
  font-size: 1rem;
  padding: 1rem 3.5rem;
  text-transform: uppercase;
  transition: all ease-in-out 0.25s;
}
.button__dark {
  border: 1px var(--dark) solid;
  color: var(--dark);
}
.button.button__dark:hover {
  background: var(--dark);
  color: var(--white);
}
.button__white {
  border: 1px var(--white) solid;
  color: var(--white);
}
.button.button__white:hover {
  background: var(--white);
  color: var(--dark);
}
</style>
