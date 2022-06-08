<template>
  <section class="collections">
    <div class="collections-item">
      <h3><a href="">Collections femme</a></h3>
      <img
        src="@/assets/images/robe.jpeg"
        loading="lazy"
        alt="Découvrez nos Collections Femme"
      />
    </div>
    <div class="collections-item">
      <h3><a href="">Collections homme</a></h3>
      <img
        src="@/assets/images/homme.jpeg"
        loading="lazy"
        alt="Découvrez nos Collections Homme"
      />
    </div>
  </section>
</template>
<script>
export default {
  name: "CollectionsVue",
  props: {
    href: String,
    text_link: String,
    btn_classes: String,
  },
};
</script>
<style scoped>
.collections {
  display: flex;
  gap: 0.4rem;
}
.collections-item {
  flex: 1;
  aspect-ratio: 1;
  overflow: hidden;
  position: relative;
}
.collections-item img {
  object-fit: cover;
  width: 100%;
  height: auto;
  transition: all ease-in-out 0.6s;
}
.collections-item:hover img {
  transform: scale(1.1) rotate(5deg);
  filter: grayscale(0.5) blur(2px);
}
.collections-item h3 {
  color: var(--white);
  position: absolute;
  inset: 0;
  display: flex;
  align-self: center;
  align-items: flex-end;
  padding-bottom: 2rem;
  padding-left: 2rem;
  z-index: 9;
}
.collections-item h3 a {
  font-family: 'open_sansbold', sans-serif;
}
.collections-item h3 a:before {
  content: "";
  position: absolute;
  inset: 0;
  display: block;
  transition: filter ease-in-out 0.25s;
}
@media (max-width: 768px) {
  .collections {
    flex-direction: column;
  }
}
</style>