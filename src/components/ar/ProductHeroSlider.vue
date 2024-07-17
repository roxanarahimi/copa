<template>
  <div class="px-lg-5 p-0 m-0" style=" margin-bottom: 50px">
    <Carousel class="" :itemsToShow="1.0" :autoplay="500" :transition="2000" :loop="true" :itemsToScroll="1" :wrapAround="true"
              :snapAlign="'start'">
      <Slide v-for="slide in 3" :key="slide">
        <div class="carousel__item p-0">

          <div class="parallax3-section">
            <div class="parallax3-cover">
              <h1 class="parallax3-hover-title">سلسلة الإفطار</h1>
              <img class="parallax3-hover-img img-fluid" src="/img/pro2.png" alt="">
            </div>
            <img class="img-fluid h-100 w-100" src="/img/cornflex.jpg" alt="">

          </div>

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
import productCard from "@/components/ar/ProductCard";

export default {
  components: {productCard},
  mounted() {
    document.querySelectorAll('.carousel__icon').forEach((element) => {
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
  /*padding: 10px !important;*/

}

.carousel__item h5 {
  text-align: center;
}

:deep(.carousel__prev) {
  /*left: -35px !important;*/
  /*top: calc(50% - 25px) !important;*/
  display: none;
}

:deep(.carousel__next ) {
  /*right: -30px !important;*/
  /*top: calc(50% - 25px) !important;*/
  display: none;
}
:deep(.carousel__pagination-item ) {
  width: 10px;
  height: 10px;

  margin-top: 10px;
  margin-left: 5px !important;
  margin-right: 5px !important;
}


:deep(.carousel__pagination-button) {
  width: 10px !important;
  height: 10px !important;
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