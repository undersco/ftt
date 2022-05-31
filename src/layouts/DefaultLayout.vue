<template>
  <div>
    <Menu title="intro" />
    <main>
      <slot />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import MenuVue from "./../components/Menu.vue";
export default {
  name: "DefaultLayout",
  components: {
    Menu: MenuVue,
  },
};
</script>

<style lang="scss"></style>
