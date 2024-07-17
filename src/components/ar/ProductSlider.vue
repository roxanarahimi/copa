<template>
  <div class="px-lg-5" style=" margin-bottom: 50px" >
    <Carousel class="d-none d-xl-block" :itemsToShow="4.0" :itemsToScroll="1" :wrapAround="false" :snapAlign="'start'">
      <Slide v-for="slide in products" :key="slide">
        <div class="carousel__item">
          <product-card :product="slide" />
        </div>
      </Slide>
      <template #addons>
        <Navigation/>
        <!--       <Pagination />-->
      </template>
    </Carousel>
    <Carousel class="d-none d-lg-block d-xl-none" :itemsToShow="3.0"  :itemsToScroll="1" :wrapAround="false" :snapAlign="'start'">
      <Slide v-for="slide in products" :key="slide">
        <div class="carousel__item">
          <product-card :product="slide" />
        </div>
      </Slide>
      <template #addons>
        <Navigation/>
        <!--       <Pagination />-->
      </template>
    </Carousel>
    <Carousel class="d-none d-sm-block d-lg-none" :itemsToShow="2.0"  :itemsToScroll="1" :wrapAround="false" :snapAlign="'start'">
      <Slide v-for="slide in products" :key="slide">
        <div class="carousel__item">
          <product-card :product="slide" />
        </div>
      </Slide>
      <template #addons>
        <Navigation/>
        <!--       <Pagination />-->
      </template>
    </Carousel>
    <Carousel class="d-sm-none" :itemsToShow="1.0" :itemsToScroll="1" :wrapAround="false" :snapAlign="'start'">
      <Slide v-for="slide in products" :key="slide">
        <div class="carousel__item">
          <product-card :product="slide" />
        </div>
      </Slide>
      <template #addons>
        <Navigation/>
        <!--       <Pagination />-->
      </template>
    </Carousel>

  </div>
</template>


<script >
import productCard from "@/components/ar/ProductCard";
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';

export default {
  props:['products'],
  components: {
    productCard,
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  mounted() {
    document.querySelectorAll('.carousel__icon').forEach((element)=>{
      element.setAttribute('viewBox', '0 0 17 17')
    })
  }
}
</script>

<style scoped>
/*:deep(.carousel__viewport){*/
/*  min-height: 500px !important;*/
/*}*/
.carousel__item {
  text-align: center !important;
  width: 100%;
  padding: 10px !important;

}

.carousel__item h5 {
  text-align: center;
}
:deep(.carousel__prev) {
  left: -35px !important;
  top: calc(50% - 25px) !important;
}

:deep(.carousel__next ) {
  right: -30px !important;
  top: calc(50% - 25px) !important;
}

</style>