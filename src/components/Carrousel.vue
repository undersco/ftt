<template>
  <section class="carrousel">
    <h3>Notre Sélection</h3>
    <div class="carrousel__container">
      <div class="swiper">
        <div class="swiper-wrapper">
          <article class="swiper-slide" v-for="data in post" :key="data.id">
            <div class="product__image">
              <img
                :src="data.image"
                loading="lazy"
                :alt="
                  'The Kooples Second Love ' + data.title + ' - ' + data.price + '€'
                "
              />
              <img
                :src="data.image"
                loading="lazy"
                :alt="
                  'The Kooples Second Love ' + data.title + ' - ' + data.price + '€'
                "
              />
            </div>
            <div class="product__description">
              <h4>{{ data.title }}</h4>
              <span>{{ data.price }} €</span>
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
  name: "CarrouselVue",
  data() {
    return {
      post: [],
    };
  },
  methods: {
    getProducts() {
      fetch("https://fakestoreapi.com/products/")
        .then((response) => response.json())
        .then((data) => (this.post = data))
        .catch((error) => {
          console.log("Fetch: " + error.message);
        });
    },
  },
  mounted() {
    this.getProducts();

    const swiper = new Swiper(".swiper", {
      slidesPerView: 4,
      spaceBetween: 10,
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
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
.carrousel__container {
  margin: 4rem 0;
}
.product__image {
  position: relative;
  overflow: hidden;
}
.product__image img {
  width: 100%;
  height: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  transition: all ease-in 0.25s;
}
.product__image img:first-child {
  position: relative;
  filter: grayscale(100);
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
.product__description h4 {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media (max-width: 768px) {
  .carrousel {
    padding: 2.5rem 2rem;
  }
}
</style>
