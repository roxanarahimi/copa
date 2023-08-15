<template>
  <div class="mx-5" style="height: 200px; margin-bottom: 50px" >
    <Carousel class="d-none d-xl-block" :itemsToShow="6.0" :autoplay="500" :transition="2000" :itemsToScroll="1" :wrapAround="true" :snapAlign="'start'">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">
          <div class="carousel__item_inner">
            <div class="carousel__item_inner_inner">
              <img src="/img/joyful-vT5xrj3z1OE-unsplash1.png" alt="">
            </div>
          </div>
          <h5 class="my-3">بیسکوییت</h5>

        </div>
      </Slide>
      <template #addons>
        <Navigation/>
        <!--       <Pagination />-->
      </template>
    </Carousel>
    <Carousel class="d-none d-lg-block d-xl-none" :itemsToShow="5.0"  :autoplay="500" :transition="2000" :itemsToScroll="1" :wrapAround="true"
              :snapAlign="'start'">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">
          <div class="carousel__item_inner">
            <div class="carousel__item_inner_inner">
              <img src="/img/joyful-vT5xrj3z1OE-unsplash1.png" alt="">
            </div>
          </div>
          <h5 class="my-3">بیسکوییت</h5>

        </div>
      </Slide>
      <template #addons>
        <Navigation/>
        <!--       <Pagination />-->
      </template>
    </Carousel>
    <Carousel class="d-none d-md-block d-lg-none" :itemsToShow="4.0"  :autoplay="500" :transition="2000" :itemsToScroll="1" :wrapAround="true" :snapAlign="'start'">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">
          <div class="carousel__item_inner">
            <div class="carousel__item_inner_inner">
              <img src="/img/joyful-vT5xrj3z1OE-unsplash1.png" alt="">
            </div>
          </div>
          <h5 class="my-3">بیسکوییت</h5>

        </div>
      </Slide>
      <template #addons>
        <Navigation/>
        <!--       <Pagination />-->
      </template>
    </Carousel>
    <Carousel class="d-none d-sm-block d-md-none" :itemsToShow="3.0"  :autoplay="500" :transition="2000" :itemsToScroll="1" :wrapAround="true" :snapAlign="'start'">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">
          <div class="carousel__item_inner">
            <div class="carousel__item_inner_inner">
              <img src="/img/joyful-vT5xrj3z1OE-unsplash1.png" alt="">
            </div>
          </div>
          <h5 class="my-3">بیسکوییت</h5>

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
          <div class="carousel__item_inner">
            <div class="carousel__item_inner_inner">
              <img src="/img/joyful-vT5xrj3z1OE-unsplash1.png" alt="">
            </div>
          </div>
          <h5 class="my-3">بیسکوییت</h5>

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
export default {
  mounted() {
    document.querySelectorAll('.carousel__icon').forEach((element)=>{
      element.setAttribute('viewBox', '0 0 17 17')
    })
  }
}
</script>

<style scoped>

.carousel__item {
  text-align: center !important;
  width: 100%;
  padding: 10px !important;

}

.carousel__item h5 {
  text-align: center;
}

.carousel__item_inner {
  border-radius: 7px;
  background-color: #fc6857;
  padding: 2px;
  padding-bottom: 7px;
  margin: 0 auto;
  transition: all 2s ease !important;
  cursor: pointer;
}
.carousel__item_inner:hover {
  background-image: linear-gradient(to left, #ffb9b0, #fc6857);
}

.carousel__item_inner_inner {
  border-radius: 5px;

  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: white;
}


:deep(.carousel__prev) {
  left: -35px !important;
  top: calc(50% - 25px) !important;
}

:deep(.carousel__next ) {
  right: -30px !important;
  top: calc(50% - 25px) !important;
}





@media (max-width: 500px) {
  .carousel__item_inner {
    max-width: 220px !important;

  }

}
</style>