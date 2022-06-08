<template>
  <footer>
    <nav>
      <ul>
        <li><router-link class="btn" to="/faq">FAQ</router-link></li>
        <li><a href="">Mentions Légales</a></li>
        <li><a href="">CGV</a></li>
      </ul>
    </nav>
  </footer>
</template>
<script>
export default {
  name: "FooterVue",
};
</script>
<style scoped>
footer {
  display: flex;
  padding: 5rem;
  background: var(--dark);
  justify-content: center;
  color: var(--white);
}
footer li {
  display: inline;
  margin-right: 1rem;
}
</style>
