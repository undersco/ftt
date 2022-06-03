<template>
  <section class="carrousel">
    <h3>Notre Sélection</h3>
    <div class="carrousel__container">
      <div class="swiper">
        <div class="swiper-wrapper">
          <article class="swiper-slide">
            <div class="product__image">
              <img src="@/assets/images/product1.jpeg" alt="" />
              <img src="@/assets/images/product2.jpeg" alt="" />
            </div>
            <div class="product__description">
              <h4>T-shirt Homme</h4>
              <span>70,00 €</span>
            </div>
          </article>
          <article class="swiper-slide">
            <div class="product__image">
              <img src="@/assets/images/product2.jpeg" alt="" />
              <img src="@/assets/images/product3.jpeg" alt="" />
            </div>
            <div class="product__description">
              <h4>T-shirt Homme</h4>
              <span>70,00 €</span>
            </div>
          </article>
          <article class="swiper-slide">
            <div class="product__image">
              <img src="@/assets/images/product3.jpeg" alt="" />
              <img src="@/assets/images/product4.jpeg" alt="" />
            </div>
            <div class="product__description">
              <h4>T-shirt Homme</h4>
              <span>70,00 €</span>
            </div>
          </article>
          <article class="swiper-slide">
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
      </div>
    </div>
  </section>
</template>
<script>
import Swiper from "swiper";
import "swiper/css";
export default {
  name: "Carrouselv2Vue",
  mounted() {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 4,
      spaceBetween: 10,
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        769: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },
    });
    console.log(swiper);
  },
};
</script>
<style scoped>
.carrousel {
  padding: 5rem 2rem;
}
.product__image {
  position: relative;
  overflow: hidden;
}
.product__image > img {
  position: relative;
  min-height: 100%;
  object-fit: fill;
  transition: all ease-in 0.25s;
  opacity: 1;
}
.product__image img + img {
  position: absolute;
  inset: 0;
  opacity: 0;
}
.product__image:hover > img {
  opacity: 0;
}
.product__image:hover img + img {
  opacity: 1;
}
</style>
