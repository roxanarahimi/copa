<template>
  <div class="px-lg-5" style=" margin-bottom: 50px" >
    <Carousel class="d-none d-xl-block" :itemsToShow="4.0" :autoplay="500" :transition="2000" :itemsToScroll="1" :wrapAround="true" :snapAlign="'start'">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">
          <product-card />
        </div>
      </Slide>
      <template #addons>
        <Navigation/>
        <!--       <Pagination />-->
      </template>
    </Carousel>
    <Carousel class="d-none d-lg-block d-xl-none" :itemsToShow="3.0"  :autoplay="500" :transition="2000" :itemsToScroll="1" :wrapAround="true" :snapAlign="'start'">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">
          <product-card />
        </div>
      </Slide>
      <template #addons>
        <Navigation/>
        <!--       <Pagination />-->
      </template>
    </Carousel>
    <Carousel class="d-none d-sm-block d-lg-none" :itemsToShow="2.0"  :autoplay="500" :transition="2000" :itemsToScroll="1" :wrapAround="true" :snapAlign="'start'">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">
          <product-card />
        </div>
      </Slide>
      <template #addons>
        <Navigation/>
        <!--       <Pagination />-->
      </template>
    </Carousel>
    <Carousel class="d-sm-none" :itemsToShow="1.0" :itemsToScroll="1" :autoplay="500" :transition="2000" :wrapAround="true" :snapAlign="'start'">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">
          <product-card />
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
import productCard from "../components/ProductCard";

export default {
  components: { productCard },
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