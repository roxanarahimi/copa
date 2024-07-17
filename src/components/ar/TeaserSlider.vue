<template>
  <div class="px-lg-5 mx-auto" style=" margin-bottom: 50px; max-width: 800px; ">
    <Carousel class="" :itemsToShow="1.00" :itemsToScroll="1" :wrapAround="false" :snapAlign="'start'">
      <Slide v-for="slide in 3" :key="slide">
        <div class="carousel__item">
          <video src="/vdo/about.mp4" style="width: 100%; height: auto;" controls></video>
        </div>
      </Slide>
      <template #addons>
        <Navigation/>
        <Pagination/>
      </template>
    </Carousel>
  </div>
</template>


<script>
import productCard from "../components/ar/ProductCard";
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';

export default {
  props: ['products'],
  components: {
    productCard,
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  mounted() {
    document.querySelectorAll('.carousel__icon').forEach((element) => {
      element.setAttribute('viewBox', '0 0 17 17')
    })
  }
}
</script>

<style scoped>
:deep(.carousel__viewport) {
  min-height: 100px !important;
}

.carousel__item {
  text-align: center !important;
  width: 100%;
  overflow: hidden;
}

:deep(video) {
  border-radius: 10px;
  width: 100% !important;
}

.carousel__item h5 {
  text-align: center;
}

:deep(.carousel__prev) {
  left: -45px !important;
  top: calc(50% - 25px) !important;
}

:deep(.carousel__next ) {
  right: -35px !important;
  top: calc(50% - 25px) !important;
}

:deep(.carousel__pagination) {
  margin-TOP: 0 !important;
}

:deep(.carousel__track) {
  margin-bottom: 0 !important;
}

:deep(.carousel__pagination-item ) {
  width: 10px;
  height: 10px;
  margin-top: 10px;
  margin-left: 2px !important;
  margin-right: 2px !important;
}


:deep(.carousel__pagination-button) {
  width: 7px !important;
  height: 7px !important;
  border-radius: 50% !important;
  background: gray !important;
}


:deep(.carousel__pagination-button:hover::after),
:deep( .carousel__pagination-button--active::after),
:deep(.carousel__pagination-button:hover),
:deep(.carousel__pagination-button--active) {
  background-color: red !important;
}

:deep(.carousel__pagination-button::after ) {
  display: block;
  content: none !important;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: gray !important;
}
</style>