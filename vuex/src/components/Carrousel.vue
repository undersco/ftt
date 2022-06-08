<template>
  <section class="carrousel">
    <h3>Notre Sélection</h3>
    <!-- END CARROUSEL-->
    <div class="carrousel__container">
      <div class="swiper">
        <div class="swiper-wrapper">
          <article
            class="swiper-slide"
            v-for="product in products"
            :key="product.id"
          >
            <div class="product__image">
              <img
                :src="product.image"
                :alt="
                  'The Kooples Second Love ' +
                  product.title +
                  ' ' +
                  product.price
                "
              />
              <img
                :src="product.image"
                :alt="
                  'The Kooples Second Love ' +
                  product.title +
                  ' ' +
                  product.price
                "
              />
            </div>
            <div class="product__description">
              <h4>{{ product.title }}</h4>
              <span>{{ product.price }}€</span>
            </div>
          </article>
        </div>
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Swiper, { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
export default {
  name: "CarrouselVue",
  data() {
    return {
      swiper: new Swiper(".swiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        modules: [Scrollbar],
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: true,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
            loop: false,
          },
        },
      }),
    };
  },
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["fetchAllProducts"]),
  },
  created() {},
  mounted() {
    this.fetchAllProducts();
    this.swiper.init();
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
.swiper-wrapper {
  margin: 2rem 0;
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
.swiper-scrollbar {
  position: relative;
  display: none;
}
@media (max-width: 768px) {
  .carrousel {
    padding: 2.5rem 2rem;
  }
  .swiper-scrollbar {
    margin-top: auto;
    display: flex;
  }
}
</style>