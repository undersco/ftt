<template>
  <section class="carrousel">
    <h3>Notre Sélection</h3>
    <div class="carrousel__container">
      <article>
        <div class="product__image">
          <img src="@/assets/images/product1.jpeg" alt="" />
          <img src="@/assets/images/product2.jpeg" alt="" />
        </div>
        <div class="product__description">
          <h4>T-shirt Homme</h4>
          <span>70,00 €</span>
        </div>
      </article>
      <article>
        <div class="product__image">
          <img src="@/assets/images/product2.jpeg" alt="" />
          <img src="@/assets/images/product3.jpeg" alt="" />
        </div>
        <div class="product__description">
          <h4>T-shirt Homme</h4>
          <span>70,00 €</span>
        </div>
      </article>
      <article>
        <div class="product__image">
          <img src="@/assets/images/product3.jpeg" alt="" />
          <img src="@/assets/images/product4.jpeg" alt="" />
        </div>
        <div class="product__description">
          <h4>T-shirt Homme</h4>
          <span>70,00 €</span>
        </div>
      </article>
      <article>
        <div class="product__image">
          <img src="@/assets/images/product5.jpeg" alt="" />
          <img src="@/assets/images/product6.jpeg" alt="" />
        </div>
        <div class="product__description">
          <h4>T-shirt Homme</h4>
          <span>70,00 €</span>
        </div>
      </article>
    </div>
  </section>
</template>
<script>
export default {
  name: "Carrouselv1Vue",
};
</script>
<style scoped>
.carrousel {
  padding: 5rem 2rem;
}
.carrousel__container {
  display: flex;
  gap: 1rem;
}
.carrousel__container article {
  max-width: 25%;
  overflow: hidden;
  flex: 1;
}
.product__image {
  position: relative;
}
.product__image img {
  object-fit: cover;
  position: relative;
  object-fit: cover;
  width: 100%;
  height: auto;
  transition: all ease-in-out 0.25s;
  margin-bottom: 1rem;
}
.product__image img + img {
  position: absolute;
  inset: 0;
  min-height: 100%;
  opacity: 0;
}
.product__image:hover img {
  opacity: 0;
}
.product__image:hover img + img {
  opacity: 1;
}
@media (max-width: 768px) {
  .carrousel__container article {
    min-width: 50%;
  }
}
</style>
